// https://plotly.com/javascript/reference/index/
import React from 'react';
import Plot from 'react-plotly.js';


function CityBrtGrowth({title, values, labels}) {
      var allLabels = [

        ['Cleveland, Ohio','Eugene, Oregon', 'LasVegas, Nevada', 'New York, New York', 'Honolulu, Hawai'
        , 'Miami, Florida', 'Istanbul, Turkey', 'Bisbane, Australia', 'Sydney, Australia', 'Madrid, Spain' ],
      ];
      var allValues = [
        // totals
      [60, 74, 25, 7, 59, 
      50, 150, 56, 56, 85],
      ];

    return (

      <Plot
        data = {[{
          values: allValues[0],
          labels: allLabels[0],
          type: 'bar',
          name: 'Cleveland, Ohio',
          domain: {
            row: 1,
            column: 2
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },{
          values: allValues[1],
          labels: allLabels[1],
          type: 'bar',
          name: 'Car Injuries and Deaths',
          domain: {
            row: 0,
            column: 1
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },{
          values: allValues[2],
          labels: allLabels[2],
          type: 'bar',
          name: 'Pedestrians',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },{
          values: allValues[3],
          labels: allLabels[3],
          type: 'bar',
          name: 'Pedestrians',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
        },
        ]}
        layout = {{
          height: 400,
          width: 500,
          grid: {rows: 2, columns: 2},
          title: "City Publc Transit Growth due to BRT"
        }}
      />
    );
  }
export default CityBrtGrowth;

