import React from 'react';

const Step1 = ({onNext , onChange , values}) => (
    <div>
        <h2>Step 1</h2>
        <label>What is your name?</label>
        <input type="text" name="name" value={values.name} onChange={onChange} />
        <button onClick = {onNext}>Next</button>
    </div>
);

export default Step1;