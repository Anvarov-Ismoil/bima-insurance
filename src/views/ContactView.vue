<template>
  <section class="contact">
    <div class="top">
      <div class="container relative z-10">
        <div class="w-[100%] mt-[100px] h-[200px] xl:h-[400px]">
          <div class="container pt-[60px] xl:pt-[200px]">
            <h1 class="text-3xl font-Mont800 text-[#fffbfb]">Обратная связь</h1>
            <p class="xl:mt-[100px] text-[#fffbfb] font-Mont600">Главная     /     О нас     /     Обратная связь</p>
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

    <div class="bottom font-Mont600 mt-20">
      <div class="container">
        <div class="wrapper p-8 flex flex-wrap">
          <!-- left -->
          <div class="left xl:w-[50%]">
            <TheTitle>Наши контакты</TheTitle>
            <div class="flex items-center xl:mt-[29px]">
              <img
                class="mr-[7px]"
                src="../assets/images/locatsia.png"
                alt=""
              />
              <h1 class="text-[#8D8D8D] w-[420px]">
                г. Душанбе, ул. Нусратулло Махсум 74/3, 1 этаж г. Худжанд, 20
                мкр. Ташкентский проспект
              </h1>
            </div>
            <div class="flex items-center mt-[17px]">
              <img class="mr-[7px]" src="../assets/images/call.png" alt="" />
              <h1 class="text-[#8D8D8D]">
                (+992) 37 236 82 02; (+992) 37 885 05 50
              </h1>
            </div>
            <div class="flex items-center mt-[17px]">
              <img
                class="mr-[7px]"
                src="../assets/images/massenger.png"
                alt=""
              />
              <h1 class="text-[#8D8D8D]">mail@bima.tj</h1>
            </div>
            <div class="flex items-center mt-[17px]">
              <img class="mr-[7px]" src="../assets/images/time.png" alt="" />
              <h1 class="text-[#8D8D8D]">
                Понедельник - Пятница: 9:00 - 18:00. Суббота: 10:00 - 12:00
              </h1>
            </div>
            <div class="flex items-center mt-[54px] mb-[50px] xl:mb-[130px]">
              <h1 class="text-[#8D8D8D]">Наши соц.сети:</h1>
              <img class="mr-[11px]" src="../assets/images/face1.png" alt="" />
              <img class="mr-[15px]" src="../assets/images/inst.png" alt="" />
            </div>
          </div>
          <!-- right -->
          <div class="right xl:w-[50%]">
            <TheTitle>Напишите Нам</TheTitle>
            <form action="$" class="form mb-[50px]">
              <div class="flex name">
                <input
                  class="xl:w-[440px] w-full h-[50px] rounded-sm border-[#E8E8E8] mb-[20px] border md:mr-[20px] xl:mr-[20px] pl-[20px] pt-[12px] pb-[12px]"
                  type="text"
                  placeholder="ФИО"
                />
                <input
                  class="xl:w-[320px] w-full h-[50px] rounded-sm border-[#E8E8E8] border pl-[20px] pt-[12px] pb-[12px]"
                  type="text"
                  placeholder="Электронная почта"
                />
              </div>
              <input
                type="text"
                class="w-full h-[50px] border-[#E8E8E8] rounded-sm border mt-[20px] pl-[20px] pt-[12px] pb-[12px]"
                placeholder="Тема"
              />
              <textarea
                class="w-full h-[150px] border rounded-sm border-[#E8E8E8] mt-[20px] pl-[20px] pt-[12px] pb-[12px]"
                type="text"
                placeholder="Текст сообщения"
              />
            </form>
          </div>
          <!-- map -->
          <div class="map w-[100%] xl:h-[525px]">
            <iframe
              class="w-full h-full rounded-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.2280818267905!2d69.2216991334907!3d41.28938023499589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba3721df769%3A0x4f6dfd457bfa7c0b!2sIT%20Labs!5e0!3m2!1sru!2s!4v1683125738966!5m2!1sru!2s"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from "../components/TheTitle.vue";
export default {
  components: {
    TheTitle,
  },
  data() {
    return {
      InputArray: [
        {
          text: "ФИО",
          pochta: "Электронная почта",
          tema: "Тема",
          message: "Текст сообщения",
        },
      ],
    };
  },
};
</script>

<style scoped>

@media only screen and (max-width: 414px) {
.name{
  display: flex;
  flex-wrap: wrap;
}
}

.top {
  background: url("../assets/images/contact-bg.png") no-repeat center / cover;
  background-attachment: fixed;
  position: relative;
}

.top::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    90deg,
    rgba(26, 29, 32, 0.65) 50%,
    rgba(26, 29, 32, 0.55) 98.28%
  );
  opacity: 0.85;
}

.bottom .wrapper {
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.05);
  border-radius: 2px;
}
</style>
