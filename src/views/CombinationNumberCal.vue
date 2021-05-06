<template>
  <div class="home">
    <h1>组合数计算器</h1>
    <CNC />
  </div>
</template>

<script>
// @ is an alias to /src
import CNC from "@/components/CNC.vue";

export default {
  name: "CombinationNumberCal",
  components: {
    CNC,
  },
};
</script>
