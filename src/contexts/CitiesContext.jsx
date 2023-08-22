import { createContext, useState, useEffect, useContext } from "react";
import Axios from "axios";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:4000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const { data } = await Axios.get(`${BASE_URL}/cities`);
        setCities(data);
      } catch (error) {
        console.log("There was an error loading data : ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  // fetching current cities

  async function getCity(id) {
    try {
      setIsLoading(true);
      const { data } = await Axios.get(`${BASE_URL}/cities/${id}`);
      setCurrentCity(data);
    } catch (error) {
      console.log("There was an error loading data : ", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

// useCities
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("You put context in wrong place...");
  return context;
}
export { CitiesProvider, useCities };
