import axios from "axios";

// url for api call at rapid api
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

const options = {
 
  params: {
    bl_latitude: '11.847676',
    tr_longitude: '12.838442',
    bl_longitude:'109.095887',
    tr_longitude:'109.149359'
  },
  headers: {
    'X-RapidAPI-Key': 'e244614d31msh20c4eed92f7718bp119f4ajsn8fa3b523553d',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
        const {data:{data}} = await axios.get(URL, options);

        return data;
    } catch (error){
        console.log(error)
    }
}