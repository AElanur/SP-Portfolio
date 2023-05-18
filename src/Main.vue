<script>
import Navbar from './Components/Navbar.vue'
export default {
  name: 'Main',
  components: {
    Navbar
  }
}
</script>

<template>
    <div class="w-screen h-screen bg-mainCol">
        <div class="flex flex-col w-8/12 h-full m-auto">
            <header class="w-full">
                <Navbar/>
            </header>
            <div class="w-full flex justify-center">
                <div class="w-full pt-16 justify-center">
                    <div>
                        <div class="pPicture border border-white rounded-full w-60 h-60 ml-auto mr-auto">

                        </div>
                        <div class="pInfo bg-black h-44 infoBar">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>