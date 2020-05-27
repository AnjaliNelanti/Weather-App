var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var min=date.getMinutes()
var ampm=hours>12?"PM":"AM"
document.getElementById("dateAndTime").innerText=(today+hours+":"+min+ampm)
var weatherInCities=[
    {city:"Hyd,Telangana",climaticCondition:"Sunny",temperature:45,latitude:17.3,longitude:78.4},
    {city:"Manali,HimachalPradesh",climaticCondition:"cool",temperature:19,latitude:32.2,longitude:77.1},
    {city:"chennai,TamilNadu",climaticCondition:"Humid",temperature:34,latitude:13.08,longitude:80.2},
    {city:"Banglore,Karnataka",climaticCondition:"Humid",temperature:33,latitude:12.9,longitude:77.5},
    {city:"Delhi,Delhi",climaticCondition:"Sunny",temperature:44,latitude:28.6,longitude:77.2}
]
function getWeather()
{
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climaticCondition;
    document.getElementById("temperature").innerText=weatherInSelectedCity.temperature+" "+"C";
    document.getElementById("city").innerText=selectedCityFromList;
    document.getElementById("latitude").innerText=weatherInSelectedCity.latitude+" "+"latitude";
    document.getElementById("longitude").innerText=weatherInSelectedCity.longitude+" "+"longitude";
}
function getFarenheit()
{
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temperature").innerText=(weatherInSelectedCity.temperature*9/5)+32+" "+"F";
}
function getCelsius()
{
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temperature").innerText=weatherInSelectedCity.temperature;
}

