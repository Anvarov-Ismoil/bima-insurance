<template>
  <header class="fixed top-0 left-0 right-0 z-50 font-Mont600"
    :class="[is_navbar_active ? 'scroll' : 'bg-transparent', checkRouteToChangeNavColor]">
    <div class="container py-5 flex items-center xl:items-start justify-between gap-8 xxl:gap-56">
      <div class="logo w-28 md:w-52">
        <img src="../assets/images/logo.png" alt="logo" class="w-full h-full object-cover" />
      </div>
      <div v-if="isMenuOpened" :class='checkRouteToChangeBorder'
        class="content p-12 pt-0 md:p-20 md:pl-5 xl:p-0 bg-black xl:bg-transparent w-full h-[100vh] xl:h-auto xl:${checkRouteToChangeBorder} xl:border-l-[1px] fixed top-0 left-0 z-20 xl:static overflow-y-scroll lg:overflow-y-visible">
        <!-- top -->
        <div :class="checkRouteToChangeBorder"
          class="top flex items-center justify-center lg:justify-between flex-wrap border-b-[1px] pb-5 xl:pl-8 mt-20 xl:mt-0">
          <div class="left mb-7 lg:mb-0">
            <ul class="flex items-center justify-center flex-wrap gap-6 md:gap-[40px] lg:gap-[50px] xxl:gap-[70px]">
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
          <div class="right flex items-center justify-center text-center w-full md:w-auto flex-wrap gap-6 md:gap-[45px]">
            <p class="flex items-center justify-center gap-3">
              <i class="fas fa-phone-alt text-brand-color"></i>
              <span :class="checkRouteToChangeLinkColor">(44) 601 55 11</span>
            </p>
            <ul>
              <li @click="isActive" :class="checkRouteToChangeLinkColor"
                class="relative cursor-pointer items-center text-left" id="dropdownRadioBgHoverButton"
                data-dropdown-toggle="dropdownRadioBgHover">
                Русский <i class="fas fa-chevron-down text-[14px] transition-all duration-300"
                  :class="[isDropdownActive === true ? '-rotate-180' : '-rotate-0'], checkRouteToChangeLinkColor"></i>
                <div v-if="isDropdownActive" id="dropdownRadioBgHover"
                  class="z-10 w-32 divide-y divide-gray-100 rounded-lg shadow bg-gray-700 absolute top-10 left-0 right-0">
                  <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownRadioBgHoverButton">
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input checked id="default-radio-4" type="radio" value="Русский" name="Русский"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="default-radio-4"
                          class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Русский</label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="default-radio-5" type="radio" value="English" name="English"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="default-radio-5"
                          class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">English</label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="default-radio-6" type="radio" value="O'zbekcha" name="O'zbekcha"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="default-radio-6"
                          class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">O'zbekcha</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- bottom -->
        <div class="bottom pt-5 pl-8">
          <ul class="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
            <li v-for="(item, idx) in menuArray" :key="item"
              class="flex items-center justify-center gap-2 text-white relative" @click="openDropdown(idx)">
              <router-link :to="item.route" :class="checkRouteToChangeLinkColor">
                {{ item.title }}
              </router-link>
              <i :class="item.icon,
                [menuArray[idx].isDropdownOpened === true ? '-rotate-180' : '-rotate-0'], checkRouteToChangeLinkColor"
                class="text-[10px] transition-all duration-300"></i>
              <div v-if="menuArray[idx].isDropdownOpened"
                class="z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 absolute top-10 left-0 right-0">
                <ul class="py-2 text-sm text-gray-200">
                  <li v-for="childItem in item.childmenu" :key="childItem">
                    <router-link :to="childItem.route"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {{ childItem.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
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
      isDropdownActive: false,
      scrollTop: 0,
      menuArray: [
        {
          title: "O нас",
          icon: "fas fa-chevron-down",
          route: '',
          isDropdownOpened: false,
          childmenu: [
            {
              title: 'Главная',
              route: '/'
            },
            {
              title: 'Наша команда',
              route: 'about'
            },
            {
              title: 'Новости',
              route: 'news'
            },
            {
              title: 'Обратная связь',
              route: 'contact'
            }
          ],
        },
        {
          title: "Активация полиса",
          route: "#",
        },
        {
          title: "Новости",
          route: "news",
        },
        {
          title: "Страховые услуги",
          icon: "fas fa-chevron-down",
          route: '',
          isDropdownOpened: false,
          childmenu: [
            {
              title: '«СПОКОЙСТВИЕ ЗА РУЛЕМ»',
              route: 'service'
            },
            {
              title: 'Автострахование',
              route: '#'
            },
            {
              title: 'Корпоративное страхование',
              route: '#'
            },
          ],
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
      if (!routeName === 'home' || this.scrollTop > 0) return 'text-white'
      return 'text-black'
    },
    checkRouteToChangeBorder() {
      const routeName = this.$route.name
      if (routeName === 'home') return 'border-white/30'
      return 'border-black/30'
    },
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY
    },
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
    openDropdown(idx) {
      // if (idx >= 0 && idx < this.menuArray.length) {
      //   this.menuArray[idx].isDropdownOpened = !this.menuArray[idx].isDropdownOpened;
      // }     
      if (idx === 0) {
        this.menuArray[idx].isDropdownOpened = !this.menuArray[idx].isDropdownOpened;
      }
      if (idx === 3) {
        this.menuArray[idx].isDropdownOpened = !this.menuArray[idx].isDropdownOpened;
      }
    },
    isActive() {
      if (this.isDropdownActive == false) {
        this.isDropdownActive = true
      } else {
        this.isDropdownActive = false
      }
    },
    // isActive() {
    // this.isDropdownActive = !this.isDropdownActive;
    // }

  },
  mounted() {
    const winWidth = window.innerWidth
    window.addEventListener("scroll", () => {
      this.handleScroll()
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

<style lang="scss" scoped>.scroll {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  transition: 0.3s;
}

.content::-webkit-scrollbar {
  display: none;
}</style>
