import React from 'react';

const Step1 = props => {
    const { values, handleChange, errors } = props;

    return (
        <>
            <label>Field 1</label>
            <input
                type="text"
                name="field1"
                id="field1"
                value={values.field1}
                onChange={handleChange}
            />
            {errors && errors.field1 && <span>{errors.field1}</span>}
        </>
    );
};

export default Step1;