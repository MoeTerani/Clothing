const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currenUser: action.playload
      };

    default:
      return state;
  }
};

export default userReducer;

//************************************* */
//rxreducer

// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
