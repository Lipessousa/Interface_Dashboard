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

const CoinsChart = () => {

  const [chart, setChart] = useState('')

  const moeda = ['Dólar', 'Euro', 'Libra Est', 'Yuan', 'Iene']

  const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,JPY-BRL"

   useEffect(() => {
      const fetchMoeda = async () => {
        await  fetch(url)
        .then(res => res.json())
        .then(data => {

        const cotacao = []

        cotacao.push(data.USDBRL.bid)
        cotacao.push(data.EURBRL.bid)
        cotacao.push(data.GBPBRL.bid)
        cotacao.push(data.CNYBRL.bid)
        cotacao.push(data.JPYBRL.bid)

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

export default CoinsChart