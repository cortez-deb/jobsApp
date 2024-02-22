import { useState, useEffect } from "react";
import axios from "axios";



const api_key = process.env.RAPIDAPI_KEY;
export const useFetch = (endpoint: string,query:any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': 'd07a1b598fmshb1fe5a7228b18c3p1a0290jsn47b413d21c92',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response?.data?.data);
    } catch (error:any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  }

  return { data, loading, error };

};

