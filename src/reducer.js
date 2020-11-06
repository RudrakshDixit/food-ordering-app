export const initialState = {
  basket: [],
};

export const getBasketTotal =(basket) => basket?.reduce((amount,item)=> parseInt(item.price)*item.qty+ amount,0);

export const getCartLength =(basket) => basket?.reduce((amount,item)=> item.qty+ amount,0);



const reducer = (state, action) => {
  let data = [...state.basket];
  let temp = data.find((item) => item.id === action.item.id);
  switch (action.type) {
    case "ADD":
     
      if (!temp)
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      else {
        let oldArr = data.filter((item) => item.id !== action.item.id);
        temp.qty++;
        return { ...state, basket: [temp,...oldArr] };
      }

      case "REMOVE":

        {let oldArr = data.filter((item) => item.id !== action.item.id);        
        return { ...state, basket: [...oldArr] };}

      case "DEC":
        let oldArr = data.filter((item) => item.id !== action.item.id);
        temp.qty--;
        if(temp.qty===0){
          return { ...state, basket: [...oldArr] };}
         else
        return { ...state, basket: [temp,...oldArr] };
        case "CLEAR":
          return { ...state, basket: [] };
    default:
      return {
        state,
      };
  }
};
export default reducer;
