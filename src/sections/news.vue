<template>
    <section class="news">
        <div class="container">
            <div class="news-card">
                <p class="text-[15px] text-brand-color mt-8 flex gap-8"> {{ subtitle }} <span
                        class="w-[150px] h-[2px] mt-3 bg-brand-color"></span></p>
                <h2 class="text-[18px] w-[300px] font-semibold tracking-wide my-5">{{ title }}
                </h2>
                <p class="opacity-50 w-[310px]"> {{ desc }}
                </p>

                <p class="text-[15px] text-brand-color mb-4 mt-[50px] flex gap-8"> {{ subtitle_2 }} <span
                        class="w-[150px] h-[2px] mt-3 bg-brand-color"></span></p>
                <h2 class="text-[18px] w-[300px] font-semibold tracking-wide mb-5">{{ title_2 }}
                </h2>
                <p class="opacity-50 w-[380px]">{{ desc_2 }}
                </p>
            </div>
        </div>
    </section>
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
        subtitle_2: {
            type: String
        },
        title_2: {
            type: String
        },
        desc_2: {
            type: String
        },
    },
}
</script>
<style></style>