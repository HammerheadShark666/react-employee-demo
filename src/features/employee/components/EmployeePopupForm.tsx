import React from "react";
import EmployeeAddUpdate from "./EmployeeAddUpdate";
import styles from "../../employee/css/Employee-form.module.css";

interface IProps {
  onClose: () => void;
};

const PopupForm: React.FC<IProps> = ({ onClose }) => {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["popup"]}> 
        <EmployeeAddUpdate onClose={onClose}></EmployeeAddUpdate> 
      </div>
    </div>
  );
}; 

export default PopupForm;
