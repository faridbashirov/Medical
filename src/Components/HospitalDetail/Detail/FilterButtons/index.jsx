import React, {useState} from 'react';
import "./FilterButtons.css"
import allFilters from "../../../../assets/Svg/all-filters.svg"
import AllFiltersModal from "./AllFiltersModal.jsx";

const FilterButtons = ({country}) => {
  const [openFilters, setOpenFilters] = useState(false)
  const onOpenFilter = () =>{
    setOpenFilters(true)
  }
  const onCloseFilter = () =>{
    setOpenFilters(false)
  }
  return (
    <section className={"filters"}>
      <button className={"filters-btn"} onClick={onOpenFilter}>
        <img src={allFilters} alt=""/>
        <span>Все фильтры</span>
      </button>
      <AllFiltersModal country={country} openFilters={openFilters} onCloseFilter={onCloseFilter} />
    </section>
  );
};

export default FilterButtons;
