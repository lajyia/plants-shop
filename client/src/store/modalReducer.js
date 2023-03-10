

const stateDefault = {
    modal: false
}


const VISIBLE_MODAL = "VISIBLE_MODAL";
const UNVISIBLE_MODAL = "UNVISIBLE_MODAL";


export const modalReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case VISIBLE_MODAL:
            return {...state, modal: true}
        case UNVISIBLE_MODAL:
            return {...state, modal: false}
        default:
            return state
    }
}


export const visibleModalAction = () => ({type: VISIBLE_MODAL});
export const unvisibleModalAction = () => ({type: UNVISIBLE_MODAL})