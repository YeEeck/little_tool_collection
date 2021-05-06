<template>
  <div class="FS">
    <input v-model="numA" type="text" /> / <input v-model="numB" type="text" />
    <br /><br />
    <button @click="simp" style="width: 6em; height: 2.5em">化简</button>
    <br /><br />
    最简分数：<input
      id="res"
      type="text"
      style="width: 8em"
      readonly="readonly"
      v-bind:class="{ width: getResWidth }"
      v-model="res"
    />
  </div>
</template>

<script>
function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}

export default {
  name: "FS",
  data() {
    return {
      numA: "",
      numB: "",
      res: "",
      resWidth: 24,
    };
  },
  computed: {
    getResWidth: function () {
      return this.resWidth + "px";
    },
  },
  methods: {
    simp: function () {
      var tA = this.numA;
      var tB = this.numB;
      var diviNum;
      while ((diviNum = gcd(tA, tB)) != 1) {
        tA /= diviNum;
        tB /= diviNum;
      }
      this.res = tA + " / " + tB;
      this.resWidth = this.res.length * 8 + "px";
    },
  },
};
</script>

<style>
input {
  width: 6em;
  text-align: center;
}
</style>