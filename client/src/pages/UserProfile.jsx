import React from "react";

function UserProfile() {
  return (
    <div className="container">
      <div className="row profile">
        <div className="col-12">
          <div className="profile-sidebar text-center">
            <div className="profile-userpic">
              <img
                src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                className="img-responsive"
                alt=""
              />
            </div>

            <div className="profile-usertitle">
              <div className="profile-usertitle-name">Jason Davis</div>
              <div className="profile-usertitle-job">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
