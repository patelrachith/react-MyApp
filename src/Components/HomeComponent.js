import React from 'react';

function HomeComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCountries(res.data.countries);
    });
  }, []);

  return <h3> I am home component </h3>;
}

export default HomeComponent;
