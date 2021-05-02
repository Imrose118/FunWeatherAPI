class UI{
  constructor(){
   this.output=document.getElementById('res');
  }

  showData(data){
   
    this.output.innerHTML=`
    <div class="image"><img id:"im" src='http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png'>
    <p>All ${data.weather[0].main} now.<br>
    I mean ${data.weather[0].description}.</p>
    </div>
    <div class="details">
    <ul id="infos">
      <li class="info">City: ${data.name}</li>
      <li class="info">Country: ${data.sys.country}</li>
      <li class="info">Temperature: ${data.main.temp} Celsius</li>
      <li class="info">Though it feels like ${data.main.feels_like} Celsius</li>
      <li class="info">Pressure: ${data.main.pressure} atm</li>
      <li class="info">Humidity: ${data.main.humidity}</li>
      <li class="info">Cloud Level: ${data.clouds.all}%</li>
    </ul>
    </div> 
    `;
    
    
  }
  clear(){
    this.output.innerHTML='';
  }
}
