import React from 'react';

const Step2 = props => {
    const { values, handleChange, errors } = props;

    return (
        <>
            <label>Field 2</label>
            <input
                type="text"
                name="field2"
                id="field2"
                value={values.field2}
                onChange={handleChange}
            />
            {errors && errors.field2 && <span>{errors.field2}</span>}
        </>
    );
};

export default Step2;