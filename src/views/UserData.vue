<template>
  <div>
    <h1>This is an account list page</h1>
  </div>
  <button @click="addBtn">create</button>
  <button @click="searchBtn">search</button>
  <!-- <ul>
    <li v-for="user in online.users" :key="user.id">
      <div id="name">{{ user.name }}</div>
      <div id="age">{{ user.age }}</div>
      <button :id="user._id" @click="editBtn(user)">update</button>
      <button :id="user._id" @click="submitDelete">delete</button>
      <button :id="user._id" @click="submitDetail">details</button>
      <button :id="user._id" @click="submitDetailLink">details-links</button>
    </li>
  </ul> -->

  <table>
    <tr>
      <th>Item 1</th>
      <th>Item 2</th>
      <th>Update</th>
      <th>Delete</th>
      <th>Details</th>
    </tr>
    <tr v-for="user in online.users" :key="user.id">
      <td>{{ user.date }}</td>
      <td>{{ user.amount }}</td>
      <td>{{ user.tag }}</td>
      <td>{{ user.remark }}</td>
      <td><button :id="user._id" @click="editBtn(user)">update</button></td>
      <td><button :id="user._id" @click="submitDelete">delete</button></td>
      <td>
        <button :id="user._id" @click="submitDetailLink">details-links</button>
      </td>
    </tr>
  </table>

  <p>{{ dataNote }}</p>

  <CreateComp v-if="createDialog"></CreateComp>
  <EditComp v-if="editDialog" :userData="userData"></EditComp>
  <!-- <DetailsComp
    v-if="detailsDialog"
    :detailResults="detailResults"
  ></DetailsComp> -->
  <SearchComp v-show="searchDialog"></SearchComp>
</template>

<script>
import { useOnlineStore } from "@/store/online";
import { useCodeSpacesStore } from "@/store/codespaceURL";
import CreateComp from "@/components/CreateComp.vue";
import EditComp from "@/components/EditComp.vue";
// import DetailsComp from "@/components/DetailsComp.vue";
import SearchComp from "@/components/SearchComp.vue";

export default {
  name: "UserData",
  setup() {
    const online = useOnlineStore();
    const codespaces = useCodeSpacesStore();
    const lastUserInfo = JSON.parse(localStorage.getItem("lastUserInfo"));
    if (lastUserInfo) {
      online.loginUser(lastUserInfo);
    }
    return { online, codespaces };
  },

  data() {
    return {
      createDialog: false,
      editDialog: false,
      detailsDialog: false,
      searchDialog: false,
      dataNote: "",
      userData: {
        name: "",
        age: "",
      },
      detailResults: {},
    };
  },

  components: {
    CreateComp,
    EditComp,
    SearchComp,
  },

  methods: {
    searchBtn() {
      this.searchDialog = !this.searchDialog;
    },
    addBtn() {
      this.createDialog = !this.createDialog;
    },

    editBtn(user) {
      this.editDialog = !this.editDialog;
      this.userData = user;
    },

    async submitDelete(e) {
      console.log(e.target.id);
      const codespaces = useCodeSpacesStore();
      await fetch(`${codespaces.csURL}api/account/delete/${e.target.id}`, {
        method: "delete",
      })
        .then((res) => {
          console.log(res);
          // return res.text();
        })
        .then((data) => {
          console.log(data);
        });

      // this.$router.push({ name: "UserData" });
      location.reload();
    },

    async submitDetailLink(e) {
      console.log(e.target.id);
      const codespaces = useCodeSpacesStore();
      await fetch(`${codespaces.csURL}api/account/${e.target.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("detail() data:", data, typeof data);
          this.online.detailObject(data);
        });

      this.$router.push({
        name: "ItemDetails",
        params: { itemid: e.target.id },
      });
    },

    submitDetail(e) {
      console.log(e.target.id);
      const codespaces = useCodeSpacesStore();
      fetch(`${codespaces.csURL}api/account/${e.target.id}`)
        .then((res) => {
          console.log(res);
          return res.text();
        })
        .then((data) => {
          console.log(data);
          this.detailResults = JSON.parse(data);
          console.log("detailResults", this.detailResults);
        });

      this.detailsDialog = !this.detailsDialog;
    },
  },

  created() {
    this.online.users = [];
    const codespaces = useCodeSpacesStore();
    fetch(
      `${codespaces.csURL}api/account/user/${this.online.loginUserEach[0]._id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.msg) {
          this.dataNote = "Please create new data";
        } else {
          console.log(data);
          for (let user of data) {
            this.online.addUser(user);
          }
        }
      });
  },
};
</script>