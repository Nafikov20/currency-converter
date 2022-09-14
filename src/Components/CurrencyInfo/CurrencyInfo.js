import React from 'react'
import { useEffect, useState } from 'react'
import './CurrencyInfo.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";




function CurrencyInfo() {



const apiUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;
const [apiData, setApiData] = useState({});
useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data.Valute));
}, [apiUrl]);

return (
  <div className="text-center">
    <Table size="sm">
      <thead>
        <tr>
          <th scope="col">Код старны</th>
          <th scope="col">Номинал</th>
          <th scope="col">Имя</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(apiData).map(([key, subject], i) => (
          <tr key = {i}>
            <td>{subject.CharCode}</td>
              <td>{subject.Nominal}</td>
            <td>{subject.Name}</td>
            <td>{subject.Value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
   
}

export default CurrencyInfo;