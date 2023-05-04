<template>
  <section class="News-page my-section">
    <div class="main">
      <div class="container relative z-10">
        <div class=" w-[100%] mt-[100px] h-[200px] xl:h-[400px]">
          <div class=" container  pt-[60px] xl:pt-[160px] flex flex-col gap-12 xl:gap-32">
            <h1 class="text-2xl  lg:text-5xl  text-[#fffbfb] font-Mont800 ">Новости</h1>
            <p class="text-[#ffffff] leading-8 font-Mont600 ">Главная     /     Новости</p>
          </div>
        </div>
      </div>
    </div>

    <div class="news mt-20">
        <div class="wrapper flex justify-center items-stretch flex-wrap gap-20 w-full">
          <NewsCard v-for="item in newsArray" :key="item" :title="item.title" :desc="item.desc" :subtitle="item.subtitle"
          :image="item.image" />
        </div>
      </div>
  </section>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';
import news_1 from "../assets/images/news_1.png";
import news_2 from "../assets/images/news_2.png";
import news_3 from "../assets/images/news_3.png";
import news_4 from "../assets/images/news_4.png";
import news_5 from "../assets/images/news_5.png";
import news_6 from "../assets/images/news_6.png";
export default {
  data() {
    return {
      newsArray: [
        {
          image: news_1,
          title: "Страховая организация «BIMA» отметила заслуги сотрудников банка «Арванд»",
          desc: "По завершении церемонии руководство Страховой организации «BIMA» выразила искреннюю благодарность всему коллективу...",
          subtitle: "17.05.2021",
        },
        {
          image: news_2,
          title: "Первая международная олимпиадапо ментальной арифметике «ШОСkids»",
          desc: "В Душанбе в Президентском лицее для одаренных детей состоялась Первая Международная Олимпиада по ментальной...",
          subtitle: "02.05.2021",
        },
        {
          image: news_3,
          title: "Самые яркие моменты к 7-летиюстраховой организации «BIMA»",
          desc: "Свой день рождения «BIMA» традиционно отмечает 14 апреля – дня получения первой лицензии на право ведения страховой...",
          subtitle: "14.04.2021",
        },
        {
          image: news_4,
          title: "С Праздником Навруз!",
          desc: "В преддверии прекрасного праздника, мы от всего сердца хотим поздравить Вас с наступающим днём весеннего равноденствия и обновления природы – Навруз!",
          subtitle: "21.03.2021",
        },
        {
          image: news_5,
          title: "Презентация новых страховых опций«Мобихранитель» и «Мобихранитель + »",
          desc: "В торговом центре Душанбе Мол (Ашан) состоялась презентация новых страховых опций «МобиХранитель» и «МобиХранитель...",
          subtitle: "30.01.2021",
        },
        {
          image: news_6,
          title: "Tcell и «BIMA» представляют опции для страхования мобильной техники",
          desc: "Ведущий инновационный оператор страны – компания Tcell и страховая компания BIMA Insurance представляют страховые опции...",
          subtitle: "09.01.2021",
        }
      ]
    }
  },
  components: {
    NewsCard
  }
}
</script>

<style scoped>
.main {
  background: url('../assets/images/contact-bg.png') no-repeat center / cover;
  background-attachment: fixed;
  position: relative;
}

.main::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(26, 29, 32, 0.65) 50%, rgba(26, 29, 32, 0.55) 98.28%);
  opacity: 0.85;
}
</style>
