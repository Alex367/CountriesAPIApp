import Image from "next/image";
import classes from "../styles/CountryItems.module.css";
import { useRouter } from "next/navigation";

export default function CountryItems(props) {
  const { push } = useRouter();

  const itemsHandler = () => {
    push(`/country/${props.name}`);
  };

  return (
    <li className={classes.country_items} onClick={itemsHandler}>
      <div>Code: {props.code}</div>
      <div>Country: {props.name}</div>
      <Image
        src={props.flag}
        alt={props.name}
        width={250}
        height={160}
        priority={true}
      />
    </li>
  );
}