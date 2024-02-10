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
          type: 'pie',
          name: 'Cleveland, Ohio',
          domain: {
            row: 1,
            column: 2
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
          values: allValues[1],
          labels: allLabels[1],
          type: 'pie',
          name: 'Eugene, Oregon',
          domain: {
            row: 0,
            column: 1
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
          values: allValues[2],
          labels: allLabels[2],
          type: 'pie',
          name: 'Las Vega, Nevada',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
          values: allValues[3],
          labels: allLabels[3],
          type: 'pie',
          name: 'New York, New York',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
          values: allValues[4],
          labels: allLabels[4],
          type: 'pie',
          name: 'Honolulu, Hawai',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
          values: allValues[5],
          labels: allLabels[5],
          type: 'pie',
          name: 'Miami, Florida',
          domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'none',
          textinfo: 'none'
        },{
            values: allValues[6],
            labels: allLabels[6],
            type: 'pie',
            name: 'Istanbul, Turkey',
            domain: {
              row: 0,
              column: 0
            },
            hoverinfo: 'none',
            textinfo: 'none'
          },{
            values: allValues[7],
            labels: allLabels[7],
            type: 'pie',
            name: 'Brisbane, Australia',
            domain: {
              row: 0,
              column: 0
            },
            hoverinfo: 'none',
            textinfo: 'none'
          },{
            values: allValues[8],
            labels: allLabels[8],
            type: 'pie',
            name: 'Sydney, Australia',
            domain: {
            row: 0,
            column: 0
          },
          hoverinfo: 'label+percent+name',
          textinfo: 'none'
          },{
            values: allValues[9],
            labels: allLabels[9],
            type: 'pie',
            name: 'Madrid, Spain',
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

