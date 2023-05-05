<template>
  <section class="contact">
    <div class="top">
      <div class="container relative z-10">
        <div class="w-[100%] mt-[100px] h-[200px] xl:h-[395px]">
          <div class="content pt-[60px] xl:pt-[200px]">
            <h1 class="text-3xl font-Mont800 text-[#fffbfb]">Обратная связь</h1>
            <p class="mt-[50px] text-[#fffbfb] font-Mont600">Главная / О нас/ Обратная связь</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom mt-20">
      <div class="container">
        <div class="wrapper p-0 min-[350px]:p-8 flex flex-wrap">
          <!-- left -->
          <div class="left w-[100%] xl:w-[50%]">
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
            <div class="flex items-center gap-3 mt-[54px]">
              <h1 class="text-[#8D8D8D]">Наши соц.сети:</h1>
              <a href="#">
                <img src="../assets/images/face1.png" alt="#" />
              </a>
              <a href="#">
                <img src="../assets/images/inst.png" alt="#" />
              </a>
            </div>
          </div>
          <!-- right -->
          <div class="right w-[100%] xl:w-[50%]"> 
            <TheTitle>Напишите Нам</TheTitle>
            <form action="$" class="form mb-5 xl:mb-12">
              <div class="name flex flex-wrap lg:flex-nowrap gap-5">
                <input
                  class="w-full xl:w-[440px] border-[#E8E8E8] rounded-md border pl-5 py-3 outline-brand-color"
                  type="text"
                  placeholder="ФИО"
                />
                <input
                  class="w-full xl:w-[320px] border-[#E8E8E8] rounded-md border pl-5 py-3 outline-brand-color"
                  type="text"
                  placeholder="Электронная почта"
                />
              </div>
              <input
                type="text"
                class="w-full border-[#E8E8E8] rounded-md border my-5 pl-5 py-3 outline-brand-color"
                placeholder="Тема"
              />
              <textarea
                class="w-full h-[150px] border border-[#E8E8E8] rounded-md pl-5 py-3 resize-none outline-brand-color"
                type="text"
                placeholder="Текст сообщения"
              />
            </form>
          </div>
          <!-- map -->
          <div class="map w-[100%]  xl:h-[525px]">
            <iframe
              class="w-full h-full rounded-md"
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
  background: url('../assets/images/contact-bg.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

@media(min-width: 768px) {
  .top{
    background-size: contain; 
    background-position: 0 129px;
  }
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

@media (max-width: 350px) {
  .bottom .wrapper{ 
    box-shadow: none;
  }
}
</style>
