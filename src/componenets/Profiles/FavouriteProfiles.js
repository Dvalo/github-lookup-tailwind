import React, { useState } from "react";
import Repositories from "../Repositories/Repositories";
import { Link } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import GetData from "../../api/index";

import "./profile.css";
import "./Profiles.scss";

function FavouriteProfiles(props) {
  const [view, setView] = useState(
    localStorage.getItem("view") === null
      ? "list"
      : localStorage.getItem("view")
  );

  const { data, loading, error } = GetData("https://api.github.com/users");

  const handleClick = (newView) => {
    localStorage.setItem("view", newView);
    setView(newView);
  };

  // if (error) {
  //   return <PageNotFound />;
  // }
  // if (loading) {
  //   return <div />;
  // }
  // if (data) {
  return (
    <>
      <section id="favourite-profiles" className={"relative grid z-10 " + view}>
        <div className="container">
          <div className="text-right pb-3">
            <i
              className="card-layout-control clc-list border-t border-l border-b border-opacity-10 fas fa-list"
              onClick={() => handleClick("list-view")}
            ></i>
            <i
              className="card-layout-control clc-grid border border-opacity-10 fas fa-th-large"
              onClick={() => handleClick("grid-view")}
            ></i>
          </div>
          {/* <div className="profile-wrapper">
              {data.map(function (profile, index) {
                return (
                  <div className="profile-card" key={profile.login}>
                    <div className="profile-type">{profile.type}</div>
                    <div className="avatar">
                      <img
                        src={profile.avatar_url}
                        alt={profile.login}
                        width="164"
                        height="164"
                      ></img>
                    </div>
                    <div className="profile-details-wrap">
                      <div className="username-wrap">
                        <Link to={`/${profile.login}`} className="username">
                          {profile.login}
                        </Link>
                      </div>
                      <Repositories type="users" username={profile.login} />
                    </div>
                  </div>
                );
              })}
            </div> */}
        </div>
      </section>
    </>
  );
  // }
  return <div />;
}

export default FavouriteProfiles;
