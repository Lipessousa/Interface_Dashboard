export default function dolarValor() {

    const url = 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/15'
        
    fetch(url).then(res => res.json()
    ).then(data => {

        document.getElementById('coinId').innerHTML = data[0].name

        document.getElementById('valorToday').innerHTML = `R$${data[0].bid}`
        
        document.getElementById('dia1').innerHTML = data[1].bid

        document.getElementById('dia2').innerHTML = data[2].bid

        document.getElementById('dia3').innerHTML = data[3].bid

        document.getElementById('dia4').innerHTML = data[4].bid

        document.getElementById('dia5').innerHTML = data[5].bid

        document.getElementById('pctChange').innerHTML = `${data[0].pctChange}%`

        if(data[0].pctChange > 0){
            document.getElementById('pctChange').style.color = 'rgb(19, 252, 3)'
        }else if(data[0].pctChange < 0){
            document.getElementById('pctChange').style.color = 'rgb(255, 5, 26)'
        }

    })
}



