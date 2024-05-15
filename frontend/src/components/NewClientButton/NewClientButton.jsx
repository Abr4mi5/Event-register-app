import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./NewClientButton.module.scss";

const NewClientButton = ({ className = "", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.NEWCLIENT);
  };

  return (
    <button
      className={classNames(styles.newclientbutton, className)}
      {...props}
      onClick={handleClick}
    ></button>
  );
};
NewClientButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NewClientButton;
