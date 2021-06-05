import React from "react";
import SearchCity from "../components/Search/citysearch";
import Footer from "../components/Footer/footer";


//This function is called by the route in mainpage which indeed contains components like searchcity and footer
function Homepage() {
  return (
    <div className="home">
      <SearchCity />
      <Footer />
    </div>
  
   
  );
}
export default Homepage;
