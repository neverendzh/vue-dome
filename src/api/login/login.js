/**
 * 登陆
 */
import service from "../../utils/request.js";
import md5 from "js-md5";
export function login(acc) {
      // Send a POST request
  return service.request({
    method: "post",
    url: "login",
    data: {
      userName: acc.pas.account,
      password:  md5(acc.pas.password)
    }
  });
}
