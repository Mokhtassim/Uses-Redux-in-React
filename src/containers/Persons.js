import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.storeResults.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        storeResults: state.persons
    };
};

const mapDispatchingToProps = dispatch => {
    return {
        onPersonAddedHandler: (name, age) => dispatch({type: actionTypes.personAddedHandler, addPerson:{name:name,age:age}}),
        onPersonDeletedHandler: (id) => dispatch({type: actionTypes.personDeletedHandler, resultElId: id})
    };
};
export default connect(mapStateToProps, mapDispatchingToProps) (Persons);