<template>
    <div class="news-card font-Mont600 w-[440px] h-[500px] ">
        <img v-if="image" :src="image" alt="#" class="md:w-[400px] lg:w-[500px]
         h-[300px] object-cover">
        <p class="text-[15px] text-brand-color mt-4 flex gap-4 lg:gap-8">
            {{ subtitle }}
            <span class="w-[150px] h-[2px] mt-3 bg-brand-color">
            </span>
        </p>
        <h2 class="text-[18px] font-Mont600 tracking-wide my-5">
            {{ title }}
        </h2>
        <p class="opacity-50">
            {{ desc }}
        </p>
    </div>
</template>
<script>
export default {
props: {
subtitle: {
    type: String
},
title: {
    type: String
},
desc: {
    type: String
},
image: {
    type: String
}
},
}
</script>