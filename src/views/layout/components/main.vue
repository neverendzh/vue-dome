<template>
  <div id="main-warp">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../../style/config.scss";
#main-warp {
  position: fixed;
  left: $navMnu;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 10px solid #f7f7f7;
  border-bottom: none;
  -webkit-box-sizing: border;
}
</style>
