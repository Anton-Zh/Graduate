<template lang="pug">
  .skills
    .skills-title {{type.name}}
</template>


<script>
export default {
  props: {
    type: {
      type: Object,
      default: () => {}
}
  }
}
</script>

<style lang="scss" scoped>
.skills{
  width: 50%;  
}
.skills-title{
    font-weight: bold;
    font-size: 20px;
}
</style>