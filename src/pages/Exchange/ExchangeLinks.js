import Button from "components/Common/Button";
import ModalWithPortal from "components/Modal/ModalWithPortal";
import { useState } from "react";
import { Link } from "react-router-dom";

import SwapImage from "../../img/coming-soon-swap.png";
import StakeImage from "../../img/coming-soon-stake.png";

import "./ComingSoonModal.css";
import "./ExchangeLinks.css";

export const ExchangeLinks = () => {
  const [isStakeVisible, setIsStakeVisible] = useState(false);
  const [isSwapVisible, setIsSwapVisible] = useState(false);

  function onStake() {
    setIsStakeVisible(true);
  }
  function onSwap() {
    setIsSwapVisible(true);
  }
  function onNotify() {}

  return (
    <div className="Exchange-links">
      <div className="Exchange-links-container">
        <div className="Exchange-link active">
          <a href="#">Trade</a>
        </div>
        <div className="Exchange-link" onClick={onSwap}>
          <a href="#">Swap</a>
        </div>
        <div className="Exchange-link" onClick={onStake}>
          <a href="#">Stake</a>
        </div>
      </div>
      <ComingSoonModal
        isVisible={isStakeVisible}
        image={StakeImage}
        className="Coming-soon"
        setIsVisible={setIsStakeVisible}
      >
        <div className="Coming-soon-modal-content">
          You'll be able to join one of our staking pools very soon. Stay up to date and get notified as soon as they're
          available.
          <div style={{ paddingTop: 40 }}>
            <Button onClick={onNotify}>Notify me</Button>
          </div>
        </div>
      </ComingSoonModal>
      <ComingSoonModal
        isVisible={isSwapVisible}
        image={SwapImage}
        className="Coming-soon"
        setIsVisible={setIsSwapVisible}
      >
        <div className="Coming-soon-modal-content">
          Swapping will be available soon. Stay tuned and get notified as soon as it’s available.
          <div style={{ paddingTop: 40 }}>
            <Button onClick={onNotify}>Notify me</Button>
          </div>
        </div>
      </ComingSoonModal>
    </div>
  );
};

const ComingSoonModal = (props) => {
  return <ModalWithPortal {...props}>{props.children}</ModalWithPortal>;
};
