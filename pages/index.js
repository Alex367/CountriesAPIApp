import CountryList from "@/components/CountryList";
import DropDownMenu from "@/components/DropDownMenu";
import SearchField from "@/components/SearchField";
import classes from "../styles/index.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryActions } from "@/store/redux-country";
import transformData from "@/lib/transformData";

export default function Home() {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryStore.countryList);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/countries/allData/");
      let data = await response.json();
      if (response.ok) {

        const transformedData = transformData(data.data)
        dispatch(countryActions.refreshCountryList(transformedData));
      } else {
        throw new Error("Something went wrong ...");
      }

      setIsFirstRun(false);
    };

    getData();
  }, []);

  return (
    <div className="container">
      {isFirstRun ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={classes.index_navigation}>
            <SearchField />
            <DropDownMenu />
          </div>
          <CountryList data={countryList} />
        </>
      )}
    </div>
  );
}
