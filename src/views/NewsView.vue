<template>
  <section class="news mt-36">

    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Новости</TheTitle>
        <h1 class="text-[17px] font-light cursor-pointer">
          <router-link to="/news">
            Все новости
          </router-link>
        </h1>
      </div>

      <div class="wrapper flex md:grid justify-center items-start flex-wrap gap-14">
        <newsCard v-for="item in newsArray" :key="item" :subtitle="item.subtitle" :title="item.title" :desc="item.desc"
          :image="item.image" />
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../components/TheTitle.vue';
import newsCard from '../sections/news.vue';
import image_1 from "../assets/images/news_1.png"

export default {
  components: {
    TheTitle,
    newsCard,
  },
  data() {
    return {
      newsArray: [
        {
          image: image_1,
          subtitle: "17.05.2021",
          title: " Страховая организация «BIMA» отметила заслуги сотрудников банка «Арванд»",
          desc: "  По завершении церемонии руководство Страховой организации «BIMA» выразила искреннюю благодарность всему коллективу Банка «Арванд» за плодотворную работу и  высокий профессионализм",
        },
        {
          subtitle: "02.05 2021",
          title: "Первая международная олимпиада по ментальной арифметике «ШОСkids»",
          desc: "В Душанбе в Президентском лицее для одаренных детей состоялась Первая Международная Олимпиада по ментальной арифметике «ШОСkids 21»",
        },
        {
          subtitle: "30.01.2021",
          title: "Презентация новых страховых опций «Мобихранитель» и «Мобихранитель + »",
          desc: "В торговом центре Душанбе Мол (Ашан) состоялась презентация новых страховых опций «МобиХранитель» и «МобиХранитель Плюс». Презентация...",
        },
        {
          subtitle: "14.04.2021",
          title: "Самые яркие моменты к 7-летию страховой организации «BIMA»",
          desc: "Свой день рождения «BIMA» традиционно отмечает 14 апреля – дня получения первой лицензии на право ведения страховой деятельности Министерством...",
        },
        {
          subtitle: "09.01.2021",
          title: "Tcell и «BIMA» представляют опции для страхования мобильной техники",
          desc: "Ведущий инновационный оператор страны – компания Tcell и страховая компания BIMA Insurance представляют страховые опции «МобиХранитель» и...",
        }
      ],

    }
  },
};
</script>

<style scoped>
.news {
  background: #f9f9f9;
  border-radius: 200px 0px;
}

.wrapper {
  grid-template-columns: auto auto auto auto auto;
}
</style>