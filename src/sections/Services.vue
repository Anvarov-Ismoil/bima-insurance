<template>
    <section class="services my-section">
        <div class="container">
            <TheTitle>Популярные услуги</TheTitle>
            <div class="wrapper flex items-center justify-center flex-wrap gap-8 w-full">
                <TheCard v-for="item in 4" :key="item"/>
            </div>
        </div>
    </section>
</template>

<script>
import TheCard from '../components/TheCard.vue'
import TheTitle from '../components/TheTitle.vue';

export default{
    components:{
    TheCard,
    TheTitle
}

}
</script>