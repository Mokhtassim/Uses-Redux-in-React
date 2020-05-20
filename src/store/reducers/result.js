import * as actionTypes from '../actions';

const initialState = {
    persons:[]
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.personAddedHandler:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.addPerson.name,
                age: action.addPerson.age
            };
            return{
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.personDeletedHandler:
            const updateArray = state.persons.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            persons: updateArray
        }
    }
   
    return state;
};

export default reducer;