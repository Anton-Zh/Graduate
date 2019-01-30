
<template lang="pug">
  #works
    h1 Страница "Мои работы"
    .content 
      .addwork Добавить новую работу
      .worklist Перечень работ

</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

#works {
  color: $text-color;
   font-size: 21px;
   font-family: 'Roboto-Medium', Arial, sans-serif;
 }

.content{
  max-width: 100%;
  display: flex;
  flex-direction: row;
 }

 .addwork {
   width: 30%;
   height: 200px;
   border: 1px $text-color solid;
   margin-right: 40px;
 }
 .worklist {
   width: 70%;
   height: 200px;
   border: 1px $text-color solid;
 }

</style>

