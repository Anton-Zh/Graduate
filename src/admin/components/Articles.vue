<template lang="pug">
  .articles
    .addArticles
      h3.addArticle__title Добавить запись
      .article__title--new
        input.title--new(type="text" placeholder="Название" )
      .article__date__box
        .article__date--new
          input.date--new(type="date" placeholder="Дата")
        .article__time--new
          input.time--new(type="time" placeholder="Время" )
      .article__text--new
        textarea.text--new(type="text" placeholder="Содержание")
      
    .lastArticles
      h3 Последние записи
      table.article__box
        tr.article__desc.article__description
          td.desc--title Название
          td.desc--date Дата
          td.desc--text Содержание
        tr.article__desc
          td.desc--title
          td.desc--date
          td.desc--text
        tr.article__desc
          td.desc--title 
          td.desc--date 
          td.desc--text 
      //- .article__box
      //-   ul.article__desk
      //-     li.article__desk--title  Название
      //-     li.article__desk--date  Дата
      //-     li.article__desk--text Содержание
            

</template>

<style lang="scss" scoped>
.articles{
  display: flex;
  margin-left: 0;
  width: 100%;
  color: $text-color;
  font-family: 'Roboto-Medium', Arial, sans-serif;
}
.addArticles{
  width: 40%;
  margin-right: 40px;
  &__title {
    width: 100%;
  }
}

.lastArticles{
  flex-direction: column;
  display: flex;
  height: 155px;
  width: 60%;
}

.article {
  &__title {
    width: 30%;
    &--new {
      width: 100%;
      input {
        width: 95%;
      }
    }
  }
  &__time--new {
    width: 50%;
  }
  &__date--new {
    width: 50%;
    margin-right: 16px;
  }
  &__description {
    
    background-color: #efeee9;
  }
}

textarea {
  border: $text-color 1px solid;
  width: 97%;
  border-radius: 5px;
  background-color: transparent;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 2px; // чтобы справа выровнять textarea
  font-family: 'Roboto-Medium', Arial, sans-serif;
  font-size: 12px;
  margin-top: 10px;
  resize: none;
}

input {
  background-color: transparent;
  border: $text-color 1px solid;
  border-radius: 5px;
  margin: 10px 0 0 0;
  padding: 0 10px;
  height: 40px;
}

.article__desc {
  display: flex;
  align-self: auto;
  height: 40px ;
  margin: 0;
  padding: 0;
  list-style: none;
  border: $text-color 1px solid;
  border-bottom: 0;
  text-transform: lowercase;
  

  &:first-child {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  }
  &:last-child {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom: $text-color 1px solid;
  }

}

.article__box {
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: $text-color 0px solid;
  border-radius: 5px;
}

.article__date__box {
  width: 100%;
  display: flex;
  input {
    width: 90%;
  }
}

.text--new {
  height: 150px;
}

.date--new {
  color: #8c8b8a;
}

.time--new {
 color: #8c8b8a;
}

.desc {
  
  &--title {
    
    border-right: $text-color 1px solid;
    border-top: 0px;
    width: 30%;
    
  }
  &--date {
    border-right: $text-color 1px solid;
    width: 20%;
  }
  &--text {
    border-right: $text-color 1px solid;
    width: 50%;
    &:last-child {
      border-right: 0px;
    }
  }
}
</style>
