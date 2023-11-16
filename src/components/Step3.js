import React from "react";
// import FileUploadComponent

const Step3 = ({onNext , onPrev }) => (
    <div>
        <h2>Step 3</h2>
        //dropdowns for state, country
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
    </div>
);

export default Step3;

