import { useState } from "react";
import SearchMenu from "./SearchMenu";
import classes from "../styles/SearchField.module.css";
import { countryActions } from "@/store/redux-country";
import { useDispatch } from "react-redux";
import transformData from "@/lib/transformData";

export default function SearchField() {
  const [isValue, setIsValue] = useState("");
  const [isSearchValue, setIsSearchValue] = useState("");
  const [isActiveBar, setIsActiveBar] = useState(false);
  const dispatch = useDispatch();

  const searchHandler = async (event) => {
    let searchString = event.target.value;
    setIsValue(searchString);

    // console.log(searchString)

    if (searchString.length > 3) {
      const response = await fetch(`/api/${searchString}/`);
      const data = await response.json();

      if (response.ok) {
        setIsSearchValue(data.data);
        // console.log(data);
      } else {
        throw new Error({ message: response });
      }
    }
  };
  // console.log(isValue)

  const searchFocusHandler = () => {
    setIsActiveBar(true);
  };

  const searchBlurHandler = () => {
    setIsActiveBar(false);
  };

  const resetHandler = async () => {
    setIsValue("");

    const response = await fetch("/api/countries/allData/");
    let data = await response.json();
    if (response.ok) {
      const transformedData = transformData(data.data);
      dispatch(countryActions.refreshCountryList(transformedData));
    } else {
      throw new Error("Something went wrong ...");
    }
  };

  return (
    <div className={classes.search_bar}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search"
        onChange={searchHandler}
        value={isValue}
        onFocus={searchFocusHandler}
        onBlur={searchBlurHandler}
      />
      {isValue.length > 0 && <input type="reset" onClick={resetHandler} />}
      {isSearchValue && isActiveBar && isValue.length > 0 && (
        <SearchMenu data={isSearchValue} />
      )}
    </div>
  );
}
