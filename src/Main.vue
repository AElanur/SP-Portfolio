<script>
import Navbar       from './Components/Navbar.vue'
import Skils        from './Components/Skills.vue'
import Aboutme      from './Components/Aboutme.vue'
import {AboutFunction, SkillsFunction, EduFunction, RefFunction}  from './js/AnimationFunctions.js'

export default {
  nSkils: 'Main',
  components: {
    Navbar,
    Skils,
    Aboutme
  },
  data() {
    let data = {
        image: document.querySelector('.pPicture'),
        component: null,
        opposing: null,
        target: null,
        element: null,
    }

    return {
        Ame: true,
        Skills: false,
        Edu: false,
        Ref: false,
        data, 
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
        this.data.image     = document.querySelector('.pPicture')
        
        this.emitter.on('Show', (target) => {
            switch (true) {
                case target == 'Skills':
                    this.data.component = this.Ame
                    this.data.element   = this.Skills
                    this.data.opposing  = document.querySelector('.skills')
                    this.data.target    = document.querySelector('.nText')
                    let newData         = SkillsFunction(this.data)
                    this.Ame            = newData.component
                    this.Skills         = newData.element
                    break;
                case target == 'Ame':
                    this.Ame = AboutFunction(this.data)
                    break;
                case target == 'Edu':
                    this.Edu = EduFunction(this.data)
                    break;
                case target == 'Reference':
                    this.Ref = RefFunction(this.data)
                    break;
                default:
                break;
            }
        })
    }

    },
    created: function() {
        this.emitter.on('aboutMe', (value) => {
        this.Ame = value
      })
    },
    mounted() {
        this.showInfo()
    }
}
</script>

<template>
    <div class="w-screen h-screen">
        <div class="flex flex-col  w-1/2 h-full m-auto">  
            <header class="w-full">
                <Navbar/>
            </header>
            <div class="flex flex-col">
                <div class="w-full flex justify-center display">
                <div class="w-full pt-16 flex justify-center">
                    <div class="flex justify-center flex-col w-full">
                        <div class="pPicture rounded-full min-[320px]:w-48 min-[320px]:h-48  w-60 h-60 m-auto overflow-hidden">
                            <img src="../src/img/ahsen.jpg" class=" object-fill" alt="">
                        </div>
                        <div class="pInfo items-center justify-center flex-col space-y-2 rounded-xl">                            
                            <div class="nText flex-col justify-between space-x-1 text-center m-auto pb-5">
                                <span class="text-center text-4xl">
                                    Ahsen Kilic
                                </span>
                                <div class="flex flex-row space-x-2">
                                    <span class="text-center text-lg m-auto">
                                        Student software engineering
                                    </span>
                                </div>
                                    <Aboutme
                                        v-show="Ame"
                                        class="abMe rounded-b-xl"
                                    />
                                    <Skils
                                        v-show="Skills"
                                        class="skills rounded-b-xl"
                                    />
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>