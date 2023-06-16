<script>
import Navbar       from './Components/Navbar.vue'
import Skils        from './Components/Skills.vue'
import Aboutme      from './Components/Aboutme.vue'

export default {
  nSkils: 'Main',
  components: {
    Navbar,
    Skils,
    Aboutme
  },
  data() {
    return {
        Skils: false,
        Ame: true
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

    },
    created: function() {
        this.emitter.on('aboutMe', (value) => {
        this.Ame = value
      })
    },
}
</script>

<template>
    <div class="w-screen h-screen">
        <div class="flex flex-col min-[320px]:w-10/12 sm:w-10/12 w-1/2 h-full m-auto">  
            <header class="w-full">
                <Navbar/>
            </header>
            <div class="flex flex-col">
                <div class="w-full flex justify-center z-10 display">
                <div class="w-full pt-16 flex justify-center">
                    <div class="relative flex-1 justify-center">
                        <div class="pInfo items-center justify-center flex-col space-y-2 rounded-xl">
                            <div class="w-full m-auto flex items-center justify-center rounded-t-xl">
                                <div
                                class="pPicture rounded-full min-[320px]:w-48 min-[320px]:h-48  w-60 h-60 m-5 overflow-hidden">
                                <img src="../src/img/ahsen.jpg" alt="">
                                </div>
                            </div>
                            
                            
                            <div class=" flex-col justify-between space-x-1 text-center m-auto pb-5">
                                <span class="text-center text-4xl">
                                    Ahsen Kilic
                                </span>
                                <div class="flex flex-row space-x-2">
                                    <span class="text-center text-lg m-auto">
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
            <div class="">
                <Skils
                    v-show="Skils"
                    class="skills z-0 rounded-b-xl"
                />

                <Aboutme
                    v-show="Ame"
                    class="abMe z-0 rounded-b-xl"
                />
            </div>

            </div>
        </div>
    </div>
</template>