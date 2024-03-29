import {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const key = "9F183B25-853A-41B4-A3F2-D2120B953467";
  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = ["BTC", "ETH", "XRP"];
      const promises = assets.map((asset) =>
        axios.get(
          `https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=${key}`
        )
      );
      const responses = await Promise.all(promises);
      const exchangeRates = responses.reduce((acc, response, index) => {
        acc[assets[index]] = response.data.rate;
        console.log(portfolio);
        return acc;
      }, {});
      setPortfolio(exchangeRates);
    }
    fetchExchangeRates();
  });

  return (
    <div className="App">
      <h1>Coin Appp</h1>
    </div>
  );
}

export default App;
