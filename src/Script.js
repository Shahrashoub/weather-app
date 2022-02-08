function displayTemperature(response){
   console.log(response.data.main.temp);
   let TemperatureElement = document.querySelector("#temperature");
}
let apikey ="7d6bba9cbabe8ee37caa7093f2abd000" ;
let apiUrl =" https://api.openweathermap.org/data/2.5/weather?q=Newyork&appid={API key}&units=meteric";
axios.get(apiUrl).then(displayTemperature);