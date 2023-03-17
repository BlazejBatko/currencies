import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Rate } from "../../../Interfaces";
import { followCurrency, unfollowCurrency } from "./currencySlice";
import { useState } from "react";
import "./CurrencyTile.css";
import useModal from "../../../hooks/useModal";
import CustomModal from "../../../components/Modal/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
type Props = {
  code: string;
  currency: string;
  mid: number;
};

const CurrencyTile = (props: Props) => {
  const dispatch = useAppDispatch();
  const modal = useModal();

  const followedCurrencies = useAppSelector(
    (state) => state.followedCurrencies
  );

  const [isFollowed, setIsFollowed] = React.useState(false);

  React.useEffect(() => {
    setIsFollowed(followedCurrencies.some((rate) => rate.code === props.code));
  }, [followedCurrencies]);

  const handleButtonClick = () => {
    if (isFollowed) {
      modal.handleShow();
    } else {
      dispatch(followCurrency(props));
    }
  };

  const onUnfollowCurrencyClicked = () => {
    dispatch(unfollowCurrency(props.code));
    modal.handleClose()
  };

  return (
    <>
      <CustomModal
        isActive={modal.isActive}
        handleClose={modal.handleClose}
        title="Wait!"
        onAccept={() => onUnfollowCurrencyClicked()}
      >
        <i>Are you sure you want to unfollow this currency?</i>
      </CustomModal>

      <div className="currency-tile--container">
        <div className="currency-tile__details">
          <div className="currency-tile--header">
            <span className="currency-tile--code">{props.code}</span>
            <div className="line" />
            <div className="currency-tile--value">
              {/* Rounding value number to 6 decimal places to prevent UI from breaking */}
              {Math.floor(props.mid * 1000000) / 1000000}
            </div>
          </div>
          <i className="currency-tile--name">{props.currency}</i>
        </div>
        <button
          className={`currency-tile__btn ${isFollowed && "followed"}`}
          onClick={handleButtonClick}
        >
          {isFollowed ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </div>
    </>
  );
};

export default CurrencyTile;
