import Image from "next/image";
import classes from '../styles/SlugItems.module.css';

export default function SlugItems(props) {
  return (
    <li className={classes.slug_items}>
      <Image
        src={props.flag}
        alt={props.name}
        width={250}
        height={160}
        priority={true}
      />
      <div className={classes.slug_items_description}>
        <div>Code: {props.code}</div>
        <div>Country: {props.name}</div>
        <div>FullName: {props.fullName}</div>
      </div>
    </li>
  );
}
