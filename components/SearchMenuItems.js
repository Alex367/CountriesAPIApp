import { countryActions } from "@/store/redux-country";
import { useDispatch } from "react-redux";

export default function SearchMenuItems(props) {
  const dispatch = useDispatch();
  const searchMenuItemsHandler = () => {
    dispatch(countryActions.refreshCountryList([props]));
  };

  return <li onMouseDown={searchMenuItemsHandler}>{props.name}</li>;
}
