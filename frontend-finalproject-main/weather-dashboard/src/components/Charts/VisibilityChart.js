import React from "react";
import axios from "axios";
import {HorizontalBar} from 'react-chartjs-2';

// This component has code to fetch visibilty details from 
// api and render it to horizontal bar graph.

class VisibilityChart extends React.Component {
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
      // Fetching data from API
      axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.lat+"&lon="+this.props.lon+"&exclude=minutely&appid=771164bf0a4b1c7e73d4a81d4f3b9485&units=imperial")
      .then((response) => {
        const vis=[];
             var temp = (response.data.current.visibility) * 0.000621371;
             vis.push(temp);
            //console.log(vis)
        // Setting up the state for the graph
        this.setState({
          Data:{
            labels: ['Visibilty'],
            datasets: [
              {
                label: 'Visibilty',
                backgroundColor: '#fac146',
                borderColor: '#fac146',
                borderWidth: 0,
                hoverBackgroundColor: '#fac146',
                hoverBorderColor: '#fac146',
                data: vis

              }
            ]
            
        },
        })
      })
  
    }
    render() {
      return(
        <div>
             <HorizontalBar
              data={this.state.Data}
              height={30}
            />
        </div>
      );
  
  
    }
  }
  export default VisibilityChart;