import SlugItems from "./SlugItems";

export default function SlugList(props) {
  return (
    <ul>
      {props.data.map((item, index) => (
        <SlugItems
          key={index}
          code={item.code.alpha3code}
          name={item.name.shortname}
          fullName={item.name.fullname}
          flag={item.flag.officialflag.svg}
        />
      ))}
    </ul>
  );
}
