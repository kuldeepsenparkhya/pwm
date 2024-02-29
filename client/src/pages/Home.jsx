import React from "react";
import Avatar from "react-avatar";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="hero-section ">
        <div className="container">
          <div className="row py-5  ">
            <div className="col-lg-6 py-5 ps-lg-5">
              <h1 className="text-white">HI, I'M A </h1>
              <TypeAnimation
                className=""
                sequence={["PROJECT MANAGER", 1000, "developer", 1000]}
                wrapper="span"
                speed={40}
                style={{
                  fontSize: "3em",
                  display: "inline-block",
                  marginLeft: "80px",
                }}
                repeat={Infinity}
              />
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                laudantium omnis aperiam sapiente beatae minima rem,
                perspiciatis labore quisquam, temporibus quasi! Tenetur dicta
                aperiam magni officiis odio alias nulla facere? Molestias
                repellendus cumque illo explicabo fugiat, aut veritatis
                distinctio doloremque facilis officiis laboriosam ipsum eaque
                tempore, hic quidem, culpa animi!
              </p>
              <ul className="d-flex " >
                <li className="workBtn">
                  <a src="/" className=" ">
                    View my Works
                  </a>
                </li>
                <li className="workBtn">
                  <a src="/" className=" ">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6  py-5 ps-lg-5">
              <Avatar
                name="avtar"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                size="500"
                style={{
                  border: "5px solid white",
                }}
                round={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
