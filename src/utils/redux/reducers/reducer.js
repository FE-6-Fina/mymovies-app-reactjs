const initalState = {
  favorites: [],
  loading: true,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
