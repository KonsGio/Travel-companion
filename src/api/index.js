import axios from "axios";

// url for api call at rapid api
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {data:{data}} = await axios.get(URL, {
          params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Key': 'e244614d31msh20c4eed92f7718bp119f4ajsn8fa3b523553d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch (error){
        console.log(error)
    }
}