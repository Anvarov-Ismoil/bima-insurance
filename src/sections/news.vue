<template>
			<div class="news-card font-Mont600">
				<img v-if="image" :src="image" alt="#" class="md:w-[400px] lg:w-[645px]
				 h-[300px] object-cover">
				<p class="text-[15px] text-brand-color mt-8 flex gap-4 lg:gap-8">
					{{ subtitle }}
					<span class="w-[150px] h-[2px] mt-3 bg-brand-color">
					</span>
				</p>
				<h2 class="text-[18px] font-semibold tracking-wide my-5">
					{{ title }}
				</h2>
				<p class="opacity-50">
					{{ desc }}
				</p>
			</div>
</template>
<script>
export default {
	props: {
		subtitle: {
			type: String
		},
		title: {
			type: String
		},
		desc: {
			type: String
		},
		image: {
			type: String
		}
	},
}
</script>

<style scoped>
.news-card:first-child {
	grid-column: 1/4;
	grid-row: 1/3;
}

/* .news-card:nth-child(3) {
	grid-column: 2/4;
	grid-row: 2/3;
} */

</style>