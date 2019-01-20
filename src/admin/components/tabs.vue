<template lang="pug">
  #tabs
    ul.tabs
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        // { title: "Логин", href: "/login" },
        { title: "Обо мне", href: "/" },
        { title: "Мои работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
}

.item {
  font-family: '$font-Bern', Arial, sans-serif;;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: 180px;
  width: 180px;
  border-right: 2px solid #fff;
  
}

.link {
  text-decoration: none;
  align-items: center;
  justify-content: center;
  display: flex;
  color: $text-color;
  // font-size: 16px;
}

.tabs {
  display: flex;
  background: $bg-color;
  padding: 0;
  margin-top: 0;
}
  li {
    list-style: none;
  }
</style>
