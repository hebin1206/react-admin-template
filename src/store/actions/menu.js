import * as types from "../action-types";
import { reqUserInfo } from "@/api/user";

export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqUserInfo(token)
      .then((response) => {
        const { data } = response;
        if (data.status === 0) {
          const userInfo = data.userInfo;
          dispatch(setMenuList(userInfo));
          resolve(data);
        } else {
          const msg = data.message;
          reject(msg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setMenuList = (menu) => {
  return {
    type: types.UPDATE_MENU_LIST,
    menu,
  };
};

export const setMenuTopList = (menu) => {
  return {
    type: types.UPDATE_MENU_TOP_LIST,
    menu,
  };
};
