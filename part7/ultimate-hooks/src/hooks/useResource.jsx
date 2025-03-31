import { useEffect, useState } from "react";
import axios from "axios";

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  // useEffect to fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(baseUrl);
        setResources(res.data);
      } catch {
        console.log("error");
        setResources([]);
      }
    }
    fetchData();
  }, [baseUrl]);

  // Create a new resource and update the state
  const create = async (resource) => {
    const res = await axios.post(baseUrl, resource);
    setResources([...resources, res.data]);
  };

  const service = {
    create,
  };

  return [resources, service];
};

export default useResource;
