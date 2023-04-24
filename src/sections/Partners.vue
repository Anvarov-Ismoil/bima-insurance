<template>
  <section class="partners">
    <div class="container">
      <div class="titles flex justify-between">
        <TheTitle>Наши партнеры</TheTitle>
        <div class="arrows flex gap-6">
          <button class="btn prev"><img src="../assets/images/Arrow 6.png" alt=""></button>
          <button class="btn next"><img src="../assets/images/Arrow 5.png" alt=""></button>
        </div>
      </div>
      <swiper :modules="modules" :breakpoints="{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 640px
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        650: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        },
        1255: { slidesPerView: 5 },
        1300: { slidesPerView: 6 }
      }" :navigation="{
  nextEl: '.next',
  prevEl: '.prev',
}" :loop="true" :slidesPerView="6" class="mySwiper my-5">
        <swiper-slide class="flex gap-8" v-for="item in partnersArray" :key="item">
          <div class="card w-[210px] h-[140px] flex items-center justify-center m-2 rounded-sm shadow-lg 
                shadow-[rgba(56, 56, 56, 0.05)]">
            <img :src="item.image" alt="#">
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
import { Navigation } from 'swiper';
import TheTitle from '../components/TheTitle.vue';
import image_1 from '../assets/images/partner_3.png'
import image_2 from '../assets/images/partner_3.png'
import image_3 from '../assets/images/partner_3.png'
import image_4 from '../assets/images/partner_3.png'
import image_5 from '../assets/images/partner_3.png'
export default {
  components: {
    Swiper,
    SwiperSlide,
    TheTitle,
  },
  data() {
    return {
      modules: [Navigation],
      partnersArray: [
        {
          image: image_1
        },
        {
          image: image_2
        },
        {
          image: image_3
        },
        {
          image: image_4
        },
        {
          image: image_5
        },
        {
          image: image_5
        },
      ]
    };
  },
};
</script>

<style scoped>
.swiper-button-lock {
  display: block;
}
</style>