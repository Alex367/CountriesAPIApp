import SearchMenuItems from "./SearchMenuItems";
import classes from "../styles/SearchMenu.module.css";

export default function SearchMenu(props) {
  return (
    <ul className={classes.search_menu}>
      {props.data.length > 0 ? (
        props.data.map((item) => (
          <SearchMenuItems
            key={item.id}
            id={item.id}
            code={item.code}
            name={item.name}
            flag={item.flag}
          />
        ))
      ) : (
        <li>No items found...</li>
      )}
    </ul>
  );
}
