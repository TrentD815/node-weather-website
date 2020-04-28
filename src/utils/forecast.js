const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b14450678f325c13affe5c6d9a2c911e&query=' + latitude + ',' + longitude + '&units=f'

  request({url, json:true}, (error,{body}) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    }
    else if (body.error) {
      callback('Unable to find location. Try another search', undefined)
    }
    else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature + ". It feels like " + body.current.feelslike + " out. The humidity is " + body.current.humidity+ "%.")
    }
  })
}

module.exports = forecast
