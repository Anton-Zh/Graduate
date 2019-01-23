<template lang="pug">
  tr.skill__box(v-if="editmode === false")
    td.skill__title {{skill.title}}
    td.skill__percent {{skill.percents}}%
    td
      button.btn.btn--edt(type="button" @click="removeSkill(skill.id)")
        img(src="../../assets/images/pencil.png" class="icon")
      button.btn.btn--rem(type="button" @click="removeSkill(skill.id)")
        img(src="../../assets/images/cancel.png" class="icon")
  tr.skill__box--new(v-else)
    td 
      input.skill__name--new(type="text" placeholder="name" v-model="newSkill.title")
    td 
      input.skill__percent--new(type="text" placeholder="percent" v-model="newSkill.percents")
    td
      button.btn.btn--add(type="button" @click="addNewSkill(newSkill)") +
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions({
      addSkillAction: "skills/add",
      removeSkill: "skills/remove"
    }),
    // addNewSkill(newSkill) {
    //   this.addSkillAction(newSkill).then(response => {
    //     this.newSkill.title = ""
    //     this.newSkill.percents = ""
    //   })
    // }
  }
};
</script>

<style  lang="scss" scoped>
.skill__title {
  // color: $text-color;
  text-transform: lowercase;
}
.skill__percent {
  // color: red;

}
 
</style>