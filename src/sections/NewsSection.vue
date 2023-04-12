<template>
  <section class="news pt-[100px]">
    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Новости</TheTitle>
        <h1 class="text-[17px] font-light">Все новости</h1>
      </div>
      <div class="wrapper flex justify-between gap-14 flex-wrap">
        <img class="md:w-[400px] h-[220px] object-cover"
          src="../assets/images/news_3215155d4b4db44de1b25b28d0ece047 1.png" />
        <div class="mr-[30px]">
          <p class="text-[15px] text-brand-color mb-4">02.05 2021</p>
          <h2 class="text-[18px] font-semibold tracking-wide">
            Первая международная олимпиада<br />
            по ментальной арифметике «ШОСkids»
          </h2>
          <p class="opacity-50">
            В Душанбе в Президентском лицее для<br />
            одаренных детей состоялась Первая<br />
            Международная Олимпиада по<br />
            ментальной арифметике «ШОСkids 21»
          </p>
        </div>
        <div>
          <p class="text-[15px] text-brand-color mb-4">14.04.2021</p>
          <h2 class="text-[18px] font-semibold tracking-wide">
            Самые яркие моменты к 7-летию<br />
            страховой организации «BIMA»
          </h2>
          <p class="opacity-50">
            Свой день рождения «BIMA» традиционно<br />
            отмечает 14 апреля – дня получения<br />
            первой лицензии на право ведения <br />
            страховой деятельности Министерством...
          </p>
        </div>
      </div>
      <div class="flex mt-[40px] flex-wrap gap-8">
        <div class="textOne ml-[40px]">
          <p class="text-[15px] text-brand-color mb-4">17.05.2021</p>
          <h2 class="text-[18px] font-semibold tracking-wide">
            Страховая организация «BIMA»<br />
            отметила заслуги сотрудников<br />
            банка «Арванд»
          </h2>
          <p class="opacity-50">
            По завершении церемонии руководство<br />
            Страховой организации «BIMA» выразила<br />
            искреннюю благодарность всему коллективу Банка<br> «Арванд» за
            плодотворную работу и<br />
            высокий профессионализм
          </p>
        </div>
        <div class="textTwo ml-[35px]">
          <p class="text-[15px] text-brand-color mb-4">30.01.2021</p>
          <h2 class="text-[18px] font-semibold tracking-wide">
            Презентация новых страховых опций<br>«Мобихранитель» и «Мобихранитель + »
          </h2>
          <p class="opacity-50">
            В торговом центре Душанбе Мол (Ашан)<br />
            состоялась презентация новых страховых<br> опций «МобиХранитель»<br />
            и «МобиХранитель Плюс». Презентация...
          </p>
        </div>
        <div class="textThree ml-[35px]">
          <p class="text-[14px] text-brand-color mb-4">09.01.2021</p>
          <h2 class="text-[17px] font-semibold tracking-wide">
            Tcell и «BIMA» представляют<br> опции для страхования мобильной техники
          </h2>
          <p class="opacity-50">
            Ведущий инновационный оператор<br />
            страны – компания Tcell и страховая компания <br />
            BIMA Insurance представляют<br />
            страховые опции «МобиХранитель» и...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../components/TheTitle.vue';

export default {
  components: {
    TheTitle,
  },
  data() {
    return {
      newsArray:[
        
      ]
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