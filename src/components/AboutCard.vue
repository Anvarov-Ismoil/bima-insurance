<template>
    <div class="card w-[245px] sm:w-[290px] lg:w-[340px] bg-white rounded-md shadow-md overflow-hidden">
        <div class="image-block lg:w-[340px] lg:h-[220px]">
            <img :src="image" alt="#" class="w-full h-full object-cover" />
        </div>
        <div class="content p-5 flex flex-col gap-3">
            <h1 class="title font-Mont800">{{ title }}</h1>
            <p class="font-Mont600 text-[#8D8D8D]">{{ text }}</p>
            <div class="end flex items-end h-full ">
                <p class="text-brand-color flex gap-2"><img src="../assets/images/mail.png" alt="" class="w-4 h-3 mt-2">{{ email }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String
        },
        text: {
            type: String
        },
        email: {
            type: String
        },
        image: {
            type: String
        }
    },
};
</script>
