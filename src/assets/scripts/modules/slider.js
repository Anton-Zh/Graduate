import Vue from 'vue';

const info = {
  template: "#slider-info",
  props:{
    work: Object
  }
};
const display = {
  template: "#slider-display",
  props:{
    work: Object
  }
};
const btns = {
  template: "#slider-btns",
  props:{
    works: Array,
    index: Number
  },
  data(){
    return{
      prevWorks: [],
      nextWorks: []
    };
  },
  created(){
    this.prevWorks = this.arrForBtn("prev");
    this.nextWorks = this.arrForBtn("next");
  },
  methods:{
    arrForBtn(btnDirection){
      const worksArray = [...this.works];
      const last = worksArray[worksArray.length-1];

      switch(btnDirection){
      case 'next':{
      worksArray.push(worksArray[0]);
      worksArray.shift();
      break;
      }
      case 'prev':{
        worksArray.unshift(last);
        worksArray.pop();
      break;
      }
    }
      return worksArray;
    } ,
    slide(direction){
      this.$emit("slide",direction);
    }
  }  
};
new Vue({
  el: "#slider-component",
    components: {
    info, display, btns
  },
  data(){
    return{
      works: [],
      currentIndex: 0
    };
  },
  computed:{
    currentWork(){
      return this.works[this.currentIndex]
    }
  },
  watch:{
    currentIndex(value){
    this.loop(value)
    }
  },
 
  created(){
    const data =  require('../../../data/slider.json');
    this.works = data;
  }, 
  methods:{
      handleSlide(direction){
      switch(direction){
        case "next":
          this.currentIndex = this.currentIndex + 1;
        break;
        case "prev" :
          this.currentIndex = this.currentIndex - 1;
        break;
      }
  },
    loop(value){
      const minusOne = this.works.length -1;
      if (value> minusOne) {
        this.currentIndex = 0
      }

      if(value < 0){
        this.currentIndex = minusOne
      } 
    }
  },
  

  template: "#slider-root"
});