<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default { 
    components: {
        HalfCircleSpinner
    },
    methods: { 
        start() { 
            var btn     = document.getElementsByClassName("btnStart");
            var spinner = document.getElementsByClassName("Spinner");
            btn[0].classList.add("twist");
            setTimeout(() => { 
                btn[0].style.display = "none";
                this.loading = true;
                spinner[0].classList.add("showSpin");
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
        <div @click="start" class="rounded-full border-2 w-80 h-80 m-auto flex justify-center">
            <div class="m-auto">
                <fIcon class="btnStart w-32 h-32" :icon="['fas', 'play']"/>
                <half-circle-spinner class="Spinner" :size="80" :animation-duration="1000" color="#FFFFFF" v-show="loading" />
            </div>
        </div>
    </div>
</template>

