import React from "react";
import axios from "axios";
import moment from "moment";
import { Bar } from "react-chartjs-2";

//This component has code to fetch daily forecast details from 
//api and render it to bar graph for minimum and maximum temperature.

class BarChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       Data:{}
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
      axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=61d5f8577e9dc21f1a56b94167a17bf8&units=imperial")
      .then((response) => {
        var days=[];
        const mintemp=[];
        const maxtemp= [];
       // console.log("response",response);
        const daily= response.data["daily"];
        // console.log("barchart",daily);
        for(var i=1;i<daily.length;i++){
            days.push(moment.unix(daily[i].dt).format('MMM Do YY'));
            mintemp.push(Number(daily[i].temp.min.toFixed(0)));
            maxtemp.push(Number(daily[i].temp.max.toFixed(0)));
          }
          // console.log(mintemp)
        this.setState({
          Data:{
            height:15,
            width:25,
            labels:days,
            datasets:[
              {
                label:"Minimum Temperature",
                data:mintemp,
                backgroundColor: "#0090ff",
                //borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
  
            },
            {
              label:"Maximum Temperature",
              data:maxtemp,
              backgroundColor: "#ff2600",
              //borderColor: "rgba(255,99,132,1)",
              borderWidth: 2,
  
          }
        ] 
        },
        })
        })
  
    }
    render() {
      return(
        <div>
             <Bar
              data={this.state.Data}
              // width={25}
              // height={15}
              options={{
                responsive: true,
  
                scales: {
                  xAxes: [
                    {
                      display: true,
                      gridLines: {
                        offsetGridLines: true,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: true,
                    },
                  ],
                },
              }}
            />
  
        </div>
      );
  
  
    }
  }
  export default BarChart;