<template>
  <header class="fixed top-0 left-0 right-0 z-50"
    :class="[is_navbar_active ? 'scroll' : 'bg-transparent', checkRouteToChangeNavColor]">
    <div class="container py-5 flex items-center xl:items-start justify-between gap-20 xxl:gap-60">
      <div class="logo w-28 md:w-52">
        <img src="../assets/images/logo.png" alt="logo" class="w-full h-full object-cover" />
      </div>
      <div v-if="isMenuOpened"
        class="content p-12 md:p-20 md:pl-5 xl:p-0 bg-black xl:bg-transparent w-full h-[100vh] xl:h-auto xl:border-l-white/30 xl:border-l-[1px] fixed top-0 left-0 z-20 xl:static">
        <!-- top -->
        <div
          class="top flex items-center justify-between flex-wrap border-b-white/30 border-b-[1px] pb-5 pl-8 mt-20 xl:mt-0">
          <div class="left mb-7 lg:mb-0">
            <ul class="flex items-center justify-center flex-wrap gap-6 md:gap-[50px] xxl:gap-[70px]">
              <li>
                <a href="#" class="link text-brand-color">Частным лицам</a>
              </li>
              <li>
                <a href="#" class="link text-brand-color">Корпоративным клиентам</a>
              </li>
              <li>
                <a href="#" class="link text-brand-color">Партнерам / Переход в ТИАС</a>
              </li>
            </ul>
          </div>
          <div class="right flex items-center justify-center text-center w-full md:w-auto flex-wrap gap-6 md:gap-[75px]">
            <p class="flex items-center justify-center gap-3">
              <i class="fas fa-phone-alt text-brand-color"></i>
              <span class="text-white">(44) 601 55 11</span>
            </p>
            <ul>
              <li class="text-white">
                Русский <i class="fas fa-chevron-down"></i>
              </li>
            </ul>
          </div>
        </div>
        <!-- bottom -->
        <div class="bottom pt-5 pl-8">
          <ul class="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
            <li v-for="item in menuArray" :key="item" class="flex items-center justify-center gap-2 text-white">
              <router-link :to="item.route" :class="checkRouteToChangeLinkColor">
                {{ item.title }}
              </router-link>
              <i :class="item.icon" class="text-[10px]"></i>
            </li>
            <div class="search cursor-pointer">
              <i class="fas fa-search text-brand-color"></i>
            </div>
          </ul>
        </div>
      </div>
      <!-- Burger -->
      <div class="burger-menu relative z-30 xl:hidden block transition-all" @click="openMenu">
        <i v-if="!isMenuOpened" class="fas fa-bars text-2xl md:text-5xl text-brand-color/70"></i>
        <i v-if="isMenuOpened" class="fas fa-times text-2xl md:text-5xl text-brand-color/70"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      is_navbar_active: false,
      isMenuOpened: true,
      menuArray: [
        {
          title: "O нас",
          route: "#",
          icon: "fas fa-chevron-down",
          childmenu: "lalala",
        },
        {
          title: "Активация полиса",
          route: "#",
        },
        {
          title: "Новости",
          route: "#",
        },
        {
          title: "Страховые услуги",
          route: "#",
          icon: "fas fa-chevron-down",
          childmenu: "1234567",
        },
        {
          title: "Точки продаж",
          route: "#",
        },
        {
          title: "FAQ",
          route: "#",
        },
      ],
    };
  },
  computed: {
    checkRouteToChangeNavColor() {
      const routeName = this.$route.name
      if (routeName === 'home') return 'bg-transparent'
      return 'bg-white'
    },
    checkRouteToChangeLinkColor() {
      const routeName = this.$route.name
      if (routeName === 'home') return 'text-white'
      return 'text-black'
    },
  },
  methods: {
    checkScreenWidth() {
      const winWidth = window.innerWidth

      if (winWidth <= 1280) {
        this.isMenuOpened = false
      } else {
        this.isMenuOpened = true
      }
    },
    openMenu() {
      if (this.isMenuOpened == false) {
        this.isMenuOpened = true
      } else {
        this.isMenuOpened = false
      }
    },
  },
  mounted() {
    const winWidth = window.innerWidth
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0
        ? (this.is_navbar_active = true)
        : (this.is_navbar_active = false);
      if (winWidth < 800 && this.is_navbar_active == true) {
        this.isMenuOpened = false
      }
    }),


      window.addEventListener('resize', this.checkScreenWidth)
    this.checkScreenWidth()
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  transition: 0.3s;
}
</style>
