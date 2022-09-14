import './HomePage.css';
import CurrencyInput from './../Components/CurrencyInput/CurrencyInput';
import { useState, useEffect } from "react";
import axios from "axios";


function HomePage() {

   const [amount1, setAmount1] = useState(1);
   const [amount2, setAmount2] = useState(1);
   const [currency1, setCurrency1] = useState('RUB');
   const [currency2, setCurrency2] = useState('EUR');
   const [rates, setRates] = useState([]);
 
   useEffect(() => {
     axios.get('http://data.fixer.io/api/latest?access_key=106ab470d06b4c14d00c10f864ef62b6')
       .then(response => {
          setRates(response.data.rates);
         console.log(response.data.rates)
       })
   }, []);
 
   useEffect(() => {
     if (!!rates) {
       function init() {
         handleAmount1Change(1);
       }
       init();
     }
   }, [rates]);
 
 
 
   function format(number) {
     return number.toFixed(4);
   }
 
   function handleAmount1Change(amount1) {
     setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
     setAmount1(amount1);
   }
 
   function handleCurrency1Change(currency1) {
     setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
     setCurrency1(currency1);
   }
 
   function handleAmount2Change(amount2) {
     setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
     setAmount2(amount2);
   }
 
   function handleCurrency2Change(currency2) {
     setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
     setCurrency2(currency2);
   }
 
 
   return (
   <div>
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
    </div>
   );
 }
 
export { HomePage };
 