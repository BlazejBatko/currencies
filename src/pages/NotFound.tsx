import React from "react";
import { useNavigate } from "react-router";
import CustomButton from "../components/Button/CustomButton";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <p>¯\_(ツ)_/¯</p>
      <CustomButton
        callback={() => navigate("/", { replace: true })}
        customClassName="btn--404"
        content={"Take me to home"}
      />
    </section>
  );
};

export default NotFound;
