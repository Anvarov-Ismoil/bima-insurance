<template>
  <section class="partners">
    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Отзывы</TheTitle>
        <div class="arrows flex gap-6">
          <button class="btn"><img src="../assets/images/Arrow 6.png" alt=""></button>
          <button class="btn"><img src="../assets/images/Arrow 5.png" alt=""></button>
        </div>
      </div>
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide class="flex gap-8">
          <div class="card w-[690px]  py-10 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex gap-5">
              <img src="../assets/images/user_1.png" alt="" class="w-[85px] h-[85px] rounded-full ">
              <div class="username">
                <h1 class="font-extrabold text-lg text-[#312B2B]">Дилшод Назаров</h1>
                <h4 class="font-semibold text-base text-[#514A4A]">Олимпийский чемпион</h4>
              </div>

              <ul class="flex gap-2 ml-60 pt-2">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p class="desc p-6 w-[600px] font-semibold text-base text-[#8D8D8D]">Чтобы избежать лишних финансовых затрат,
              я застраховал квартиру
              полисом “Салом, Сосед!” где сумма выплаты в случае затопа, пожара или
              кражи может гарантировано достигать до 40 000 сомони.
              Уверен, что взглянув на выгоду полиса и вы сделаете правильный выбор.
              Я доверяю полису “Салом, Сосед!” и вам советую!</p>
          </div>
          <div class="card w-[690px]  py-10 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex gap-5">
              <img src="../assets/images/user_2.png" alt="" class="w-[85px] h-[85px] rounded-full ">
              <div class="username">
                <h1 class="font-extrabold text-lg text-[#312B2B]">Дилшод Джураев</h1>
                <h4 class="font-semibold text-base text-[#514A4A]">Учредитель “55 group”</h4>
              </div>

              <ul class="flex gap-2 ml-60 pt-2">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p class="desc p-6 w-[600px] font-semibold text-base text-[#8D8D8D]">Дилшод Джураев - предприниматель,
              учредитель “55 group”. Выбор
              страхового полиса - важное дело, к которому Дилшод относится серьезно.
              Он решил остановить свой выбор на удобном и быстром страховании
              своего имущества и приобрел страховой полис “Салом, Сосед!” от
              компании BIMA</p>
          </div>
          <!-- Slide 1 -->
        </swiper-slide>
        <swiper-slide class="flex gap-8">
          <div class="card w-[690px]  py-10 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex gap-5">
              <img src="../assets/images/user_1.png" alt="" class="w-[85px] h-[85px] rounded-full ">
              <div class="username">
                <h1 class="font-extrabold text-lg text-[#312B2B]">Дилшод Назаров</h1>
                <h4 class="font-semibold text-base text-[#514A4A]">Олимпийский чемпион</h4>
              </div>

              <ul class="flex gap-2 ml-60 pt-2">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p class="desc p-6 w-[600px] font-semibold text-base text-[#8D8D8D]">Чтобы избежать лишних финансовых затрат,
              я застраховал квартиру
              полисом “Салом, Сосед!” где сумма выплаты в случае затопа, пожара или
              кражи может гарантировано достигать до 40 000 сомони.
              Уверен, что взглянув на выгоду полиса и вы сделаете правильный выбор.
              Я доверяю полису “Салом, Сосед!” и вам советую!</p>
          </div>
          <div class="card w-[690px]  py-10 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex gap-5">
              <img src="../assets/images/user_2.png" alt="" class="w-[85px] h-[85px] rounded-full ">
              <div class="username">
                <h1 class="font-extrabold text-lg text-[#312B2B]">Дилшод Джураев</h1>
                <h4 class="font-semibold text-base text-[#514A4A]">Учредитель “55 group”</h4>
              </div>

              <ul class="flex gap-2 ml-60 pt-2">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p class="desc p-6 w-[600px] font-semibold text-base text-[#8D8D8D]">Дилшод Джураев - предприниматель,
              учредитель “55 group”. Выбор
              страхового полиса - важное дело, к которому Дилшод относится серьезно.
              Он решил остановить свой выбор на удобном и быстром страховании
              своего имущества и приобрел страховой полис “Салом, Сосед!” от
              компании BIMA</p>
          </div>
          <!-- Slide 1 -->
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
// import './style.css';
import { Navigation } from 'swiper';
import TheTitle from '../components/TheTitle.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    TheTitle,
  },
  data() {
    return {
      modules: [Navigation],
    };
  },
};
</script>