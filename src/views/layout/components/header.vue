<template>
  <div id="header-warp">头部</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../../style/config.scss";
#header-warp{
    position: fixed;
    top: 0;
    left: $navMnu;
    height: 75px;
    right: 0px;
    background: #ffffff;
    -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,.1);
}
</style>
