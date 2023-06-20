<script>
export default {
    
    methods: { 
        start() {

        }
    }
}
</script>

<template>
    <div class="w-full skill">
        <div class="divide-y p-5">
            <span class="mb-5 text-xl">Skills</span>
            <div class="flex flex-col p-5">
                <div class="flex flex-col w-full">
                    <div class="flex flex-row space-x-2">
                        <fIcon class="w-10 h-10" :icon="['fab', 'vuejs']" />
                        <div class="bars w-3/4 h-5 bg-mainCol mt-auto mb-auto"></div>
                    </div>
                    <div class="flex flex-row space-x-2">
                        <fIcon class="w-10 h-10" :icon="['fab', 'php']" />
                        <div class="bars w-3/6 h-5 bg-mainCol mt-auto mb-auto"></div>
                    </div>
                    <div class="flex flex-row space-x-2">
                        <fIcon class="w-10 h-10" :icon="['fab', 'laravel']" />
                        <div class="bars w-4/6 h-5 bg-mainCol mt-auto mb-auto"></div>
                    </div>
                    <div class="flex flex-row space-x-2">
                        <fIcon class="w-10 h-10" :icon="['fab', 'java']" />
                        <div class="bars w-1/4 h-5 bg-mainCol mt-auto mb-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>