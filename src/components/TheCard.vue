<template>
  <div class="card w-[300px] lg:w-[339px] bg-white rounded-md shadow-md overflow-hidden">
    <div class="image-block w-[270px] lg:w-[339px] lg:h-[220px]">
      <img :src="image" alt="#" class="w-full h-full object-cover" />
    </div>
    <div class="content p-5">
      <h1 class="title">{{ title }}</h1>
      <p>{{ text }}</p>
      <div class="end flex items-end h-full">
        <TheButton type="bg-brand-color" color="text-[#312B2B]">
          {{ button }}
        </TheButton>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from './TheButton.vue';

export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    button: {
      type: String
    },
    image: {
      type: String
    }
  },
  components:{
    TheButton,
  }
};
</script>
