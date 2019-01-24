<template lang="pug">
  #about
    h1 Страница "Обо мне"
    .content
      skills-row.skill__group(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    ) 
</template>


<script>
const data = [
  {id: 1, title: "html", percent: 20, category: 0},
  {id: 2, title: "php", percent: 20, category: 1},
  {id: 3, title: "css", percent :20, category: 0},
  {id: 4, title: "node.js", percent: 20, category: 1},
  {id: 5, title: "mongo", percent: 20, category: 1},
  {id: 6, title: "git", percent: 20, category: 2},
  {id: 7, title: "gulp", percent: 20, category: 2}
];

import SkillsRow from './skillsRow'
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SkillsRow
  },
  data() {
    return {
      types: [
        {id: 0, name: 'frontend'},
        {id: 1, name: 'backend'},
        {id: 2, name: 'workflow'},
      ],
      skills: data
    }
  },
  computed: {
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  },
};
</script>

<style  lang="scss" scoped>
#about {
    color: $text-color;
    font-size: 21px;
    font-family: 'Roboto-Medium', Arial, sans-serif;
 }
.content{
    font-size: 16px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
 }
 .btn {
  width: 120px;
  height: 20px;
  border-radius: 5px;
  &--add {
    color: red;
    background-color:green;
  }
}
.skill__group {
  text-transform: uppercase;
}

</style>