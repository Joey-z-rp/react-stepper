import React from 'react';

const Step3 = props => {
    const { values, handleChange } = props;

    return (
        <>
            <label htmlFor="choice-1">Choice 1</label>
            <input
                id="choice-1"
                name="myChoice"
                checked={values.myChoice === "choice1"}
                value="choice1"
                type="radio"
                onChange={handleChange}
            />
            <label htmlFor="choice-2">Choice 2</label>
            <input
                id="choice-2"
                name="myChoice"
                checked={values.myChoice === "choice2"}
                value="choice2"
                type="radio"
                onChange={handleChange}
            />
            <label htmlFor="choice-3">Choice 3</label>
            <input
                id="choice-3"
                name="myChoice"
                checked={values.myChoice === "choice3"}
                value="choice3"
                type="radio"
                onChange={handleChange}
            />
        </>
    );
};

export default Step3;