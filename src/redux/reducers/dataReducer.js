import { REQUEST_API_DATA } from "../actions/actions";

const initialState = {
  products: [],
};

const dataReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case REQUEST_API_DATA:
      return { ...state, products: data };
    default:
      return state;
  }
};

export default dataReducer;
