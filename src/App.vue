<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  .container {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
  }
}
.welcomeHeader {
  background-color: rgb(175 228 236);
  .headerContent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: 100px;

    .logo {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
    }

    a {
      background-color: white;
      text-decoration: none;
      color: #000;
      margin-left: 10px;
      padding: 12px 10px;
      border-radius: 10px;
      font-size: 1rem;
      &:hover {
        background-color: rgb(245, 140, 143);
        color: white;
      }
    }
  }
}

.welcomePage {
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.644);
  height: calc(100vh - 100px);
  padding: 50px 0;
  .pageContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .rightdiv {
      height: 500px;
      width: 100%;
    }

    .leftdiv {
      background-color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 350px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgb(165, 197, 202),
        0 6px 20px 0 rgb(166, 202, 207);

      h1 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 2rem auto 1.5rem auto;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        line-height: 2rem;
      }

      a {
        background-color: rgb(245, 140, 143);
        text-decoration: none;
        color: #000;
        padding: 15px 30px;
        border-radius: 10px;
        letter-spacing: 0.2rem;
        font-size: 1rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}

.signBox {
  margin-top: 0rem;
  padding: 2rem 3rem;
  border-radius: 10px;
  background-color: rgb(194, 234, 240);
  position: relative;
  h2 {
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  p {
    font-size: 1.1rem;
    margin-top: 2rem;
    letter-spacing: 0.1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      height: 1.5rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      margin-left: 1rem;
      padding: 0 1rem;
    }

    .checkbox {
      display: flex;
      align-items: start;
      color: rgb(255, 111, 116);
      font-weight: 900;
      letter-spacing: 0.2rem;

      input[type="checkbox"] {
        height: 1.3rem;
        width: 1.3rem;
        margin-right: 1rem;
        margin-left: 1.5rem;
      }
    }

    select {
      height: 1.5rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      margin-left: 0.7rem;
      padding: 0 1rem;
    }

    option {
      font-size: 1.2rem;
      border-radius: 5px;
    }

    button {
      text-decoration: none;
      background-color: white;
      border: transparent;
      color: #000;
      padding: 10px 30px;
      border-radius: 10px;
      letter-spacing: 0.2rem;
      font-size: 1rem;
      color: black;
      font-weight: 600;
      margin-top: 1rem;
      cursor: pointer;
      &:hover {
        background-color: rgb(245, 140, 143);
        color: white;
      }
    }
  }

  .registerTransition-enter-active {
    animation: atguigu 1s ease;
  }

  .registerTransition-leave-active {
    animation: atguigu 1s ease-in reverse;
  }

  @keyframes atguigu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .transition {
    background-color: white;
    border-radius: 10px;
    transition: 1s linear;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .transitionHoler {
      margin: auto;
      max-width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 70%;
        height: auto;
        margin-bottom: 2rem;
      }

      h3 {
        font-size: 2rem;
        text-align: center;
        color: rgb(245, 140, 143);
      }
    }
  }
}

.mainPage {
  header {
    background-color: rgb(175 228 236);
    height: 100px;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    aside {
      width: 100%;
      border-bottom: 1px solid rgb(153, 153, 153);
    }
    .userData {
      width: 100%;
    }
  }
}

.mainPageHeaderContent {
  background-color: rgb(175 228 236);
  .mainPageHeaderContent {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    height: 100px;

    .logo {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
    }

    .userHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
      }

      button {
        border: transparent;
        background-color: white;
        text-decoration: none;
        color: #000;
        margin-left: 5rem;
        padding: 10px 10px;
        border-radius: 10px;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        &:hover {
          background-color: rgb(245, 140, 143);
          color: white;
        }
      }
    }
  }
}

.sideBar {
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    background-color: white;
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
  .sideBarBtn1,
  .sideBarBtn2,
  .sideBarBtn3 {
    background-color: rgb(245, 140, 143);
    color: white;
  }
}

