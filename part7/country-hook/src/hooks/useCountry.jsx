import { useState, useEffect } from "react";
import { getCountry } from "../services/countryService";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      if (name && name.length > 0) {
        try {
          const res = await getCountry(name);
          if (res.status === 200) {
            setCountry({ ...res.data, found: true });
          }
        } catch (error) {
          setCountry({ found: false });
        }
      }
    }

    fetchCountry();
  }, [name]);

  return country;
};
