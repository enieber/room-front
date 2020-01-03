import API from "../config/service/api";
import ALERT from "../config/service/api";
import { translate } from "../locales";

export const createUser = async (username, email, password) => {
  try {
    const body = { username, email, password };
    const result = await API.post("/register", body);
    if (result) {
      ALERT.success(translate("succes_create_user"));
    }
  } catch (err) {
    ALERT.error(translate("faill_create_user"), err);
  }
};
