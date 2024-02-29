import React from "react";

const Service = () => {
  return (
    <>
      <div className=" bg-secondary">
        <div className="container">
          <div className="row text-center">
            <p className="">What I Do?</p>
            <h2 className="fw-bolder">How I can help your next project</h2>
          </div>

          <div className="row ">
            <div className="col-4 text-center ">
              <img
                width={"400px"}
                src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
                alt=""
              />
              <span className="text-center">Graphic Design</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
            <div className="col-4 text-center  ">
              <img
                width={"400px"}
                src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
                alt=""
              />
              <span>Web Design</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text.
              </p>
            </div>
            <div className="col-4 text-center  ">
              <img
                width={"400px"}
                src="https://strapi.dhiwise.com/uploads/Enhancing_User_Experience_with_the_Loading_Component_in_React_Main_Image_df8d468638.webp?w=1920&q=75"
                alt=""
              />
              <span>Web Development</span>
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

export default Service;
