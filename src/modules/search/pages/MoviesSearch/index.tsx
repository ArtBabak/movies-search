import React, { FC } from "react";
import styles from "./index.module.css";
import InputMovieName from "../../ui/InputMovieName";
import Autocomplete from "../../ui/Autocomplete";
import FilterDropdown from "../../ui/FilterDropdown";
import FilterButton from "../../../../shared/ui/buttons/FilterButton";
import { DropdownFilterStates } from "../../../../types/search";

const MoviesSearch: FC = () => {
  return (
    <div className={styles["movies-search__layout"]}>
      <InputMovieName />
      <FilterButton filter={DropdownFilterStates.rating} label="Rating" />
      <FilterButton filter={DropdownFilterStates.genre} label="Genre" />
      <Autocomplete />
      <FilterDropdown />
    </div>
  );
};

export default MoviesSearch;
