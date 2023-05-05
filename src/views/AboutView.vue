<template>
  <section class="About my-section">
    <div class="main">
      <div class="container relative z-10">
        <div class=" w-[100%] mt-[100px] h-[200px] xl:h-[400px]">
          <div class="content py-[35px] md:pt-[65px] xl:pt-[160px] flex flex-col gap-12 xl:gap-32">
            <h1 class="text-2xl lg:text-4xl  text-[#fffbfb] font-Mont800 ">Наша команда</h1>
            <p class="text-[#ffffff] leading-8 font-Mont600 ">Главная / О нас / Наша команда</p>
          </div>
        </div>
      </div>
    </div>

    <div class="team mt-20">
      <div class="wrapper flex justify-center items-stretch flex-wrap gap-7 w-full">
        <AboutCard v-for="item in teamArray" :key="item" :title="item.title" :text="item.text" :email="item.email"
          :image="item.image" />
      </div>
    </div>
  </section>
</template>

<script>
import AboutCard from '../components/AboutCard.vue';
import team_1 from "../assets/images/team_1.png";
import team_2 from "../assets/images/team_2.png";
import team_3 from "../assets/images/team_3.png";
import team_4 from "../assets/images/team_4.png";
import team_5 from "../assets/images/team_5.png";
import team_6 from "../assets/images/team_6.png";
import team_7 from "../assets/images/team_7.png";
import team_8 from "../assets/images/team_8.png"
export default {
  data() {
    return {
      teamArray: [
        {
          image: team_1,
          title: "Чулибаев Вафо",
          text: "Генеральный директор",
          email: "vchulibaev@bima.tj",
        },
        {
          image: team_2,
          title: "Бамахрама Азиз",
          text: "Исполнительный директор",
          email: "abamakhrama@bima.tj",
        },
        {
          image: team_3,
          title: "Хайдаров Садмухтор",
          text: "Административный директор",
          email: "shaydarov@bima.tj",
        },
        {
          image: team_4,
          title: "Сулеймонов Акмал",
          text: "Начальник отдела по работе с корпоративными клиентами",
          email: "asuleymonov@bima.tj",
        },
        {
          image: team_5,
          title: "Муниева Полина",
          text: "Начальник отдела маркетинга и координации Call центра",
          email: "pmunieva@bima.tj",
        },
        {
          image: team_6,
          title: "Вахобов Абдуазизхон",
          text: "Начальник отдела управления рисками и перестрахования",
          email: "avakhobov@bima.tj",
        },
        {
          image: team_7,
          title: "Расулов Ильхом",
          text: "Начальник отдела сервиса ДМС",
          email: "rasulov@bima.tj",
        },
        {
          image: team_8,
          title: "Изатуллоева Кибриё",
          text: "Начальник отдела бухгалтерского учета и отчетности",
          email: "kizatulloeva@bima.tj",
        },
      ]
    }
  },
  components: {
    AboutCard
  }
}
</script>

<style scoped>
.main {
  background: url('../assets/images/about-bg.png') no-repeat center / cover;
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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
