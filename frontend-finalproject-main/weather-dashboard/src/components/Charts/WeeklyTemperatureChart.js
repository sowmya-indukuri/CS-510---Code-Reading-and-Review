import React from "react";
import axios from "axios";
import moment from "moment";
import { Bar } from "react-chartjs-2";

// This component fetches daily forecast details from the
// api and render it in a form of bar graph for minimum and maximum temperature.

class WeeklyTemperatureChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
      this.componentDidMount();
    }
  }

  componentDidMount = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          this.props.lat +
          "&lon=" +
          this.props.lon +
          "&exclude=minutely&appid=61d5f8577e9dc21f1a56b94167a17bf8&units=imperial"
      )
      .then((response) => {
        var days = [];
        const min_temperature = [];
        const max_temperature = [];
        const daily = response.data["daily"];
        for (var i = 1; i < daily.length; i++) {
          days.push(moment.unix(daily[i].dt).format("MMM Do YY"));
          min_temperature.push(Number(daily[i].temp.min.toFixed(0)));
          max_temperature.push(Number(daily[i].temp.max.toFixed(0)));
        }
        // Setting up bar chart data here
        this.setState({
          Data: {
            height: 15,
            width: 25,
            labels: days,
            datasets: [
              {
                label: "Minimum Temperature",
                data: min_temperature,
                backgroundColor: "#0090ff",
                borderWidth: 2,
              },
              {
                label: "Maximum Temperature",
                data: max_temperature,
                backgroundColor: "#ff2600",
                borderWidth: 2,
              },
            ],
          },
        });
      });
  };

  render() {
    return (
      <div>
        <Bar
          data={this.state.Data}
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
export default WeeklyTemperatureChart;
