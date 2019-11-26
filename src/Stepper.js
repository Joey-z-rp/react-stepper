import React, { useState } from 'react';
import { Formik } from 'formik';

const SteppedWidget = props => {
    const [activeStep, setActiveStep] = useState(0);
    const { steps, initialValues, validators } = props;
    const Step = steps[activeStep]
    const stepTo = increment => {
        setActiveStep(step => step + increment)
    };
    const proceed = validateFormFn => {
        validateFormFn().then(errors => {
            if (Object.keys(errors).length === 0) {
                stepTo(1);
            }
        });
    };
    const goBack = () => {
        stepTo(-1);
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                return validators[activeStep](values);
            }}
        >
            {({
                values,
                errors,
                handleChange,
                validateForm,
            }) => (
                <>
                    <button onClick={goBack}>Back</button>
                    <Step errors={errors} values={values} handleChange={handleChange} />
                    <button onClick={() => proceed(validateForm)}>Next</button>
                </>
            )}
        </Formik>
    );
};

export default SteppedWidget;