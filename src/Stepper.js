import React, { useState } from 'react';
import { Formik } from 'formik';

const SteppedWidget = props => {
    const [activeStep, setActiveStep] = useState(0);
    const { steps, initialValues, validators, handleSubmit } = props;
    const Step = steps[activeStep]
    const stepTo = increment => {
        setActiveStep(step => {
            const targetStep = step + increment;
            const isWithinLimit = targetStep < steps.length && targetStep >= 0;

            if (isWithinLimit) return targetStep;

            return step;
        })
    };
    const proceed = (validateFormFn) => {
        validateFormFn().then(errors => {
            if (Object.keys(errors).length === 0) {
                stepTo(1);
            }
        });
    };
    const goBack = () => {
        stepTo(-1);
    };

    const isLastStep = activeStep === steps.length - 1;

    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                const validator = validators[activeStep];

                if (typeof validator === 'function') {
                    return validators[activeStep](values);
                }
            }}
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                handleChange,
                submitForm,
                validateForm,
                isSubmitting,
            }) => (
                <>
                    <button onClick={goBack}>Back</button>
                    <Step errors={errors} values={values} handleChange={handleChange} />
                    <button onClick={() => isLastStep ? submitForm() : proceed(validateForm)}>
                        {isLastStep ? 'Submit' : 'Next'}
                    </button>
                    {isSubmitting && <p>Submitting...</p>}
                </>
            )}
        </Formik>
    );
};

export default SteppedWidget;