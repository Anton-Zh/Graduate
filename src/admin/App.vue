<template lang="pug">
  div
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
export default {
  components: {
    appHeader: header,
    tabs
  }
};
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  height: 100%;
}
.wrapper {
  height: 100%;
}
#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}
.header {
  height: 80px;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
* {
  box-sizing: border-box;
}
.content {
  // flex: 1;
  // padding: 20px;
    background: url("/./accets/images/bg/bg-index.png") center center/cover no-repeat;

  :after{
    // content: "";
    // position: absolute;
    // display: block;
    // z-index: -1;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // background-color: rgba($dark-grey, .2);
  }
}
</style>

