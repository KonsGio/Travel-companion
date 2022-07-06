<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Konsgio/Travel-companion">
    <img src="public/icon.png" alt="Logo" width="150" height="110">
  </a>

<h3 align="center">Travel Companion</h3>

  <p align="center">
    A travel companion that fetches real-time data from google
    <br/>
    Featuring<br/>
    *Restaurants around you<br/>
    *Hotels <br/>
    *Attraction<br/>
    You can find it at <a href="https://www.kgio.dev">kgio.dev <a/> or directly <a href="https://kgio-dev-map-app.netlify.app">here.</a> 
    <br />
    <a href="https://github.com/Konsgio/Travel-companion"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="kgio-dev-map-app.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/Konsgio/Travel-companion/issues">Report Bug</a>
    ·
    <a href="https://github.com/Konsgio/Travel-companion/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
     <a href="#installation">Installation</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![https://kgio-dev-map-app.netlify.app][product-screenshot]](https://kgio-dev-map-app.netlify.app)


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [![React][React.js]][React-url]
* [![Google-maps-api][Google-maps-api]][Google-maps-api-url]
* [![CSS][CSS]][CSS-url]
* [![RAPID-API][RAPID]][RAPID-url]
* [![Travel-Advisor.API][TRAVEL]][TRAVEL-url]
* [![Weather-map.API][WEATHER]][WEATHER-url]
  
### Check this out

* [![KGIO.DEV][SITE]][SITE-url]
* [![LinkedIn][linkedin-shield]][linkedin-url]
<p align="right">(<a href="#top">back to top</a>)</p>



### Installation

1. Log in to your google account at [Google map apis](https://developers.google.com/maps)
2. Create a new map application and retrieve your api key
3. Clone the repo
   ```sh
   git clone https://github.com/Konsgio/Travel-companion.git
   ```
4. Install NPM packages
   ```sh
   npm i
   ```
5. Enter your API key in `/public/index.html`
   ```js
   <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=key"></script>
   ```
6. Create a `.env` file in your project's main directory and paste the following
   ```js
   REACT_APP_GOOGLE_MAPS_API_KEY=
   REACT_APP_RAPIDAPI_TRAVEL_API_KEY=
   REACT_APP_RAPIDAPI_WEATHER_API_KEY=
   ```
7. To retrieve your `REACT_APP_RAPIDAPI_TRAVEL_API_KEY=` create an account and subscribe at [Rapid api - Travel advisor API](https://rapidapi.com/apidojo/api/travel-advisor). After that paste your key at the corresponting place in your `.env` file and at `/api/index.js`

8. To retrieve your `REACT_APP_RAPIDAPI_WEATHER_API_KEY` visit [Rapid api - Weather Map API](https://rapidapi.com/community/api/open-weather-map/) and repeat step 7

9. After following all steps correctly, to run you application type `npm start` in a terminal and hit enter

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Konstantinos Giovanitsas - <a href="mailto:konstantinos.giovanitsas@yahoo.com">Send me an email</a>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/konstantinos-giovanitsas-10b511150/
[product-screenshot]: public/map-app.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Google-maps-api]: https://img.shields.io/badge/Google-FCC624?style=for-the-badge&logo=google&logoColor=black
[Google-maps-api-url]: https://developers.google.com/maps/
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.css-com.com
[RAPID]: https://img.shields.io/badge/RAPID.API-239120?style=for-the-badge
[RAPID-url]: https://www.css-com.com
[TRAVEL]: https://img.shields.io/badge/Travel.advisor.API-2055D8?style=for-the-badge
[TRAVEL-url]: https://www.css-com.com
[WEATHER]: https://img.shields.io/badge/Weather.map.API-2055D8?style=for-the-badge
[WEATHER-url]: https://www.css-com.com
[SITE]: https://img.shields.io/badge/kgio.dev-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white
[SITE-url]: https://www.kgio.dev
