<template>
  <div class="btn-wrap">
    <button
      class="btn py-2 md:py-3 px-6 md:px-7 rounded-[100px] shadow-md border-none 
      transition-all cursor-pointer text-center hover:scale-110 font-Mont600"
      :class="[type, color]"
      @click="$emit('action')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'bg-gray-700'
    },
    color: {
      type: String,
      default: 'text-white'
    }
  }
}
</script>
