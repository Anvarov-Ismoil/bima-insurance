<template>
	<header class="bg-transparent fixed top-0 left-0 right-0">
		<div class="container px-6 py-5 flex items-start gap-20 xxl:gap-60">
			<div class="logo">
				<img src="../assets/images/logo.png" alt="logo">
			</div>
			<div class="content p-12 md:p-20 md:pl-5 xl:p-0 bg-black hidden xl:block xl:bg-transparent w-full xl:border-l-white/30 xl:border-l-[1px]
			fixed top-0 left-0 h-full xl:static ">

			<!-- Burger -->
			<div class="burger-menu">
				<i class="fas fa-bars"></i>
			</div>

				<!-- top -->
				<div class="top flex items-center justify-between flex-wrap border-b-white/30 border-b-[1px] pb-5 pl-8">
					<div class="left mb-7 lg:mb-0">
						<ul class="flex items-center justify-center flex-wrap gap-6 md:gap-[50px] xxl:gap-[70px]">
							<li><a href="#" class="link text-brand-color">Частным лицам</a></li>
							<li><a href="#" class="link text-brand-color">Корпоративным клиентам</a></li>
							<li><a href="#" class="link text-brand-color">Партнерам / Переход в ТИАС</a></li>
						</ul>
					</div>
					<div class="right flex items-center justify-center text-center w-full md:w-auto flex-wrap gap-6 md:gap-[75px]">
						<p class="flex items-center justify-center gap-3">
							<i class="fas fa-phone-alt text-brand-color"></i>
							<span class="text-white">(44) 601 55 11</span>
						</p>

						<ul>
							<li class="text-white">Русский <i class="fas fa-chevron-down"></i></li>
						</ul>
					</div>
				</div>
				<!-- bottom -->
			<div class="bottom pt-5 pl-8">
				<ul class="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
					<li v-for="item in menuArray" :key="item" class="flex items-center justify-center gap-2 text-white">
						<router-link :to="item.route" class="text-white">
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
	</div>
</header>
</template>

<script>
export default{
	data() {
		return{
			menuArray: [
				{
					title: 'O нас',
					route: '#',
					icon: "fas fa-chevron-down",
					childmenu: 'lalala'
				},
				{
					title: 'Активация полиса',
					route: '#',
				},
				{
					title: 'Новости',
					route: '#',
				},
				{
					title: 'Страховые услуги',
					route: '#',
					icon : 'fas fa-chevron-down',
					childmenu: '1234567',
				},
				{
					title: 'Точки продаж',
					route: '#',
				},
				{
					title: 'FAQ',
					route: '#',
				},
			]
		}
	}
}
</script>