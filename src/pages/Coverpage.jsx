import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';
import StClogo from '../assets/StClogo.png';

function Coverpage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <section className="center_content outer__gap">
      <div className="logo__container">
        <img src={StClogo} alt="logo" />
      </div>
      <h1 className="center__text app__name">
        Stake Connect School Management
      </h1>
      <div className="circle">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="centre vertical__gap">
        <IoCheckmarkCircle style={{ color: '#15023a' }} />
        <p className="text__without__boarder smaller__font__size">
          Accept Terms & Condition
        </p>
      </div>
      <div className="centre a__rem__gap">
        <span className="text__with__radius smallest__font__size center__text">
          Already Have an Account
        </span>
        <button
          type="button"
          className="centre general__button"
          onClick={handleClick}
        >
          <span className="smallest__font__size">Next</span>
          <IoIosArrowRoundForward className="next__arrow" />
        </button>
      </div>
    </section>
  );
}

export default Coverpage;
