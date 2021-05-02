const button=document.querySelector('#check');
const city=document.querySelector('#loc');
let input='';
city.addEventListener('keyup',function(e){
  input=city.value;
});
let url='';

let ui=new UI;

button.addEventListener('click',function(e){
  if(input=='')alert('Error');
  else{
   url= `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=eb661ddaf48b416b2ce4e9e3546002da`;
  }
  e.preventDefault();
 
  fetch(url)
  .then((res)=>res.json())
  .then(data=>ui.showData(data))
  .catch(err=> alert("Wrong name!"));
  
});
document.getElementById('clear').addEventListener('click',(e)=>{
  ui.clear();
})

