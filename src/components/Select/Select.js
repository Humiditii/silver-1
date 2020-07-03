import React from 'react';
import Aux from '../../hoc/Auxillary';

const selectForm = (props) => {
    return (
        <Aux>
             <div className="input-field col s12">
                <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>
        </Aux>
    );
}

export default selectForm;


{/* <input type="text" class="datepicker"> */}