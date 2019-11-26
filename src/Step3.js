import React from 'react';

const Step3 = props => {
    const { values, handleChange } = props;

    return (
        <>
            <label>Choice 1 <input name="myChoice" type="radio" /></label>
            <label>Choice 2 <input name="myChoice" type="radio" /></label>
            <label>Choice 3 <input name="myChoice" type="radio" /></label>
        </>
    );
};

export default Step3;