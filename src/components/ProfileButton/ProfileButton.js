import React from "react";
import "./ProfileButton.css";
import { Link } from "react-router-dom";


function ProfileButton () {
  return(
    <Link className="profile-button link" to="/profile">Аккаунт</Link>       
  )
}

export default ProfileButton ; 