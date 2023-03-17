import React from "react";
import CurrenciesList from "../components/CurrenciesList/CurrenciesList";
import CustomModal from "../components/Modal/CustomModal";
import EmptyState from "../components/EmptyState/EmptyState";
import { clearFollowedCurrencies } from "../features/followed/CurrencyTile/currencySlice";
import CurrencyTile from "../features/followed/CurrencyTile/CurrencyTile";
import useModal from "../hooks/useModal";
import CustomButton from "../components/Button/CustomButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

type Props = {};

const FollowedCurrencies = (props: Props) => {
  const { isActive, handleShow, handleClose } = useModal();

  const followedCurrencies = useAppSelector(
    (state) => state.followedCurrencies
  );

  const dispatch = useAppDispatch();

  const renderFollowedCurrencies = () => {
    if (followedCurrencies && followedCurrencies.length > 0) {
      return followedCurrencies.map((rate) => (
        <div key={rate.code}>
          <CurrencyTile {...rate} key={rate.code} />
        </div>
      ));
    }
  };

  const displayModal = () => {
    handleShow();
  };

  return followedCurrencies.length > 0 ? (
    <>
      <CustomModal
        title="Wait!"
        isActive={isActive}
        handleClose={handleClose}
        onAccept={() => {
          dispatch(clearFollowedCurrencies());
        }}
      >
        <span>
          You are going to remove <br /> <u>ALL OF YOUR FOLLOWED CURRENCIES</u>
        </span>
      </CustomModal>
      {followedCurrencies.length > 1 && (
        <CustomButton
          callback={() => displayModal()}
          customClassName="followed-currencies__btn-clear"
          content={"🗑️"}
        />
      )}

      <CurrenciesList>{renderFollowedCurrencies()}</CurrenciesList>
    </>
  ) : (
    <EmptyState />
  );
};

export default FollowedCurrencies;
