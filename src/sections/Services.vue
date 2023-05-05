<template>
    <section class="services my-section">
        <div class="container">
            <div class="titles flex justify-between">
                <TheTitle>Популярные услуги</TheTitle>
                <div class="arrows flex gap-6">
                    <button class="btn"><img src="../assets/images/Arrow_6.png" alt=""></button>
                    <button class="btn "><img src="../assets/images/Arrow_5.png" alt=""></button>
                </div>
            </div>
            <div class="wrapper flex justify-center items-stretch flex-wrap gap-8 w-full">
                <TheCard v-for="item in servicesArray" :key="item" :title="item.title" :text="item.text"
                    :button="item.button" :image="item.image" />
            </div>
        </div>
    </section>
</template>

<script>
import TheCard from "../components/TheCard.vue";
import TheTitle from "../components/TheTitle.vue";
import service_1 from "../assets/images/service_2.png";
import service_2 from "../assets/images/service_1.png";
import service_3 from "../assets/images/service_3.png";
import service_4 from "../assets/images/service_4.png"
export default {
    data() {
        return {
            servicesArray: [
                {
                    image: service_1,
                    title: "Салом, Сосед!",
                    text: "Компенсация затрат на ремонт квартиры при заливе или пожаре",
                    button: "Подробнее",
                },
                {
                    image: service_3,
                    title: "Опция COVID-19",
                    text: "Медицинский полис путешественника с опцией COVID-19",
                    button: "Подробнее",
                },
                {
                    image: service_4,
                    title: "Телохранитель +",
                    text: "Уникальный выгодный вариант в непредвиденных ситуациях",
                    button: "Подробнее",
                },
                {
                    image: service_2,
                    title: "Спокойствие за рулем",
                    text: "Экономия на ремонте автомобиля, поврежденного при ДТП",
                    button: "Подробнее",
                },
            ],
        }
    },
    components: {
        TheCard,
        TheTitle,
    },
};
</script>