<script>
export default {
    data() {
        return {
            Ame: false,
        }
    },
    methods: {
        showAbout(target) {
            this.emitter.emit('Test', target);
        } 
    }
}
</script>

<template>
    <div class="mt-5 h-12 flex justify-between textColor">
        <!-- TODO: Make hamburger for navigation tabs, dont make it responsive by reducing the font size -->
        <div class="flex justify-center mt-auto mb-auto  text-xl space-x-10">
            <span @click="showAbout" id="Ame"       class="textColor mt-auto mb-auto cursor-pointer">   About me</span>
            <span @click="showAbout" id="Skills"    class="mt-auto mb-auto cursor-pointer">             Skills</span>
            <span @click="showAbout" id="Edu"       class="mt-auto mb-auto cursor-pointer">             Education</span>
            <span @click="showAbout" id="Ref"       class="mt-auto mb-auto cursor-pointer">             Reference</span>
        </div>
    </div>
</template>