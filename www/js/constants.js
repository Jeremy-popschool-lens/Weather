angular.module('Weather')


.constant('OpenWeatherConfig', {

   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',

   units: '&units=metric',

   appid: '&appid=3d186729a29bf2798af807f2458d83bf',

   imgUrl: 'http://openweathermap.org/img/w/'

})
