<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default { 
    components: {
        HalfCircleSpinner
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
            }, 1000);
        }
    },
    data() { 
        return { 
            loading: false
        }
    }
}
</script>

<template>
    <div  class="w-screen h-screen justify-center flex">
        <div @click="start" class="circle rounded-full border-4 w-80 h-80 m-auto flex justify-center">
            <div class="m-auto">
                <fIcon class="btnStart w-32 h-32" :icon="['fas', 'play']"/>
                <half-circle-spinner class="Spinner" :size="80" :animation-duration="1000" color="#FFFFFF" v-show="loading" />
            </div>
        </div>
    </div>
</template>

