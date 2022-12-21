import { TOKEN_KEY } from "../../configs/constant";
import { Action, ActionType, InitState } from "../../models/store";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
};

export const user = (state: InitState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_AUTH: {
      // console.log(action.payload);
      return { ...state, currentUser: action.payload, isAuthenticated: true };
    }
    case ActionType.PURGE_AUTH: {
        // console.log("Token key",localStorage.getItem(TOKEN_KEY));
      localStorage.removeItem(TOKEN_KEY);

      // history.push("/login");
      return { ...state, currentUser: null, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};

export default user;
