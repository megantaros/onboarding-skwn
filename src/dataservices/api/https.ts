import axios from "axios";

const BASE_URL = `https://travel-advisor.p.rapidapi.com/restaurants/`;
const API_KEY = `140ae37239mshf3d902456c2c427p1cd937jsn8b7846af21e5`;

const https = () => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
    params: {
        location_id: '293919',
        restaurant_tagcategory: '10591',
        restaurant_tagcategory_standalone: '10591',
        currency: 'USD',
        lunit: 'km',
        limit: '30',
        open_now: 'false',
        lang: 'en_US'
      },
  });
  return client;
};

export default https;
