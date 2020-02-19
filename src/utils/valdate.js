export function valdate(str) {
  var flag = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]"
  );
  // 判断 str 是否包含特殊字符
  if (flag.test(str)) {
    console.debug("包含！");
    return false;
  } else {
    console.debug("不包含！");
    return true;
  }
}
