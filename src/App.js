import React, {useState, useEffect} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData} from './api';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getWeatherData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [childClicked,setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [filteredPlaces, setfilteredPlaces] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    // use user location coordinates for default 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat:latitude,lng:longitude});
        });
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating);
        setfilteredPlaces(filteredPlaces);
    },[rating])

    useEffect(() => {
        if(bounds.sw && bounds.ne){

        getWeatherData(coordinates.lat,coordinates.lng)
            .then((data) => setWeatherData(data))
        setIsLoading(true);
        getPlacesData(type,bounds.sw, bounds.ne)
        .then((data) => {
            setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0));
            setfilteredPlaces([])
            setIsLoading(false);
        })
    }
        // to make bound and coordinates run every time the map changes >>
    },[type,bounds]);
    
    return(
        <>
            <CssBaseline />
            <Header setCoordinates ={setCoordinates}/>
            {/* object in double {{}} */}
            <Grid container spacing={3} style={{width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                    places={filteredPlaces.length? filteredPlaces : places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App