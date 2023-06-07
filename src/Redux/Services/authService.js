import { METHODS, SERVICEROUTES } from "../Constant/serviceConstant";
import {Axios} from "axios"
export function loginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICEROUTES.USERLOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
    .then((response)=>{
      return resolve(response)
    })
    .cath((error)=>{
      return reject(error)
    })
  });
}
