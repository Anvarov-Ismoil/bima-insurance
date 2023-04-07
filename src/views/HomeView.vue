<template>
  <section class="home">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :effect="'fade'"
      :modules="modules"
      class="swiper-wrap"
			:navigation="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
			:style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    >
      <swiper-slide class="swiper">
        <div class="container">
          <h1>Страхование груза в пути</h1>
          <p>На страже Ваших интересов!</p>
					<TheButton type="bg-brand-color" color="text-black" @action="someMethod">Подробнее</TheButton>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="container">
          <h1>Страхование груза в пути</h1>
          <p>На страже Ваших интересов!</p>
					<TheButton type="bg-brand-color" color="text-black" @action="someMethod">Подробнее</TheButton>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper">
        <div class="container">
          <h1>Страхование груза в пути</h1>
          <p>На страже Ваших интересов!</p>
					<TheButton type="bg-brand-color" color="text-black" @action="someMethod">Подробнее</TheButton>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <Services />
</template>

<script lang="js">
import TheButton from '../components/TheButton.vue';
import Services from '../sections/Services.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

export default {

	components: {
    Swiper,
    SwiperSlide,
		TheButton,
    Services,
	},

	data() {
		return {
		modules: [Pagination, Navigation, Autoplay, EffectFade],
		}
	},
	methods:{
		someMethod() {
			console.log('hello');
		}
	}

}
</script>

<!-- https://s0.rbk.ru/v6_top_pics/media/img/1/39/756382677989391.jpg -->

<style>
/* .home {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("../assets/images/home-bg.png") no-repeat center / cover;
	height: 100vh;
	} */

.swiper-wrap {
  position: relative;
  z-index: -99;
}

.swiper-wrap .swiper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.swiper-wrap .swiper .container {
	position: relative;
	z-index: 99999;
}

.swiper-wrap .swiper .btn-wrap {
	position: relative;
  z-index: 999;
}

.swiper-wrap .swiper {
  color: white;
}

@media (min-width: 300px) {
  .swiper-wrap .swiper p {
    font-size: 24px;
  }
}

@media (min-width: 700px) {
  .swiper-wrap .swiper p {
    font-size: 30px;
  }
}

@media (min-width: 900px) {
  .swiper-wrap .swiper p {
    font-size: 30px !important;
		padding: 25px 0 40px;
  }

  .swiper-wrap .swiper h1 {
    font-size: 45px !important;
  }
}

.swiper-wrap .swiper:first-child {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/images/home-bg.png") no-repeat top / cover;
}

.swiper-wrap .swiper:nth-child(2) {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://s0.rbk.ru/v6_top_pics/media/img/1/39/756382677989391.jpg")
      no-repeat center / cover;
}

.swiper-wrap .swiper:nth-child(3) {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://wallpaperaccess.com/full/1291276.jpg")
      no-repeat center / cover;
}
</style>
