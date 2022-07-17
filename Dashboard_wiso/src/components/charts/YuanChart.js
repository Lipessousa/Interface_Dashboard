import React, {useState, useEffect} from "react";
import './style.css';
import {Chart as ChartJS, LineElement, PointElement,LinearScale, CategoryScale, Tooltip } from 'chart.js';
import { Line } from "react-chartjs-2";
 

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  Tooltip
)

const YuanChart = () => {

  const [chart, setChart] = useState('')

  const moeda = ['1 dia atrás', '2 dias atrás', '3 dias atrás', '4 dias atrás', '5 dias atrás']

  const url = "https://economia.awesomeapi.com.br/json/daily/CNY-BRL/15"

   useEffect(() => {
      const fetchMoeda = async () => {
        await  fetch(url)
        .then(res => res.json())
        .then(data => {

        const cotacao = []

        cotacao.push(data[1].bid)
        cotacao.push(data[2].bid)
        cotacao.push(data[3].bid)
        cotacao.push(data[4].bid)
        cotacao.push(data[5].bid)

        setChart(cotacao)

          
         
        })
        .catch( err => {
          console.log(err)
        })
      }
      fetchMoeda()
   }, [url])

    var data = {
      labels:  moeda,
      datasets: [{ 
          data: chart,
          backgroundColor: [
            'white'
          ],
          borderColor: [
            'white',
          ],
          borderWidth: 2,
          pointHoverBackgroundColor: [
            '#070714'
          ],
          pointBorderWidth: 12,
      }]
  }

   var options = {
      scales: {
          y: {
              beginAtZero: true
          },
      },
    }
   
 
  return (
      <div className="grafico">
        <Line 
        data={data}
        options={options}
        />
      </div>
  );
};

export default YuanChart