import React, {useState, useEffect} from "react";
import axios from "axios";

function SearchBox() {
  const [countries, setCountries] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCapital, setFilteredCapital] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then((res) => {
  //       setCountries(res.data);
        
        
  //       // console.log(capital)
        
  //       setLoading(false);
  //       console.log(countries);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(async() => {
    await axios.get("http://localhost:5000/api/all-emp").then((res) => {
      console.log(res);
      setCountries(res.data);
      console.log(res.data)
    }).catch(() => {
      setLoading(true)
    });
  },[]);


  // useEffect(() => {
  //   setFilteredCountries(
  //     countries.filter((country) =>
  //       country.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, countries]);

  // useEffect(() => {
  //   setFilteredCapital(
  //     capital.filter((capital) =>
  //       country.capital.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, capital]);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Employee"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
      <h1>HI</h1>
    </div>
  );
}

const CountryDetail = (props) => {
    const { name, flag } = props;
  
    return (
      <>
        <p>
          <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
        </p>
        <p>{name}</p>
      </>
    );
  };

export default SearchBox;