.userDataList {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  .userDataListHolder {
    width: 100%;
  }
  .titleAndButton {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    button {
      border: 1px solid rgb(25, 183, 207);
      background-color: white;
      text-decoration: none;
      color: #000;
      padding: 10px 10px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      margin-left: 1rem;
      cursor: pointer;
      &:hover {
        border: 1px solid rgb(245, 140, 143);
        background-color: rgb(245, 140, 143);
        color: white;
      }
    }
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    .notDisplayInMobile {
      display: none;
    }
    .styleGreen {
      background-color: rgb(215, 250, 255);
    }
    .styleRed {
      background-color: rgb(252, 239, 239);
    }
    th {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
      background-color: rgb(175 228 236);
    }
    td {
      font-size: 0.7rem;
      padding: 0.3rem 0.5rem;
      text-align: center;
      button {
        font-size: 0.7rem;
        border: 1px solid rgb(0, 144, 167);
        border-radius: 5px;
        text-decoration: none;
        background-color: white;
        padding: 0.1rem 0.1rem;
      }
    }
  }
  h3 {
    color: rgb(255, 117, 122);
  }
  p {
    margin: 1rem 0;
    color: rgb(245, 140, 143);
  }
}

.createAndSearch {
  margin-top: 2rem;
  h4 {
    margin-bottom: 1rem;
  }
  input {
    height: 2rem;
  }
  select {
    height: 2rem;
  }
  option {
    font-size: 1.2rem;
  }

  button {
    border: 1px solid rgb(25, 183, 207);
    background-color: white;
    text-decoration: none;
    color: #000;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    margin-left: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
    &:hover {
      border: 1px solid rgb(245, 140, 143);
      background-color: rgb(245, 140, 143);
      color: white;
    }
  }
}

.itemDetail {
  padding: 5rem;
  text-align: center;
  h4 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

.reportPage {
  padding: 2rem 2rem 0 2rem;
  h4 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }

  .customizedTags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    flex-direction: row;
  }

  .noteInfo {
    color: rgb(255, 124, 128);
    font-size: 1.5rem;
    font-weight: 600;
  }

  .allecharts {
    margin-top: 2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .echart {
      width: 100%;
      height: 260px;
      border: 1px solid rgb(211, 211, 211);
      margin-bottom: 0.5rem;
    }
  }

  .echart {
    width: 100%;
    height: 350px;
    border: 1px solid rgb(211, 211, 211);
    margin-bottom: 0.5rem;
  }
}

.accountPage {
  padding: 2rem 0 0 2rem;
  h4 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .noteInfo {
    color: rgb(255, 124, 128);
    font-size: 1.5rem;
    font-weight: 600;
  }

  .tagBtn {
    border: 1px solid rgb(25, 183, 207);
    background-color: white;
    text-decoration: none;
    color: #000;
    padding: 7px 20px;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    margin-right: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
      border: 1px solid rgb(245, 140, 143);
      background-color: rgb(245, 140, 143);
      color: white;
    }
  }

  .tagLoop {
    margin-bottom: 1.5rem;
    input {
      height: 2rem;
      padding-left: 1rem;
      margin-left: 1rem;
    }
    button {
      height: 2rem;
      padding: 0 1rem;
    }
  }

  ul {
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    li {
      list-style: none;
      margin-top: 1rem;
      padding: 7px 20px;
      border: 1px solid rgb(125, 139, 141);
      border-radius: 10px;
    }
  }
}

