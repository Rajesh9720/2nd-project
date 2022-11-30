import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  
  const url = `https://localhost:7130/api/weather/GetWeatherDetails?city=${location}`
  


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      //setLocation('')
    }
  }
  return (
    
    <div className="app">
      <div className='king'>
      <h1>MY OWN API </h1>
     
      </div>

      <div class="cloud one"></div>
      <div class="cloud two"></div>
      <div class="cloud three"></div>
      <div class="cloud four"></div>
      <div class="cloud five"></div>
      <div class="cloud six"></div>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">           
            <p>{data.locations}</p>
          </div>
          <div className="temp">
            <p>{data.temp}</p>
          </div>
          <div className="description">
           <p>{data.windSpeed}</p>
          </div>
          <div className="bottom">
          <div className="feels">
           <p className='bold'>{ data.precipitation}</p>
          </div>
          <div className="humidity">
           <p className='bold' >{data.feels}</p>
          </div>
          <div className="wind">
           <p className='bold' >{data.clouds}</p>
          </div>
          </div>   
          
        </div>                    
        </div>        
      </div>
      


    
  );
}
export default App;