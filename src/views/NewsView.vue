<template>
  <routerview />
  <div class="imagemain w-[100%] mt-[100px] h-[200px] xl:h-[400px]">
    <div class=" container  pt-[60px] xl:pt-[200px]">
        <h1 class="text-3xl font-semibold text-[#fffbfb]">Новости</h1>
        <p class="text-[#5b5b5b]">Главная     /     Новости</p>
    </div>
  </div>
  <!-- --------------------------------------- -->
  <div class="bg-[#E5E5E5] mt-[50px]">
    <!-- <NewsCard
        
        
      v-for="item in NewsArray"
      :key="item"
      :image="item.image"
      :title="item.title"
    /> -->
    <div
      class="container pb-[50px] pt-[20px] grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
    >
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/news_1.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="pr-[20px]">17.05.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <h1 class="ml-[20px]">
          "Страховая организация «BIMA» отметила заслуги сотрудников банка
          «Арванд»",
        </h1>
        <p class="ml-[20px]">
          По завершении церемонии руководство Страховой организации «BIMA»
          выразила искреннюю благодарность всему коллективу...
        </p>
      </div>
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/new_second.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="mr-[20px]">02.05.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <div class="flex flex-wrap ml-[20px]">
          <h1>
            Первая международная олимпиадапо ментальной арифметике «ШОСkids»
          </h1>
          <p>
            В Душанбе в Президентском лицее для одаренных детей состоялась
            Первая Международная Олимпиада по ментальной...
          </p>
        </div>
      </div>
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/news_thirthy.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="pr-[20px]">14.04.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <div class="flex flex-wrap ml-[20px]">
          <h1>Самые яркие моменты к 7-летию страховой организации «BIMA»</h1>
          <p>
            Свой день рождения «BIMA» традиционно отмечает 14 апреля – дня
            получения первой лицензии на право ведения страховой...
          </p>
        </div>
      </div>
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/news_fourty.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="pr-[20px]">21.03.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <div class="flex flex-wrap ml-[20px]">
          <h1>С Праздником Навруз!</h1>
          <p>
            В преддверии прекрасного праздника, мы от всего сердца хотим
            поздравить Вас с наступающим днём весеннего равноденствия и
            обновления природы – Навруз!
          </p>
        </div>
      </div>
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/news_fifty.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="pr-[20px]">30.01.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <div class="flex flex-wrap ml-[20px]">
          <h1>
            Презентация новых страховых опций «Мобихранитель» и «Мобихранитель +
            »
          </h1>
          <p>
            В торговом центре Душанбе Мол (Ашан) состоялась презентация новых
            страховых опций «МобиХранитель» и «МобиХранитель...
          </p>
        </div>
      </div>
      <div class="card w-[350px] h-[400px]">
        <img
          class="w-[400px] h-[200px] bg-cover"
          src="../assets/images/news_sixty.png"
          alt="photo"
        />
        <div class="flex ml-[20px] mt-[18px] items-center">
          <p class="pr-[20px]">09.01.2021</p>
          <img src="../assets/images/lineyellow.png" alt="photo" />
        </div>
        <div class="flex flex-wrap ml-[20px]">
          <h1>
            Tcell и «BIMA» представляют опции для страхования мобильной техники
          </h1>
          <p>
            Ведущий инновационный оператор страны – компания Tcell и страховая
            компания BIMA Insurance представляют страховые опции...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import image_2 from "../assets/images/news_second.png";
// import main_image from "../assets/images/news_1.png";
// import Line_2 from "../assets/images/lineyellow.png";
// import NewsCard from "../components/NewsCard.vue";
export default {
  components: {
    // NewsCard,
  },
   NewsArray: [
  //     {
  //       image: main_image,
  //       number: "17.05.2021",
  //       title:
  //         "Страховая организация «BIMA» отметила заслуги сотрудников банка «Арванд»",
  //       line: Line_2,
  //       text: "По завершении церемонии руководство Страховой организации «BIMA» выразила искреннюю благодарность всему коллективу...",
  //     },
  //     {
  //       image: image_2,
  //       number: "02.05.2021",
  //       line: Line_2,
  //       title:
  //         "Первая международная олимпиада по ментальной арифметике «ШОСkids»",
  //       text: "В Душанбе в Президентском лицее для одаренных детей состоялась Первая Международная Олимпиада по ментальной...",
  //     },
  //     {
  //       image: "",
  //       number: "",
  //       line: "",
  //       title: "",
  //       text: "",
  //     },
  //     {
  //       image: "",
  //       number: "",
  //       line: "",
  //       title: "",
  //       text: "",
  //     },
  //     {
  //       image: "",
  //       number: "",
  //       line: "",
  //       title: "",
  //       text: "",
  //     },
  //     {
  //       image: "",
  //       number: "",
  //       line: "",
  //       title: "",
  //       text: "",
  //     },
    ],
};
</script>

<style>
.card {
    
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.05);
  border-radius: 2px;
}


</style>