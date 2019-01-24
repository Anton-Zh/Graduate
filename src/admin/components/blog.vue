<template lang="pug">
  #blog
    h1 Страница "Блог"
    .content 
      Articles
</template>

<script>
import Articles from "./Articles";

export default {
  components: {
    Articles,
    }
};
</script>

<style lang="scss" scoped>

#blog {
  color: $text-color;
   font-size: 21px;
   font-family: 'Roboto-Medium', Arial, sans-serif;
 }

.content{
  max-width: 100%;
  display: flex;
  flex-direction: row;
 }

</style>

