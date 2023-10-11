import Link from "next/link";
import SlugList from "@/components/SlugList";

export default function CountryDescription(props) {
  if (!props.result) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Link href={"/"}>Back</Link>
      <SlugList data={props.result} />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const countryName = params.slug.split(" ")[0];

  const url = `https://rest-countries10.p.rapidapi.com/country/${countryName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  let result;

  try {
    const response = await fetch(url, options);
    result = await response.json();
  } catch (error) {
    console.error(error);
  }

  if (result.length > 0) {
    result = result.filter(
      (item) => item.name.shortnamelowercase === params.slug
    );
  }

  return {
    props: { result },
    revalidate: 30,
  };
}
