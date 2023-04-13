<template>
  <section class="news py-[100px]">

    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Новости</TheTitle>
        <h1 class="text-[17px] font-light">Все новости</h1>
      </div>

      <div class="wrapper flex flex-wrap justify-between">
        
        <div class="left pt-[70px]">
          <img class="md:w-[400px] h-[220px] object-cover"
          src="../assets/images/news_1.png" />
          <p class="text-[15px] text-brand-color mt-8 flex gap-8">{{subtitle}} <span class="w-[150px] h-[2px] mt-3 bg-brand-color"></span></p>
          <h2 class="text-[18px] w-[370px] font-semibold tracking-wide my-5">
           {{ title }}
          </h2>
          <p class="opacity-50 w-[340px]">
          {{ desc }}
          </p>
        </div>

        <News v-for="item in newsArray" :key="item" :subtitle="item.subtitle" :title="item.title" :desc="item.desc"
        :subtitle_2="item.subtitle_2" :title_2="item.title_2" :desc_2="item.desc_2" />

      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../components/TheTitle.vue';
import News from './news.vue';
export default {
  components: {
    TheTitle,
    News
  },
  data() {
    return {
      newsArray: [
        {
          subtitle: "02.05 2021",
          title: "Первая международная олимпиада по ментальной арифметике «ШОСkids»",
          desc: "В Душанбе в Президентском лицее для одаренных детей состоялась Первая Международная Олимпиада по ментальной арифметике «ШОСkids 21»", 

          subtitle_2: "30.01.2021",
          title_2: "Презентация новых страховых опций «Мобихранитель» и «Мобихранитель + »",
          desc_2: "В торговом центре Душанбе Мол (Ашан) состоялась презентация новых страховых опций «МобиХранитель» и «МобиХранитель Плюс». Презентация...",
        },
        {
          subtitle: "14.04.2021",   
          title: "Самые яркие моменты к 7-летию страховой организации «BIMA»",
          desc: "Свой день рождения «BIMA» традиционно отмечает 14 апреля – дня получения первой лицензии на право ведения страховой деятельности Министерством...",

          subtitle_2: "09.01.2021",
          title_2: "Tcell и «BIMA» представляют опции для страхования мобильной техники",
          desc_2: "Ведущий инновационный оператор страны – компания Tcell и страховая компания BIMA Insurance представляют страховые опции «МобиХранитель» и...",
        },
      ],
      subtitle: "17.05.2021",
      title:" Страховая организация «BIMA» отметила заслуги сотрудников банка «Арванд»",
      desc:"  По завершении церемонии руководство Страховой организации «BIMA» выразила искреннюю благодарность всему коллективу Банка «Арванд» за плодотворную работу и  высокий профессионализм",
    }
  },
};
</script>

<style scoped>
@media (max-width: 375px) {
  .textOne {
    margin-left: 30px;
  }
}

.news {
  background: #f9f9f9;
  border-radius: 200px 0px;
}
</style>