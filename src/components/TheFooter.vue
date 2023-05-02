<template>
  <footer class="bg-[#2F2E33] mt-section">
    <div class="container flex justify-between flex-wrap py-4 gap-8 md:gap-16 font-Mont600">
      <div class="left">
        <img class="pt-[36px] mb-[20px]" src="../assets/images/logo.png" alt="photo" />
        <h3 class="text-[#fff] text-[15px]">
          Наша миссия — создание ведущего<br />
          страховщика на основе инноваций<br />
          и мирового опыта
        </h3>
        <div class="flex gap-3 mt-12">
          <img class="w-5 h-5 cursor-pointer hover:w-[21.5px] hover:h-[21.5px]" src="../assets/images/face1.png"
            alt="photo" />
          <img class="w-5 h-5 cursor-pointer hover:w-[21.5px] hover:h-[21.5px]" src="../assets/images/inst.png"
            alt="photo" />
        </div>
      </div>
      <div class="center leading-10 lg:pt-[52px] text-white ">
        <h2 class="font-extrabold text-xl pb-5 font-Mont800">Контакты</h2>
        <ul>
          <li class="flex items-center">
            <img class=" pr-[10px] w-7 h-5" src="../assets/images/locatsia.png" alt="" />
            г. Душанбе, ул. Нусратулло Махсум 74/3
          </li>
          <li class="flex items-center">
            <img class=" pr-[10px] w-[25px] h-[18px]" src="../assets/images/call.png" alt="photo" />
            (44) 601 55 11 / 5511
          </li>
          <li class="flex items-center">
            <img class=" pr-[10px] w-[25px] h-[18px]" src="../assets/images/massenger.png" alt="photo" />
            mail@bima.tj
          </li>
          <li class="flex items-center">
            <img class=" pr-[10px] w-6 h-4" src="../assets/images/time.png" alt="photo" />
            Понедельник - Пятница: 9:00 - 18:00. Суббота: 10:00 - 12:00
          </li>
        </ul>
      </div>
      <div class="right leading-10 lg:pt-[52px] text-white">
        <h2 class="font-extrabold text-xl pb-5 font-Mont800">Полезные ссылки</h2>
        <ul>
          <li v-for="(item, idx) in menuArray" :key="item"
            class="flex items-center  gap-2 text-white relative cursor-pointer hover:text-brand-color transition" @click="openDropdown(idx)">
            <i :class="item.icon,
              [menuArray[idx].isDropdownOpened === true ? 'rotate-90' : '-rotate-0']"
              class="text-[10px] transition-all duration-300 text-brand-color"></i>
            <router-link :to="item.route" :class="checkRouteToChangeLinkColor" class="hover:text-brand-color transition hover:text-[16.5px]">
              {{ item.title }}
            </router-link>
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
          <h2 class="text-[#FBBE07] pt-3">При наступлении страхового случая:</h2>
          <li class="text-white flex items-center">
            <img class="pr-[10px] w-[25px] h-[18px]" src="../assets/images/call.png" alt="photo">
            (+992) 880 00 03 31
          </li>
          <li class="text-white flex items-center">
            <img class="pr-[10px] w-[25px] h-[18px]" src="../assets/images/massenger.png" alt="photo">
            claims@bima.tj
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <hr class="text-white" />
      <div class="flex justify-center md:justify-between flex-wrap py-5 gap-5">
        <p class="text-white order-1 md:order-none">© 2021. Все права защищены</p>
        <p class="text-white text-center">Разработка сайта:
          <span class="text-gray-400">
            Online Service Group
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuArray: [
        {
          title: "Вакансии",
          icon: "fas fa-chevron-right",
          route: '',
          isDropdownOpened: false,
          childmenu: [
            {
              title: 'Text 1',
              route: '#'
            },
            {
              title: 'Text 2',
              route: '#'
            }
          ]
        },
        {
          title: "Раскрытие Информации",
          icon: "fas fa-chevron-right",
          route: '',
          isDropdownOpened: false,
          childmenu: [
            {
              title: 'Info 1',
              route: '#'
            },
            {
              title: 'Info 2',
              route: '#'
            },
          ],
        },
        {
          title: "Приглашения Тендер",
          icon: "fas fa-chevron-right",
          route: '',
          isDropdownOpened: false,
          childmenu: [
            {
              title: 'Tender 1',
              route: '#'
            },
            {
              title: 'Tender 2',
              route: '#'
            },
          ],
        },
      ],
    }
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
        openDropdown(idx) {
          if (idx === 0) {
            if (this.menuArray[idx].isDropdownOpened == false) {
              this.menuArray[idx].isDropdownOpened = true
            } else {
              this.menuArray[idx].isDropdownOpened = false
            }
          }
          if (idx === 1) {
            if (this.menuArray[idx].isDropdownOpened == false) {
              this.menuArray[idx].isDropdownOpened = true
            } else {
              this.menuArray[idx].isDropdownOpened = false
            }
          }
          if (idx === 2) {
            if (this.menuArray[idx].isDropdownOpened == false) {
              this.menuArray[idx].isDropdownOpened = true
            } else {
              this.menuArray[idx].isDropdownOpened = false
            }
          }
          
        },
  },
}
</script>