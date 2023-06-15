<script>
export default {
    data() {
        return {
            Ame: false,
        }
    },
    methods: {
        showAbout() {
            let image = document.querySelector('.pPicture');
            let me = document.querySelector('.abMe');
            let card = document.querySelector('.pInfo');

            console.log("Ame element = " + this.Ame)

            if (this.Ame == false) {
                this.Ame = !this.Ame;
                if (image.classList.contains('hideInfo')) {
                    image.classList.remove('hideInfo');
                    image.classList.add('pulse');
                    me.classList.add('showMe');
                    me.classList.remove('hideMe');
                    card.classList.remove('rounded-xl');
                    card.classList.add('rounded-t-xl');
                } else {
                    image.classList.add('pulse');
                    image.classList.add('showInfo');
                    me.classList.add('showMe');
                    card.classList.remove('rounded-xl');
                    card.classList.add('rounded-t-xl');
                }
                setTimeout(() => {
                    image.classList.remove('pulse');
                }, 450);

                this.emitter.emit('aboutMe', this.Ame);

            } else {
                if (image.classList.contains('showInfo')) {
                    image.classList.add('hideInfo');
                    image.classList.add('pulse');
                    me.classList.remove('showMe');
                    me.classList.add('hideMe');
                    card.classList.remove('rounded-t-xl');
                } else {
                    image.classList.add('hideInfo');
                    image.classList.add('pulse');
                    me.classList.add('hideMe');
                    card.classList.remove('rounded-t-xl');
                }

                setTimeout(() => {
                    this.Ame = !this.Ame;
                    this.emitter.emit('aboutMe', this.Ame);
                }, 450);

                setTimeout(() => {
                    card.classList.add('rounded-xl');
                    image.classList.remove('pulse');
                }, 450);

            }
        } 
    }
}
</script>

<template>
    <div class="mt-5 h-12 flex justify-between textColor">
        <!-- TODO: Make hamburger for navigation tabs, dont make it responsive by reducing the font size -->
        <div class="mt-auto mb-auto flex text-xl space-x-10">
            <span @click="showAbout" class="textColormt-auto mb-auto cursor-pointer">About me</span>
            <span @click="showAbout" class="mt-auto mb-auto cursor-pointer">Skills</span>
            <span @click="showAbout" class="mt-auto mb-auto cursor-pointer">Education</span>
            <span @click="showAbout" class="mt-auto mb-auto cursor-pointer">Reference</span>
        </div>
    </div>
</template>