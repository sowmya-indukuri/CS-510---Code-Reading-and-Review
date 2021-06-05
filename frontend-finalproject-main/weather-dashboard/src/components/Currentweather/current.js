import React ,{Component} from 'react';
import axios from "axios";
import "./currentstyle.css";

//This component has all the current weather components where
// it displays current temperature, description of weather.
class CurrentWeather extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          name: undefined,
          temperature: undefined,
          description: undefined,
          icon: "",
        };
      }

      componentDidUpdate(prevProps) {
        if (
          prevProps.lat !== this.props.lat ||
          prevProps.lon !== this.props.lon
        ) {
          this.componentDidMount();
        }
      }
      
      componentDidMount = () => {
        
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+this.props.lat+"&lon="+this.props.lon+"&units=imperial&appid=61d5f8577e9dc21f1a56b94167a17bf8")
          .then((response) => {
            //console.log(response);
            const des = response.data.weather[0].description;
            const temp = response.data.main.temp;
            const name = response.data.name;
            const icon = response.data.weather[0].icon;
            this.setState({
                name: name,
                temperature: temp,
                description: des,
                icon: icon,
            })
        });
      };
    

     render() {
        return (
          <div>
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="card">
                    <div className="card-body">
                    <div className="d-flex justify-content-between">
                          <div className="locname"><b>{this.state.name}</b></div>
                            <div className="loctemp"><b>{this.state.temperature}°F</b> 
                            <img className="weather-icon" src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weather icon"/>
                            </div>
                      </div>
                      <div className="float-right">You will experience {this.state.description}</div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        );
    }
}
export default CurrentWeather;