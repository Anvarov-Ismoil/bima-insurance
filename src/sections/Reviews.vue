<template>
  <section class="partners">
    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Отзывы</TheTitle>
        <div class="arrows flex gap-6">
          <button class="btn btn-prev"><img src="../assets/images/Arrow 6.png" alt=""></button>
          <button class="btn btn-next"><img src="../assets/images/Arrow 5.png" alt=""></button>
        </div>
      </div>
      <swiper :modules="modules" :navigation="{
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      }" :loop="true" class="mySwiper" :slidesPerView="2" :space-between="30" :breakpoints="{
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  // when window width is >= 640px
  1000: {
    slidesPerView: 2,
    spaceBetween: 25
  }
}">
        <swiper-slide>
          <div
            class="card h-[300px] m-1 md:m-4 pt-4 xl:pt-0 xl:py-10 px-6 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex items-start justify-between flex-wrap">
              <div class="flex items-center gap-5">
                <img src="../assets/images/user_1.png" alt="" class="w-[85px] h-[85px] rounded-full ">
                <div class="contacts">
                  <h1 class="font-extrabold text-md md:text-lg text-[#312B2B]">Дилшод Назаров</h1>
                  <h4 class="font-semibold text-sm md:text-base mb-2 md:mb-0 text-[#514A4A]">Олимпийский чемпион</h4>
                  <ul class="flex gap-2 xl:hidden">
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                  </ul>
                </div>
              </div>

              <ul class="xl:flex gap-2 hidden">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p
              class="desc max-w-[600px] pt-3 md:pt-5 font-semibold text-base text-[#8D8D8D] overflow-scroll md:overflow-auto h-40 md:h-full">
              Чтобы избежать лишних финансовых
              затрат,
              я застраховал квартиру
              полисом “Салом, Сосед!” где сумма выплаты в случае затопа, пожара или
              кражи может гарантировано достигать до 40 000 сомони.
              Уверен, что взглянув на выгоду полиса и вы сделаете правильный выбор.
              Я доверяю полису “Салом, Сосед!” и вам советую!</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="card h-[300px] md:m-4 pt-4 xl:pt-0 xl:py-10 px-6 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex items-start justify-between flex-wrap">
              <div class="flex items-center gap-5">
                <img src="../assets/images/user_2.png" alt="" class="w-[85px] h-[85px] rounded-full ">
                <div class="contacts">
                  <h1 class="font-extrabold text-md md:text-lg text-[#312B2B]">Дилшод Джураев</h1>
                  <h4 class="font-semibold text-sm md:text-base mb-2 md:mb-0 text-[#514A4A]">Учредитель “55 group”</h4>
                  <ul class="flex gap-2 xl:hidden">
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                  </ul>
                </div>
              </div>

              <ul class="xl:flex gap-2 hidden">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p
              class="desc max-w-[600px] pt-3 md:pt-5 font-semibold text-base text-[#8D8D8D] overflow-scroll md:overflow-auto h-40 md:h-full">
              Дилшод Джураев - предприниматель, учредитель “55 group”. Выбор
              страхового полиса - важное дело, к которому Дилшод относится серьезно.
              Он решил остановить свой выбор на удобном и быстром страховании
              своего имущества и приобрел страховой полис “Салом, Сосед!” от
              компании BIMA</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="card h-[300px] m-1 md:m-4 pt-4 xl:pt-0 xl:py-10 px-6 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex items-start justify-between flex-wrap">
              <div class="flex items-center gap-5">
                <img src="../assets/images/user_1.png" alt="" class="w-[85px] h-[85px] rounded-full ">
                <div class="contacts">
                  <h1 class="font-extrabold text-md md:text-lg text-[#312B2B]">Дилшод Назаров</h1>
                  <h4 class="font-semibold text-sm md:text-base mb-2 md:mb-0 text-[#514A4A]">Олимпийский чемпион</h4>
                  <ul class="flex gap-2 xl:hidden">
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                  </ul>
                </div>
              </div>

              <ul class="xl:flex gap-2 hidden">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p
              class="desc max-w-[600px] pt-3 md:pt-5 font-semibold text-base text-[#8D8D8D] overflow-scroll md:overflow-auto h-40 md:h-full">
              Чтобы избежать лишних финансовых
              затрат,
              я застраховал квартиру
              полисом “Салом, Сосед!” где сумма выплаты в случае затопа, пожара или
              кражи может гарантировано достигать до 40 000 сомони.
              Уверен, что взглянув на выгоду полиса и вы сделаете правильный выбор.
              Я доверяю полису “Салом, Сосед!” и вам советую!</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="card h-[300px] md:m-4 pt-4 xl:pt-0 xl:py-10 px-6 rounded-sm shadow-lg shadow-[rgba(56, 56, 56, 0.05)]">
            <div class="user flex items-start justify-between flex-wrap">
              <div class="flex items-center gap-5">
                <img src="../assets/images/user_2.png" alt="" class="w-[85px] h-[85px] rounded-full ">
                <div class="contacts">
                  <h1 class="font-extrabold text-md md:text-lg text-[#312B2B]">Дилшод Джураев</h1>
                  <h4 class="font-semibold text-sm md:text-base mb-2 md:mb-0 text-[#514A4A]">Учредитель “55 group”</h4>
                  <ul class="flex gap-2 xl:hidden">
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                    <li><img src="../assets/images/star.png" alt="#"></li>
                  </ul>
                </div>
              </div>

              <ul class="xl:flex gap-2 hidden">
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
                <li><img src="../assets/images/star.png" alt="#"></li>
              </ul>
            </div>
            <p
              class="desc max-w-[600px] pt-3 md:pt-5 font-semibold text-base text-[#8D8D8D] overflow-scroll md:overflow-auto h-40 md:h-full">
              Дилшод Джураев - предприниматель, учредитель “55 group”. Выбор
              страхового полиса - важное дело, к которому Дилшод относится серьезно.
              Он решил остановить свой выбор на удобном и быстром страховании
              своего имущества и приобрел страховой полис “Салом, Сосед!” от
              компании BIMA</p>
          </div>
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

<style scoped>.swiper-button-lock {
  display: block;
}</style>