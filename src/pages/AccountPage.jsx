import React from "react";
import { useDispatch } from "react-redux";
import { removeUsers } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(removeUsers());
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogOut}>Выйти из аккаунта</button>
    </div>
  );
};

export default AccountPage;
