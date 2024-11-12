export const reducerFunction = (state, {type, payload})=>{
    switch(type){
        case "ADD":
            return{...state, counter:state.counter + 1};
        case "SUB":
            return{...state, counter:state.counter - 1};
        default:
            return state;
    }
};