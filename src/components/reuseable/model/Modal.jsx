import PropTypes from 'prop-types';
import styles from './Modal.module.css';

import error from '../../../assets/error.jpg';
import success from '../../../assets/success.jpg';

function Modal({ message, onClose, type }) {
  return (
    <>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div onClick={onClose} className="backdrop flex flex-column" />
      <div className={`${styles.modalContainer} flex flex__column a__rem__gap`}>
        <div className={`${styles.modalMessage} grid a__rem__gap`}>
          {type === 'success' ? (
            <img src={success} alt="success" />
          ) : (
            <img src={error} alt="error" />
          )}
          <p>{message}</p>
        </div>
        <button type="button" className="general__button" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Modal;
