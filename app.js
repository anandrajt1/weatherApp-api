// API-APPLICATION PROGRAMING INTERFACE
// call API using fetch method

// search weather api -openmeteo.com website(simpler site)-copy the link inisde $curl

//  search-how to api request in js-rapidapi.com(better site)-fetch method

// fetch(`YOUR-API`)
// 	.then(res => {
// 		res = res.json();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});


// fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
// 	.then(function(response){
        // console.log(response)
        // data will come in json format
        // to get json data only from respone write:
    //     return response.json()
    // })
    // .then(data=>{
    //     console.log(data)
        // console.log(data)-to see all datas we got-inside it there will be our temperature
        // now we put this temp in data to our id temperature inside span tag
    //     const tempSpan=document.getElementById('temperature')
    //     const temperature=data.current_weather.temperature

    //     tempSpan.innerHTML=temperature+"°C"
    // })

	// .catch(function(error){
    //     console.log(error)
    // })




    const kochibtn=document.getElementById('kochibtn')
    kochibtn.addEventListener('click',function(){
        showWeather(9.93,76.26)

    })
    const calicutbtn=document.getElementById('calicutbtn')
    calicutbtn.addEventListener('click',function(){
        showWeather(11.25,75.78)
    })

    const tvdrmbtn=document.getElementById('tvdrmbtn')
    tvdrmbtn.addEventListener('click',function(){
        showWeather(8.52,76.93)
    })

    const plkdbtn=document.getElementById('plkdbtn')
    plkdbtn.addEventListener('click',function(){
        showWeather(10.78,76.65)
    })




function showWeather(latitude,longitude){
    const url='https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'



    fetch(url)
.then(function(response){
    // console.log(response)
    // data will come in json format
    // to get json data only from respone write:
    return response.json()
})
.then(data=>{
    console.log(data)
    // console.log(data)-to see all datas we got-inside it there will be our temperature
    // now we put this temp in data to our id temperature inside span tag
    const tempSpan=document.getElementById('temperature')
    const temperature=data.current_weather.temperature

    tempSpan.innerHTML=temperature+"°C"
})

.catch(function(error){
    console.log(error)
})
}