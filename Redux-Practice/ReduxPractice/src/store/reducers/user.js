const INITAIL_STATE = {
counter: 0

};

const userReducer = (state = INITAIL_STATE, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }

};

export default userReducer;