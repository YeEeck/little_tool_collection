<template>
  <div id="app">
    <div id="nav">
      <div style="display: inline-block">
        <router-link to="/">CombinationNumberCal</router-link>
        <br />
        <router-link to="/">组合数计算器</router-link>
      </div>
      <div style="display: inline-block; margin: 2em">
        |
        <br />
        |
      </div>
      <div style="display: inline-block">
        <router-link to="/FS">FractionalSimplification</router-link>
        <br />
        <router-link to="/FS">分数化简器</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: rgb(250, 250, 250);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
