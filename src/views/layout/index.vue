<template>
  <div>
    <LayoutHeader />
    <LayoutMain />
    <LayoutLeft />
  </div>
</template>

<script>
import LayoutHeader from "./components/header";
import LayoutLeft from "./components/left";
import LayoutMain from "./components/main";
export default {
  name: "layout",
  components: { LayoutHeader, LayoutLeft, LayoutMain }
};
</script>
<style lang="scss" scoped>

</style>
