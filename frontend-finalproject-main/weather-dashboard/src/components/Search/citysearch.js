//JS file for city search component
//when city is entered it's routed to this js

import React, { Component } from "react";
import axios from "axios";

// importing required css and js files
import CurrentWeather from "../Currentweather/current";
import "./citysearchstyle.css";

//importing the charts
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import UVChart from "../Charts/UVChart";
import WindChart from "../Charts/WindChart";
import HumidityChart from "../Charts/HumidityChart";
import VisibilityChart from "../Charts/VisibilityChart";

//For each city searched the related weather details and charts are displayed in this component
class SearchCity extends Component {
  state = {
    name: "",
    search: "",
    latitude: undefined,
    longitude : undefined,
  };

  //after valid city is given 
  //City's latitude and longitute are set using api
  componentDidMount() {
    let currentComponent = this;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" +lon +"&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8")
       .then((response) => {
          const name = response.data.name;
          const lon = response.data.coord.lon;
          const lat = response.data.coord.lat;
          currentComponent.setState({
            latitude: lat,
            longitude: lon,
            name: name,
          });
        });
      });
    }
  }
  
  //validates city name
  //checks if appropiate city name is given
  //else prompts user to enter current city name
  OnClickCitySearch = (event) => {
    event.preventDefault();
    var inputcity=this.state.search;
    if(inputcity!==""){
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.search + "&units=imperial&appid=771164bf0a4b1c7e73d4a81d4f3b9485")
    .then((response) => {
      if (response.status === 400 || response.status === 500 || response.status === 404) {
        console.log("please enter valid city");
      }
      const name = response.data.name;
      const lon = response.data.coord.lon;
      const lat = response.data.coord.lat;
      this.setState({
        name: name,
        latitude: lat,
        longitude: lon,
      });
    })
    .catch(err =>{
      if(err.response){
        alert("Please Give Valid City!");
      }
      else if (err.request) {
        alert("Please Check Internet Connection")
      } 
      else {
        alert("Please Give Valid City")
      }
    })
  }
  else{
    alert("Please Enter City!");
  }
  };
  
 
  //begins city search
  onClickCityChange = (event) => {
    const citySearch = event.target.value;
    this.setState({
      search: citySearch,
    });
  };

  //HTML view of the city search page
  render() {
    const { name } = this.state;
    if(name){
    return (
      <div className="container">
        <div className="row">
          <div className=" ml-auto col-md-6 col-lg-6 col-sm-12">
            {/*Input city search div*/}
            <div className=" input-group inputfield">
              <input
                className="inputSearch form-control"
                type="text"
                name="city"
                id="city"
                placeholder="Search by City Name"
                value={this.value}
                onChange={this.onClickCityChange}
              />&nbsp;
                <button
                  type="submit"
                  className="btnSearch btn "
                  onClick={this.OnClickCitySearch}>
                  Search
                </button>
            </div>
          </div>
        </div>
          <br /><br />
          <div className="row">
            <div className="col-3"></div>
          {/*Weather div*/}
          <div className="col-md-4 col-lg-4 col-sm-12">
              <CurrentWeather
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>
          </div>
          <div className="row lw mt-4">
          {/*Chart -1 24 hours*/}
          <div className="col-md-7 col-lg-6 col-sm-12">
                <div className="cardline">
                <div className="card-body">
              <LineChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              /><br></br>
              <p className="graphnames">X-axis: Time , Y-axis:Temperature in °F</p>
          </div>
          </div>
          </div>
          {/*Chart -2 Last week Temperature*/}
          <div className="col-md-7 col-lg-6 col-sm-12">
                <div className="cardbar">
                <div className="card-body">
              <BarChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              /><br></br>
              <p className="graphnames">X-axis: Days , Y-axis:Temperature in °F</p>
          </div>          
          </div>
          </div>
    </div>
        <div className="row mt-4">
          {/*Chart -3 UV Index*/}
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="carduv">
                <div className="card-body">
              <UVChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>          
          </div>
          </div>
          {/*Chart -4 Wind Speed*/}
          <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="cardwind">
                <div className="card-body">
              <div className="d-flex justify-content-center">
              <WindChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
          </div>  
          </div>        
          </div>
          </div>
          {/*Chart -5 Humidity*/}
          <div className="col-md-4 col-lg-4 col-sm-12">
        <div className="cardhum">
        <div className="card-body">
        <p className="humi"><b>Humidity</b></p>
        <div className="d-flex justify-content-center">
        <div className="humdiv">
          <HumidityChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
              </div>
              </div>
              </div>
              </div>
        </div>
        </div>
        <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-md-4 col-lg-4 col-sm-12">
        <div className="cardvis">
        {/*Chart -6 Visibility*/}
        <div className="card-body">
          <VisibilityChart
                lat ={this.state.latitude}
                lon ={this.state.longitude}
              />
        </div>
        </div>
        </div>
        </div>
      </div>
    );
    }
    else{
      return(
      <div className="container">
      <div className="row">
      <div className=" ml-auto col-md-6 col-lg-6 col-sm-12">
        <div className=" input-group inputfield">
          <input
            className="inputSearch form-control"
            type="text"
            name="city"
            id="city"
            placeholder="Search by City Name"
            value={this.value}
            onChange={this.onClickCityChange}
          />&nbsp;
            <button
              type="submit"
              className="btnSearch btn "
              onClick={this.OnClickCitySearch}>
              Search
            </button>
        </div>
      </div>
      </div>
      </div>
      );
    }
  }
}

export default SearchCity;