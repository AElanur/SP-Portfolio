<script>
import { HalfCircleSpinner } from 'epic-spinners'
import Main                  from '../Main.vue'
export default { 
    components: {
        HalfCircleSpinner,
        Main
    },
    methods: { 
        start() { 
            var btn         = document.getElementsByClassName("btnStart");
            var spinner     = document.getElementsByClassName("Spinner");
            var circle      = document.getElementsByClassName("circle");
            btn[0]          .classList.add("twist");
            circle[0]       .classList.add("hideCircle");
            setTimeout(() => { 
                spinner[0]  .classList.add("showSpin");
                circle[0]   .style.borderColor = "transparent";
                btn[0]      .style.display = "none";
                this        .loading = true;
                this        .loadMain()
            }, 1000);
        },
        loadMain() {
            let Mainpage = document.getElementsByClassName("Mainpage");
            setTimeout(() => {
                this        .entree = false;
                this        .main = true;
                this        .loading = false;
                Mainpage[0] .classList.add("showMainpage");
            }, 2000);
        }
    },
    data() { 
        return { 
            loading: false,
            entree: true,
            main : false
        }
    }
}
</script>

<template>
    <div v-show="entree" class="w-screen h-screen justify-center flex">
        <div @click="start" class="circle rounded-full border-4 w-80 h-80 min-[340px]:w-64 min-[340px]:h-64 m-auto flex justify-center">
            <div class="m-auto">
                <fIcon class="btnStart min-[320px]:w-20 min-[320px]:h-20 w-32 h-32" :icon="['fas', 'play']"/>
                <half-circle-spinner class="Spinner" :size="80" :animation-duration="1000" color="#FFFFFF" v-show="loading" />
            </div>
        </div>
    </div>

    <Main class="Mainpage" v-show="main"/>
</template>

