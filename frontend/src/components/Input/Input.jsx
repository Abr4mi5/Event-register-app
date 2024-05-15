import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = ({ label, className = "", ...props }) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <input className={classNames(styles.input, className)} {...props} />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,

  className: PropTypes.string,
};

export default Input;
