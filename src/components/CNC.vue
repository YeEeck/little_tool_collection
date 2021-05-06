<template>
  <div class="CNC">
    <table align="center">
      <tr>
        <td rowspan="2">
          <span style="font-size: 5em">C</span>
        </td>
        <td>
          <input type="text" v-model="Ndata" id="inputN" style="width: 3em" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="Mdata" id="inputM" style="width: 3em" />
        </td>
      </tr>
    </table>
    <button @click="cal" style="width: 6em; height: 2.5em">计算</button>
    <br /><br />
    计算结果：<input
      id="res"
      type="text"
      style="width: 6em"
      v-model="res"
      readonly="readonly"
    />
  </div>
</template>

<script>
export default {
  name: "CNC",
  data() {
    return {
      Ndata: "",
      Mdata: "",
      res: "",
    };
  },
  methods: {
    cal: function () {
      var BufM = this.Mdata;
      var sumN = 1;
      var sumM = 1;
      for (var i = 0; i < this.Ndata; i++) {
        sumN *= BufM--;
        sumM *= i + 1;
      }
      this.res = sumN / sumM;
    },
  },
};
</script>

<style>
input {
  text-align: center;
}
</style>