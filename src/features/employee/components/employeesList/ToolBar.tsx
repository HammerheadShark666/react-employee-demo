import React, { useState } from 'react';
import { addNewEmployee } from '../../employeeSlice';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";
import styles from "../../css/Employee-list-toolbar.module.css";
import { Search } from 'lucide-react';

type Props = {
  onSearch: (term: string) => void;
};

const ToolBar = ({ onSearch }: Props) => {

  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className={styles["employee-list-header"]}>
      <div className={styles["toolbar"]}>
        <div className={styles["search-bar"]}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border px-2 py-1 mr-2"
            placeholder="Search..."
          />
          <button onClick={handleSearch}><Search /></button>
        </div>
        <div className={styles["toolbar-buttons"]}>
          <button type="button" onClick={() => dispatch(addNewEmployee())}>Add New Employee</button>
          <button type="button">Import Employees</button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;