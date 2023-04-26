<template>
  <section class="About">
    <div class="container">
      <div class="card">
        <div class="info flex justify-between py-20 items-center">
          <div class="flex gap-8 items-center">
            <h1 class="text-xl md:text-4xl font-extrabold text-dark-gray">
              О компании в цифрах
            </h1>
            <img src="../assets/images/logo.png" alt="#" />
            <p class="md:max-lg:text-start">
              Год основания:
              <span class="text-[15px] text-brand-color mt-8 px-2">2014</span>
            </p>
          </div>
          <div>
            <button
              class="btn py-2 md:py-3 px-6 md:px-7 rounded-[100px] shadow-md border-none transition-all cursor-pointer text-center hover:scale-110 bg-brand-color text-[#312B2B]"
            >
              2019 год <i class="fas fa-chevron-down text-[10px]"></i>
            </button>
          </div>
        </div>
        <div
          class="flex justify-between flex-col align-center, sm:flex align-center, xl:flex"
        >
          <div
            class="grid gap-4 sm:grid-cols-2 content-center, grid-cols-1 content-center"
          >
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Vector.png" alt="#" />
                  <img src="../assets/images/icon/Vector (1).png" alt="" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">32 619</h1>
                  <p>человек застраховано</p>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Vector (4).png" alt="#" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">743</h1>
                  <p>машин застраховано</p>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Vector (2).png" alt="" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">7 462 500 сомони</h1>
                  <p>выплачено по страховым случаям</p>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Group.png" alt="" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">51 250 597 сомони</h1>
                  <p>страховой премии получено</p>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Vector (3).png" alt="" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">11 392</h1>
                  <p>выезжающих за рубеж застраховано</p>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="flex gap-5">
                <div class="flex">
                  <img src="../assets/images/icon/Group (1).png" alt="" />
                </div>
                <div>
                  <h1 class="text-[#514A4A]">50 000</h1>
                  <p>полисов выпущено</p>
                </div>
              </div>
            </div>
          </div>
          <div class="map">
            <img src="../assets/images/icon/map.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.partners {
  background: #f9f9f9;
  border-radius: 200px 0px;
}
</style>
