import { useDispatch } from "react-redux";
import classes from "../styles/DropDownMenu.module.css";
import { countryActions } from "@/store/redux-country";
import transformData from "@/lib/transformData";

export default function DropDownMenu() {
  const dispatch = useDispatch();

  const independentHandler = async (value) => {
    const response = await fetch("/api/countries/allData/");
    let data = await response.json();
    if (response.ok) {
      if (value !== "all") {
        data = data.data.filter((item) => item.independent === value);
      } else {
        data = data.data;
      }

      const transformedData = transformData(data)
      dispatch(countryActions.refreshCountryList(transformedData));
    } else {
      throw new Error('Something went wrong ...');
    }
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Dropdown</button>
      <div className={classes.dropdown_content}>
        <button onClick={() => independentHandler(true)}>Independent</button>
        <button onClick={() => independentHandler(false)}>Dependent</button>
        <button onClick={() => independentHandler("all")}>All countries</button>
      </div>
    </div>
  );
}
