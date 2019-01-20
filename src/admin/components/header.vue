<template lang="pug">
  #header
    .title Панель администрирования
    a.exit(href='#' @click="logout") Вернуться на сайт

</template>



<style lang="scss" scoped>
#header {
  background: $main;
  display: flex;
  font-family: 'Roboto-Medium', Arial, sans-serif;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100%;
  a  {text-decoration: none;}
}

.title{
  font-size: 28px;
}
.exit {
  color: #fff;
}
</style>
