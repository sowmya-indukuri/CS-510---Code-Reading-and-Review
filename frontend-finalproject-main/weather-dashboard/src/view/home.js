import React from "react";
import SearchCity from "../components/Search/citysearch";
import Footer from "../components/Footer/footer";


//This function is called by the route in mainpage which indeed contains components like searchcity and footer
function Homepage() {
  return (
    <div className="home">
      {/*This component functionality includes city search and reporting current
      weather,24 hours forecast,minimum and maximum temperature,UVIndex,Wind Speed,Humidity*/}
      <SearchCity />
      {/*This designs the footer section*/}
      <Footer />
    </div>
  
   
  );
}
export default Homepage;
