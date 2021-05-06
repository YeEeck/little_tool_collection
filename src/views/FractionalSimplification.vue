<template>
  <div class="about">
    <h1>分数化简器</h1>
    <h4>
      注意：<br />对大于 <span style="color: red">9007199254740991</span> 或小于
      <span style="color: red">-9007199254740991</span>
      的数<br />计算时结果将不再可靠
    </h4>
    <FS />
  </div>
</template>

<script>
import FS from "../components/FS";

export default {
  name: "FractionalSimplification",
  components: { FS },
};
</script>
