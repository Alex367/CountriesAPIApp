import CountryItems from "./CountryItems";
import classes from "../styles/CountryList.module.css";

export default function CountryList(props) {

  return (
    <div>
      <ul className={classes.country_list}>
        {props.data?.map((item) => (
          <CountryItems
            key={item.id}
            id={item.id}
            code={item.code}
            name={item.name}
            flag={item.flag}
          />
        ))}
      </ul>
    </div>
  );
}
