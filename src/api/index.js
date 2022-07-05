import axios from "axios";

// url for api call at rapid api
export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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

export const getWeatherData = async (lat,lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',{
      params: {
        lon: lng,
        lat: lat,
      },
      headers: {
        'X-RapidAPI-Key': 'e244614d31msh20c4eed92f7718bp119f4ajsn8fa3b523553d',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    );
    return data;
  }catch(error){
    console.log(error)
  }
}