.adminPage {
  padding: 0 2rem;
  table {
    margin: 3rem auto 1rem auto;
    .notDisplayInMobile {
      display: none;
    }
    .styleGreen {
      background-color: rgb(215, 250, 255);
    }
    .styleRed {
      background-color: rgb(252, 239, 239);
    }
    th {
      font-size: 1rem;
      padding: 0.7rem 0.5rem;
      background-color: rgb(175 228 236);
    }
    td {
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
      text-align: center;
      button {
        font-size: 1rem;
        border: 1px solid rgb(0, 144, 167);
        border-radius: 5px;
        text-decoration: none;
        background-color: white;
        padding: 0.1rem 0.5rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .welcomeHeader {
    background-color: rgb(175 228 236);
    .headerContent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100px;

      .logo {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
      }

      a {
        background-color: white;
        text-decoration: none;
        color: #000;
        margin-left: 20px;
        padding: 12px 30px;
        border-radius: 10px;
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        &:hover {
          background-color: rgb(245, 140, 143);
          color: white;
        }
      }
    }
  }

  .welcomePage {
    padding: 150px 0;
    .pageContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .rightdiv {
        height: 500px;
        width: 40%;
      }

      .leftdiv {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
        width: 50%;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgb(165, 197, 202),
          0 6px 20px 0 rgb(166, 202, 207);

        h1 {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 2rem auto 1.5rem auto;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 2rem;
        }

        a {
          background-color: rgb(245, 140, 143);
          text-decoration: none;
          color: #000;
          padding: 15px 30px;
          border-radius: 10px;
          letter-spacing: 0.2rem;
          font-size: 1.3rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }

  .signBox {
    // margin-top: 5rem;
    padding: 3rem;
    border-radius: 10px;
    background-color: rgb(194, 234, 240);
    h2 {
      margin-bottom: 2rem;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 1.1rem;
      margin-top: 2rem;
      letter-spacing: 0.1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      input {
        height: 2rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        margin-left: 1rem;
        padding: 0 1rem;
      }

      .checkbox {
        display: flex;
        align-items: start;
        color: rgb(255, 111, 116);
        font-weight: 900;
        letter-spacing: 0.2rem;

        input[type="checkbox"] {
          height: 1.3rem;
          width: 1.3rem;
          margin-right: 1rem;
          margin-left: 1.5rem;
        }
      }

      select {
        height: 2rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        margin-left: 0.7rem;
        padding: 0 1rem;
      }

      option {
        font-size: 1.2rem;
        border-radius: 5px;
      }

      button {
        text-decoration: none;
        background-color: white;
        border: transparent;
        color: #000;
        padding: 15px 30px;
        border-radius: 10px;
        letter-spacing: 0.2rem;
        font-size: 1.1rem;
        color: black;
        font-weight: 600;
        margin-top: 2rem;
        cursor: pointer;
        &:hover {
          background-color: rgb(245, 140, 143);
          color: white;
        }
      }
    }
  }

  .mainPage {
    header {
      background-color: rgb(175 228 236);
      height: 100px;
    }

    .mainContent {
      display: flex;
      flex-direction: row;
      height: calc(100vh - 100px);
      aside {
        width: 20%;
        border-right: 1px solid rgb(153, 153, 153);
      }
      .userData {
        width: 80%;
      }
    }
  }

  .mainPageHeaderContent {
    background-color: rgb(175 228 236);
    .mainPageHeaderContent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100px;

      .logo {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        width: 30%;
      }

      .userHeader {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 70%;

        p {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.1rem;
        }

        button {
          border: transparent;
          background-color: white;
          text-decoration: none;
          color: #000;
          margin-left: 5rem;
          padding: 12px 30px;
          border-radius: 10px;
          font-size: 1.2rem;
          letter-spacing: 0.15rem;
          &:hover {
            background-color: rgb(245, 140, 143);
            color: white;
          }
        }
      }
    }
  }

  .sideBar {
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: none;
    gap: 3rem;

    a {
      background-color: white;
      text-decoration: none;
      color: #000;
      padding: 15px 25px;
      border-radius: 10px;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      font-weight: 600;
      cursor: pointer;
    }
    .sideBarBtn1,
    .sideBarBtn2,
    .sideBarBtn3 {
      background-color: rgb(245, 140, 143);
      color: white;
    }
  }

  .userDataList {
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    .userDataListHolder {
      margin-left: 2rem;
      width: 100%;
    }
    .titleAndButton {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      button {
        border: 1px solid rgb(25, 183, 207);
        background-color: white;
        text-decoration: none;
        color: #000;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        font-weight: 600;
        margin-left: 1rem;
        cursor: pointer;
        &:hover {
          border: 1px solid rgb(245, 140, 143);
          background-color: rgb(245, 140, 143);
          color: white;
        }
      }
    }

    table {
      margin-bottom: 1rem;
      .styleGreen {
        background-color: rgb(215, 250, 255);
      }
      .styleRed {
        background-color: rgb(252, 239, 239);
      }
      .notDisplayInMobile {
        display: table-cell;
      }
      th {
        font-size: 1.1rem;
        padding: 0.7rem 1rem;
        background-color: rgb(175 228 236);
      }
      td {
        font-size: 1rem;
        padding: 0.3rem 1rem;
        text-align: center;
        button {
          font-size: 1rem;
          border: 1px solid rgb(0, 144, 167);
          border-radius: 5px;
          text-decoration: none;
          background-color: white;
          padding: 0.1rem 0.5rem;
        }
      }
    }
    h3 {
      color: rgb(255, 117, 122);
    }
    p {
      margin: 1rem 0;
      color: rgb(245, 140, 143);
    }
  }

  .createAndSearch {
    margin-top: 2rem;
    h4 {
      margin-bottom: 1rem;
    }
    input {
      height: 2rem;
    }
    select {
      height: 2rem;
    }
    option {
      font-size: 1.2rem;
    }

    button {
      border: 1px solid rgb(25, 183, 207);
      background-color: white;
      text-decoration: none;
      color: #000;
      padding: 7px 20px;
      border-radius: 10px;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
      font-weight: 600;
      margin-left: 1rem;
      cursor: pointer;
      &:hover {
        border: 1px solid rgb(245, 140, 143);
        background-color: rgb(245, 140, 143);
        color: white;
      }
    }
  }

  .itemDetail {
    padding: 5rem;
    text-align: center;
    h4 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  .reportPage {
    padding: 5rem 0 0 2rem;
    h4 {
      margin-bottom: 2rem;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .noteInfo {
      color: rgb(255, 124, 128);
      font-size: 1.5rem;
      font-weight: 600;
    }

    .allecharts {
      margin-top: 3rem;

      div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
      }

      .echart {
        width: 50%;
        height: 320px;
        border: 1px solid rgb(211, 211, 211);
        margin-bottom: 0.5rem;
      }
    }

    .echart {
      width: 100%;
      height: 400px;
      border: 1px solid rgb(211, 211, 211);
      margin-bottom: 0.5rem;
    }
  }

  .accountPage {
    padding: 5rem 0 0 5rem;
    h4 {
      margin-bottom: 2rem;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .noteInfo {
      color: rgb(255, 124, 128);
      font-size: 1.5rem;
      font-weight: 600;
    }

    .tagBtn {
      border: 1px solid rgb(25, 183, 207);
      background-color: white;
      text-decoration: none;
      color: #000;
      padding: 7px 20px;
      border-radius: 10px;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
      font-weight: 600;
      margin-right: 1rem;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        border: 1px solid rgb(245, 140, 143);
        background-color: rgb(245, 140, 143);
        color: white;
      }
    }

    .tagLoop {
      margin-bottom: 2rem;
      input {
        height: 2rem;
        padding-left: 1rem;
        margin-left: 1rem;
      }
      button {
        height: 2rem;
        padding: 0 1rem;
      }
    }

    ul {
      font-size: 1.5rem;
      list-style: none;
      li {
        list-style: none;
        margin-top: 1rem;
      }
    }
  }

  .adminPage {
    table {
      margin: 3rem auto 1rem auto;
      .styleGreen {
        background-color: rgb(215, 250, 255);
      }
      .styleRed {
        background-color: rgb(252, 239, 239);
      }
      .notDisplayInMobile {
        display: table-cell;
      }
      th {
        font-size: 1.1rem;
        padding: 0.7rem 1rem;
        background-color: rgb(175 228 236);
      }
      td {
        font-size: 1rem;
        padding: 0.3rem 1rem;
        text-align: center;
        button {
          font-size: 1rem;
          border: 1px solid rgb(0, 144, 167);
          border-radius: 5px;
          text-decoration: none;
          background-color: white;
          padding: 0.1rem 0.5rem;
        }
      }
    }
  }
}
</style>
