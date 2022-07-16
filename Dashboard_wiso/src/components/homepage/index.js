import React from "react";
import './style.css';
import dolarValor from "../API/dolarValor";
import euroValor from "../API/euroValor";
import libraValor from "../API/libraValor";
import yuanValor from "../API/yuanValor";
import ieneValor from "../API/ieneValor"
import CoinsChart from "../grafic/coinsGrafic";


export default function HomeMain() {

    dolarValor()

    return (
        <div className="main" id="main">
            <div className="left-col">

                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                    <label className="btn btn-outline-dark" for="btnradio1" onClick={dolarValor} id='btCoin'>Dólar</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2"  autocomplete="off"/>
                    <label className="btn btn-outline-dark" for="btnradio2" onClick={euroValor} id='btCoin'>Euro</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                    <label className="btn btn-outline-dark" for="btnradio3" onClick={libraValor} id='btCoin'>Libra</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                    <label className="btn btn-outline-dark" for="btnradio4" onClick={ieneValor} id='btCoin'>Iene</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off"/>
                    <label className="btn btn-outline-dark" for="btnradio5" onClick={yuanValor} id='btCoin'>Yuan</label>
                </div>

                <table className="table table-dark table-striped table-coins" id="listCoin">
                    <thead>
                        <tr>
                            <th scope="col" id="coinId"> Data </th>
                            <th scope="col">R$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 dia atrás</td>
                            <td id="dia1"></td>
                        </tr>
                        <tr>
                            <td>2 dias atrás</td>
                            <td id="dia2"></td>
                        </tr>
                        <tr>
                            <td>3 dias atrás</td>
                            <td id="dia3"></td>
                        </tr>
                        <tr>
                            <td>4 dias atrás</td>
                            <td id="dia4"> </td>
                        </tr>
                        <tr>
                            <td>5 dias atrás</td>
                            <td id="dia5"> </td>
                        </tr>
                    </tbody>
                </table>

                <div className="card text-white bg-dark mb-3" id="cardCoin">
                    <h4 className="card-header">Valor de Hoje</h4>
                    <div className="card-body">
                        <h2 className="card-title" id="valorToday"></h2>
                        <h5 className="card-text" id="pctChange"></h5>
                    </div>
                </div>

            </div>

            <div className="right-col">
                <CoinsChart/>
            </div>
        </div>
    );
}