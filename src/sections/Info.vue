<template>
  <section class="info">
    <div class="container">
      <!-- top -->
      <div class="top flex justify-center lg:justify-between flex-wrap py-20 items-start lg:items-center">
        <div class="flex items-center flex-wrap justify-center lg:justify-between gap-3 xl:gap-8">
          <TheTitle>О компании в цифрах</TheTitle>
          <div class="pb-10 flex items-center gap-8 font-Mont600">
              <img src="../assets/images/logo_black.png" alt="#" class="hidden sm:block"/>
              <h2 class="text-xl">
                Год основания:
                <span class="text-2xl text-brand-color mt-8 px-2">2014</span>
              </h2>
            </div>
        </div>
        <div class="lg:pb-10">
          <TheButton type="bg-brand-color" color="text-dark-grey">
            2019 год <i class="fas fa-chevron-down text-[10px]"></i>
          </TheButton>
        </div>
      </div>
      <!-- bottom -->
      <div class="bottom flex flex-wrap justify-between align-center">
        <div class="w-full xl:w-[50%] flex flex-wrap items-center justify-center xl:justify-evenly gap-10 mb-5 xl:mb-0">
          <div class="item w-[250px]" v-for="item in infoArray" :key="item">
            <div class="flex items-center justify-between gap-5">
              <div class="image-block flex items-center justify-center 
                w-[60px] h-[60px]">
                <img :src="item.image" alt="/#/" class="object-cover">
              </div>
              <div class="text-left">
                <h1 class="text-dark-gray text-[18px] font-Mont800">{{ item.number }}</h1>
                <p class="text-[#8D8D8D] text-base font-Mont600">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-[50%] map">
          <div class="image-block flex justify-center xl:justify-end">
            <img src="../assets/images/xarita.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../components/TheTitle.vue';
import TheButton from "../components/TheButton.vue";
import image_1 from '../assets/icons/employees.png';
import image_2 from '../assets/icons/car.png'
import image_3 from '../assets/icons/money.png'
import image_4 from '../assets/icons/safe.png'
import image_5 from '../assets/icons/case.png'
import image_6 from '../assets/icons/file.png'

export default {
  data() {
    return {
      infoArray: [
        {
          image: image_1,
          number: '32 619',
          text: 'человек застраховано',
        },
        {
          image: image_2,
          number: '743',
          text: 'машин застраховано',
        },
        {
          image: image_3,
          number: '7 462 500 сомони',
          text: 'выплачено по страховым случаям',
        },
        {
          image: image_4,
          number: '51 250 597 сомони',
          text: 'страховой премии получено',
        },
        {
          image: image_5,
          number: '11 392',
          text: 'выезжающих за рубеж застраховано',
        },
        {
          image: image_6,
          number: '50 000',
          text: 'полисов выпущено',
        },
      ]
    };
  },
  components: { TheTitle, TheButton }
};
</script>

<style scoped>
.partners {
  background: #f9f9f9;
  border-radius: 200px 0px;
}
</style>
