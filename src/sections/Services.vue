<template>
    <section class="services my-section">
        <div class="container">
            <TheTitle class="font-extrabold text-4xl text-black/80 pb-8">Популярные услуги</TheTitle>
            <div class="wrapper flex items-center justify-center flex-wrap gap-8 w-full">
                <TheCard v-for="item in 4" :key="item"><TheButton class="pt-6" type ="bg-brand-color/90" color="text-black" @action="someMethod">Подробнее</TheButton></TheCard>
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