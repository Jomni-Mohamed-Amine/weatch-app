const API_KEY="2d5781be8822e0c2c20d3432ec4d0b58"


async function getWeather(){
    const city=document.getElementById('city').value
    if(!city){
        alert('please enter a city')

    }
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    try{
        const res=await fetch(URL)
        if(!res.ok) throw new Error('city noy found')
            const data=await res.json()
        console.log(data)
        document.getElementById('weather-info').innerHTML=`
       <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>`
    }
    catch(error){
        console.error(error.message)
    }
}
