export default (state = null, action) => {
    switch (action.type) {
        case 'select_prov':
            return action.payload;
        default: 
            return state;
    }
};