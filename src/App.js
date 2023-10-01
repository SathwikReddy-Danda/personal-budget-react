import React, { useState , useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import AboutPage from './AboutPage/AboutPage'
import LoginPage from './LoginPage/LoginPage'
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import PieChart from './PieChart/PieChart';

import axios from 'axios';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import D3JS from './PieChart/D3JS';
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {

  const [dataSource,setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#ff1a1a",
          "#00ff00",
          "#0000ff" 
        ],
      },
    ],
    labels: []
  })
  const [dataSourceNew,setDataSourceNew] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/budget')
      .then((res) => {
        setDataSourceNew(res.data.myBudget);
        setDataSource({
          datasets: [
            {
              data: res.data.myBudget.map((v)=>v.budget),
              backgroundColor: [
                "#ffcd56",
                "#ff6384",
                "#36a2eb",
                "#fd6b19",
                "#ff1a1a",
                "#00ff00",
                "#0000ff" 
              ],
            },
          ],
          labels: res.data.myBudget.map((v)=>v.title)
        })
      })
      .catch((error) => {
        console.error('Error while fetching data:', error);
      });
  }, []);


  return (
    <Router>
      <Menu />
      <Hero />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
        <center>
        <PieChart dataSource={dataSource} />
        <D3JS dataSource={dataSourceNew}/>
        </center>
      </div>

      <Footer />
    </Router>
  );
}

export default App;