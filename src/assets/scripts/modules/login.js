import axios from 'axios';
import Vue from 'vue';

new Vue({
  el: "#login",
  data(){
    return{
      user:{
        name: "",
        password: ""
      }
    };
  },
  methods:{
    login(){
      axios.post("https://webdev-api.loftschool.com/login", this.user).then(response =>{
        if (response.status == 200){
          const token = response.data.token;
          localStorage.setItem("token",token);
        }
      }, error=>{
        console.error(error);
      })
    }
  },
  template: "#auth-form"

})