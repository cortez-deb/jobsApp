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
      'X-RapidAPI-Key': '6db7fc6791msh2fe9ee3b76c4c0ap1608b7jsne7526197ceda',
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

