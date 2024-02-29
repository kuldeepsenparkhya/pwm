import React from "react";

const Skill = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row text-start">
            <h2 className="fw-bolder">My Skills</h2>
          </div>

          <div className="row ">
            <div className="col-6 ">
              <span className="">React JS</span>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" ></div>
              </div>

              <span className="">HTML/CSS</span>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" ></div>
              </div>
            </div>
            <div className="col-6 ">
              <span className="">Web Design</span>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" ></div>
              </div>

              <span className="">JavaScript80</span>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center mt-4">
              <button type="button" className="">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
