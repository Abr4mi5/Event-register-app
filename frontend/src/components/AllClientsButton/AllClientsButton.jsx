import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./AllClientsButton.module.scss";

const AllClientsButton = ({ className = "", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CLIENTS);
  };

  return (
    <button
      className={classNames(styles.allclientsbutton, className)}
      {...props}
      onClick={handleClick}
    ></button>
  );
};
AllClientsButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AllClientsButton;
