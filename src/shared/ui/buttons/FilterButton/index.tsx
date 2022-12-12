import React, { FC } from "react";
import {
  DropdownFilterStates,
  SearchActionTypes,
} from "../../../../types/search";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets/icons/arrows";
import classNames from "classnames";
import styles from "../../../../modules/search/pages/MoviesSearch/index.module.css";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

interface FilterButtonProps {
  label: string;
  filter: DropdownFilterStates;
}

const FilterButton: FC<FilterButtonProps> = ({ filter, label }) => {
  const dispatch = useDispatch();
  const classes: string = classNames(styles["primary-frame"], styles.filter);
  const { dropdownFilterState } = useTypedSelector(
    (state) => state.searchReducer
  );

  const clickHandler = (e: React.MouseEvent) => {
    if (dropdownFilterState !== filter)
      dispatch({
        type: SearchActionTypes.OPEN_FILTER_DROPDOWN,
        payload: filter,
      });
    if (dropdownFilterState === filter)
      dispatch({
        type: SearchActionTypes.CLOSE_FILTER_DROPDOWN,
      });
  };

  return (
    <div onClick={clickHandler} className={classes}>
      <p>{label}</p>{" "}
      {dropdownFilterState === filter ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </div>
  );
};

export default FilterButton;
