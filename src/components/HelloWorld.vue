<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ counter.count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();
</script>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3a5379;
}
</style>
