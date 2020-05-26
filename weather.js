var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var min=date.getMinutes()
document.getElementById("dateAndTime").innerText=(today+hours+":"+min)
var weatherInCities=[
    {city:"Hyd,TS",climaticCondition:"Sunny",temperature:45},
    {city:"Manali,HimachalPradesh",climaticCondition:"cool",temperature:19},
    {city:"chennai,TN",climaticCondition:"Humid",temperature:34},
    {city:"Banglore,Karnataka",climaticCondition:"Humid",temperature:33},
    {city:"Delhi,Delhi",climaticCondition:"Sunny",temperature:44}
]
function getWeather()
{
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climaticCondition;
    document.getElementById("temperature").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
}
function getFarenheit()
{
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temperature").innerText=(weatherInSelectedCity.temperature*9/5)+32;
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

