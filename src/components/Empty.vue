<template>
    <div>
      <img :src="noResult" alt="" class="opacity-60 w-48 mt-12">
    </div>
</template>

<script>

import noResult from '@/assets/er.png'

export default {
    name: "Empty",
    data() {
      return {
        noResult: noResult
      }
    }
}
</script>