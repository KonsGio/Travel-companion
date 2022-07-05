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
            'X-RapidAPI-Key': 'c82f5a2028msh83212e690fa2c85p187e85jsn5f94673a0f46',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch (error){
        console.log(error)
    }
}