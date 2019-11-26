import React from 'react';
import Stepper from './Stepper';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const steps = [Step1, Step2, Step3, Step4];
const initialValues = { field1: 'field1 default value', field2: 'field2', email: 'myEmail' };
const validator1 = values => {
	const errors = {};
	if (!values.field1) errors.field1 = 'Field 1 is required!!!';
	console.log('step1', { errors, values })
	return errors;
};

const validator2 = values => {
	const errors = {};
	if (values.field2 !== values.field1) errors.field2 = 'Field 2 needs to be the same as field 1';
	console.log('step2', { errors, values })
	return errors;
};

const validator3 = () => ({});

const validators = [validator1, validator2, validator3, validator3];

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Stepper validators={validators} steps={steps} initialValues={initialValues} />
			</header>
		</div>
	);
}

export default App;
