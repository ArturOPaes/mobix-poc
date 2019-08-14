import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { Container } from './styles';

export default function BarChart({ x, y, color, handleClick }) {
  const year = useSelector(state => state.album.selectedYear);
  const rangeYears = useSelector(state => state.album.rangeYears);

  const data = {
    labels: x,
    datasets: [
      {
        label: '',
        backgroundColor: color,
        borderWidth: 1,
        data: y,
      },
    ],
  };
  /*
  let array = [0,0,0,0,15];

  const data2 = {
    datasets: [
      {
        yAxisID: 'left-axis',
        type: 'line',
        fill: true,
        pointRadius: 0,
        borderWidth: 1,
        borderColor: 'rgba(1, 1, 1, 0)',
        steppedLine: true,
        backgroundColor: 'rgba(1, 1, 1, 0.1)',
      },
    ],
  };

  const dataSets = [data, data2];
  */
  return (
    <Container>
      <Bar
        data={data}
        width={600}
        height={400}
        getElementAtEvent={async element => await handleClick(element)}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </Container>
  );
}

BarChart.propTypes = {
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
