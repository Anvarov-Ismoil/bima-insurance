<template>
  <div class="card w-[343px] bg-white rounded-md shadow-md overflow-hidden">
    <div class="image-block w-[343px] h-[220px]">
      <img src="../assets/images/service_1.png" alt="#" class="w-full h-full object-cover" />
    </div>
    <div class="content p-5">
      <h1 class="title">Спокойствие за рулем</h1>
      <p>Экономия на ремонте автомобиля, поврежденного при ДТП</p>
      <div class="end">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    image: {
      type: String,
      // required:  true
    }
  }
};
</script>
