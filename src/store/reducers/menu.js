import * as types from "../action-types";
import menu from '@/config/menuConfig'
const initUserInfo = {
  menuList: menu,
  menuTopList: menu,
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.UPDATE_MENU_LIST:
      return {
        ...state,
        menuList: action.menu
      };
    case types.UPDATE_MENU_TOP_LIST:
      return {
        ...state,
        menuTopList: action.menu
      };
    default:
      return state;
  }
}
