import React from "react";

const Resume = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row text-center">
            <p className="">Resume</p>
            <h2 className="fw-bolder">A summary of My Resume</h2>
          </div>

          <div className="row ">
            <div className="col-6 ">
              <span className="">My Education</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
            <div className="col-6  ">
              <span className="">My Experience</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
