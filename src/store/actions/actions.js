import axios from "axios";
import { toast } from "react-toastify";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const GET_FROM_LOCAL_STORAGE = "GET_FROM_LOCAL_STORAGE";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_EKLE, payload: notId };
}
export function getFromLocal() {
  return { type: GET_FROM_LOCAL_STORAGE };
}

export const notEkleAPI = (yeniNot, resolve) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        console.log(res);
        resolve(true);
        dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => {
      resolve(false);
      console.log(error);
    });
};
export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.data));
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
};
