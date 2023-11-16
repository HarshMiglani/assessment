import React from "react";
// import FileUploadComponent

const Step2 = ({onNext , onPrev , onChange , values}) => (
    <div>
        <h2>Step 2</h2>
        <label>Upload your photo:</label>
        {/* <FileUploadComponent/> */}
        <label>DateDate of Birth</label>
        <input type = "date" name="dob" value={values.dob} onChange={onChange} />
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
    </div>
);

export default Step2;

