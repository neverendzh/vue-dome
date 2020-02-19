<template>
  <div id="nav-warp">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      router
    >
      <template v-for="(item, index) in menu">
        <el-submenu v-if="!item.hidden" :key="index" :index="index+''">
          <template slot="title">
            <i :class="item.mate.icon"></i>
            <span slot="title">{{ item.mate.name }}</span>
          </template>
          <el-menu-item
            v-for="(itemc, indkey) in item.children"
            :key="indkey"
            :index="itemc.path"
            >{{ itemc.mate.name }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: null,
      isCollapse: false
    };
  },
  mounted() {
    this.menu = this.$router.options.routes;
    console.log(this.$router.options.routes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/config.scss";
@import "../../../style/main.scss";
#nav-warp {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMnu;
  height: 100vh;
  background-color: #22262f;;
}
</style>
