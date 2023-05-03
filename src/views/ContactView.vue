<template>
  <section class="contact">

    <div class="top">
      <div class="container relative z-10">
        <div class=" w-[100%] mt-[100px] h-[200px] xl:h-[400px]">
          <div class=" container  pt-[60px] xl:pt-[200px]">
            <h1 class="text-3xl font-semibold text-[#fffbfb]">Новости</h1>
            <p class="text-[#5b5b5b]">Главная / Новости</p>
          </div>
        </div>
        <!-- ---------------------------------------
          <div class="bg-[#E5E5E5] mt-[50px]">
            <div
            class="container pb-[50px] pt-[20px] grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
          </div> 
        </div> -->
      </div>
    </div>

    <div class="bottom mt-20">
      <div class="container">
        <div class="wrapper p-8 flex flex-wrap">
          
          <!-- left -->
          <div class="left w-[50%]"></div>
          <!-- right -->
          <div class="right w-[50%]">
            <form action="$" class="form">
              <!--  -->
            </form>
          </div>
          <!-- map -->
          <div class="map w-[100%] xl:h-[525px]">
            <iframe class="w-full h-full rounded-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.2280818267905!2d69.2216991334907!3d41.28938023499589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba3721df769%3A0x4f6dfd457bfa7c0b!2sIT%20Labs!5e0!3m2!1sru!2s!4v1683125738966!5m2!1sru!2s"
            style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.top {
  background: url('../assets/images/contact-bg.png') no-repeat center / cover;
  background-attachment: fixed;
  position: relative;
}

.top::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(26, 29, 32, 0.65) 50%, rgba(26, 29, 32, 0.55) 98.28%);
  opacity: 0.85;
}

.bottom .wrapper{
  background: #e15a5a;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.05);
  border-radius: 2px;
}
</style>
