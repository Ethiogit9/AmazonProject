import{Type} from './actions.type';
export const initialState = {
    basket: [],
    
};

export const reducer = (state, action) => {
    
    switch (action.type) {
      case Type.ADD_TO_BASKET:
        return{
            ...state,
            basket:[...state.basket,action.item]

        }

        // break;

        default:
        break;
    }
    
}
// const [state, dispatch]=useReducer(reducer, initialState)