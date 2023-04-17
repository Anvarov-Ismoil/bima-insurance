<template>
  <section class="partners">
    <div class="container">
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
        <div class="card">
          
        </div>
          Slide 1
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide> -->
        <!-- <swiper-slide>Slide 3</swiper-slide> -->
        <!-- <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide> -->
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

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
