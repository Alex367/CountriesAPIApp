export default async function handler(req, res) {
  if (req.method === "GET") {
    const url = "https://rest-countries10.p.rapidapi.com/countries";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      res.status(200).json({ message: "OK", data: result });
    } catch (error) {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
}
