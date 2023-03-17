import React from "react";
import { useNavigate } from "react-router";
import "./EmptyState.css";
const EmptyState = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-state__container">
      <span className="empty-state__emoji">(˘･_･˘)</span>

      <p className="empty-state__description">
        Unfortunately, you are not following any currencies yet...
      </p>

      <button
        className="empty-state__btn"
        onClick={() => navigate("..", { replace: true })}
      >
        Go Back
      </button>
    </div>
  );
};

export default EmptyState;
