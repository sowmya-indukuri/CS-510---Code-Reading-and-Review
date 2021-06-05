import React from "react";
import axios from "axios";
import {Electricity} from 'react-environment-chart';
import "./WindChart.css";

//This component has code to fetch windspeed data from 
//api and render it to react environment chart called electricity.

class Windchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         wind:undefined,
        height:undefined,
        //  option:undefined
        }
        };
        componentDidUpdate(prevProps) {
            if (
              prevProps.lat !== this.props.lat ||
              prevProps.lon !== this.props.lon
            ) {
              this.componentDidMount();
            }
          }
          componentDidMount = () =>{   
            axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=771164bf0a4b1c7e73d4a81d4f3b9485&units=imperial")
            .then((response) => {
                const win = response.data.current.wind_speed;
                //console.log(win);
                this.setState({
                    wind:win,  
                    height:180                
                
                })
            });
            }
          render(){
              return(
                  <div>
                      <p className="ws"><b>Wind Speed</b></p>
                      <Electricity 
                      value={this.state.wind}
                      height={this.state.height}
                      />
                  </div>
              );
          }
        }
export default Windchart;