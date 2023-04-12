<template>
    <section class="services my-section">
        <div class="container">
            <TheTitle class="font-extrabold text-xl h-a  md:text-4xl text-[#312B2B] pb-10">Популярные услуги</TheTitle>
            <div class="wrapper flex items-center justify-center flex-wrap gap-8 w-full">
                <TheCard v-for="item in 4" :key="item"><TheButton class="pt-6" type ="bg-brand-color/90" color="text-[#312B2B]" @action="someMethod">Подробнее</TheButton></TheCard>
            </div>
        </div>
    </section>
</template>

<script>
import TheButton from '../components/TheButton.vue';
import TheCard from '../components/TheCard.vue'
import TheTitle from '../components/TheTitle.vue';
export default{
    components:{
        TheCard,
        TheTitle,
        TheButton
}

}
</script>