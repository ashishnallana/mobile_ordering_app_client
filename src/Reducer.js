export const initialState = {
  filters: {
    price: "none",
    type: "none",
    processor: "none",
    memory: "none",
    os: "none",
  },
  cart: [],
  showCart: false,
};

// gives the total value of cart items
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: action.item,
      };

    case "SHOW_HIDE_CART":
      return {
        ...state,
        showCart: state.showCart ? false : true,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem._id === action._id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
