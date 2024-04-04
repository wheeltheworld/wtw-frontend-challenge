import { useEffect, useState } from "react";
import { getHotelsData } from "../api/hotels";

export const useFetchHotelsData = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const hotelsData = await getHotelsData();
        setHotels(hotelsData);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error getting data for hotels: ${error}`);
        setIsError(error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { hotels, isLoading, isError };
};
