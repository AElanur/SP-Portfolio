<script>
import Navbar       from './Components/Navbar.vue'
import Skils        from './Components/Skills.vue'
import AboutMe      from './Components/AboutMe.vue'
export default {
  name: 'Main',
  components: {
    Navbar,
    Skils,
    AboutMe
  },
  data() {
    return {
        AmE: false
    }
  },
  methods: {
    test() {
      let image = document.querySelector('.pPicture')
      image.classList.remove('reset')
      image.classList.add('expand')
    },
    reset() {
        let image = document.querySelector('.pPicture')
        image.classList.add('reset')
        image.classList.remove('expand')
    },
    showInfo() {
        let image = document.querySelector('.pPicture');
        let me = document.querySelector('.abMe');
        let card = document.querySelector('.pInfo');

        if (this.AmE == false) {
            this.AmE = !this.AmE;
            if (image.classList.contains('hideInfo')) {
                image.classList.remove('hideInfo');
                image.classList.add('pulse');
                me.classList.add('showMe');
                me.classList.remove('hideMe');
                card.classList.remove('rounded-xl')
                card.classList.add('rounded-t-xl')
            } else {
                image.classList.add('pulse');
                image.classList.add('showInfo');
                me.classList.add('showMe');
                card.classList.remove('rounded-xl')
                card.classList.add('rounded-t-xl')
            }
            setTimeout(() => {
                image.classList.remove('pulse');
            }, 450);

        } else {
            if (image.classList.contains('showInfo')) {
                image.classList.add('hideInfo');
                image.classList.add('pulse');
                me.classList.remove('showMe');
                me.classList.add('hideMe');
                card.classList.remove('rounded-t-xl')
            } else {
                image.classList.add('hideInfo');
                image.classList.add('pulse');
                me.classList.add('hideMe');
                card.classList.remove('rounded-t-xl')
            }
            
            setTimeout(() => {
                this.AmE = !this.AmE;
            }, 450);
            setTimeout(() => {
                card.classList.add('rounded-xl')
                image.classList.remove('pulse');
            }, 450);
            
        }
    }
  }
}
</script>

<template>
    <div class="w-screen h-screen bg-mainCol">
        <div class="flex flex-col w-6/12 h-full m-auto">  
            <header class="w-full">
                <Navbar/>
            </header>
            <div class="w-full flex justify-center z-10 display">
                <div class="w-full pt-16 flex justify-center">
                    <div class="relative flex-1 justify-center">
                        <div class="pInfo bg-black flex items-center justify-center flex-col space-y-2 rounded-xl">
                            <div class="bgInfo w-full m-auto flex items-center justify-center bg-pink-200 rounded-t-xl">
                                <div 
                                @mouseenter="test" 
                                @mouseleave="reset" 
                                @click="showInfo"
                                class="pPicture border-mainCol border-2 rounded-full w-60 h-60 m-5 overflow-hidden">
                                <img src="../src/img/hijab.png" alt="">
                            
                            </div>
                            </div>
                            
                            
                            <div class=" flex-col justify-between space-x-1 text-center m-auto pb-5">
                                <span class="text-center text-4xl">
                                    Ahsen Kilic
                                </span>
                                <div class="flex flex-row space-x-2">
                                    <span class="text-center text-lg">
                                        Student software engineering
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Skils 
                v-show="AmE"
                class="abMe z-0 rounded-b-xl"/>
            </div>
        </div>
    </div>
</template>