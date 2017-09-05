const initialState = [];

export default (state=initialState, action={type:''})=> {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    name: action.name
                }
            ];
        case 'REMOVE_TODO' :
            return state.splice(0,action.index)
        default :

            return state;

    }
}