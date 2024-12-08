let defaultOption = document.querySelector('.default-option');
let cityOptions = document.querySelector('.city-options');
let cityOptionClsBtn = document.querySelector('.city-option-cls-btn');
let headCityName = document.querySelector('.head-city-name');
let menuBtn = document.querySelector('.menu-button');
let mainMenu = document.querySelector('.menu');
let tempNor = document.querySelector('.temp-nor');
let tempMin = document.querySelector('.temp-min');
let tempMax = document.querySelector('.temp-max');
let feelLike = document.querySelector('.feels-like');
let timeDiv = document.querySelector('.time');
let dateDiv = document.querySelector('.date');
let dayDiv = document.querySelector('.day');
let goodWordsDiv = document.querySelector('.good-words');
goodWords = {
     Clear: "The clear weather today presents a picture-perfect day with clear blue skies and abundant sunshine. The atmosphere is crisp and inviting, making it an ideal time for outdoor activities. With no clouds in sight, the sunlight bathes the surroundings in a warm glow, creating a cheerful and uplifting atmosphere. The visibility is excellent, allowing for stunning views of the landscape and distant horizons. Whether you choose to go for a hike, have a picnic, or simply enjoy a leisurely walk, the clear weather sets the stage for a delightful day filled with endless possibilities.",
     Clouds: "The cloud weather today brings a unique ambiance to the surroundings, as the sky is adorned with layers of clouds. The overcast sky creates a soothing atmosphere, diffusing the sunlight and providing a cooler feel. However, it's advisable to carry an umbrella as scattered showers may occur throughout the day. The cloud weather adds a touch of drama to the landscape, casting shadows and creating intriguing patterns of light and shade. Despite the occasional rain, the cloud weather offers a refreshing change from the usual sunny days and provides a great opportunity to cozy up indoors with a book or enjoy a warm beverage.",
     Drizzle: "The drizzle weather today brings a gentle mist that delicately kisses the streets and leaves a shimmering veil on the surroundings. It creates a serene and peaceful atmosphere, with the light raindrops falling softly from the sky. While the drizzle may not be heavy, it is advisable to carry an umbrella or wear a waterproof jacket to stay dry. The drizzle weather adds a touch of romance to the cityscape, with glistening pavements and the rhythmic pitter-patter of raindrops. It's the perfect weather to enjoy a cozy indoor activity or take a leisurely walk, embracing the tranquil ambiance that the drizzle brings.",
     Mist: "The mist weather today creates an enchanting aura, as a soft veil of mist blankets the surroundings, adding an air of mystery to the atmosphere. The mist drifts gently, creating an ethereal ambiance and giving a sense of tranquility to the landscape. The visibility may be slightly reduced, so it's important to exercise caution while driving or moving outdoors. The mist weather offers a unique experience, with hazy silhouettes and muted colors painting a picturesque scene. Embrace the beauty of the mist by taking a leisurely stroll, immersing yourself in the serenity it brings, or simply enjoy a warm beverage indoors as you watch the misty landscape unfold outside your window.",
     Rain: "The rain weather today brings a refreshing change to the atmosphere as raindrops cascade from the clouds, nourishing the earth below. The rhythmic patter of rain on rooftops and the fresh scent of petrichor fill the air, creating a soothing and rejuvenating ambiance. It's important to grab your umbrella and raincoat before heading out, as the rain showers are expected to continue throughout the day. The rain weather offers an opportunity to cozy up indoors, savoring a warm cup of tea or engaging in a creative pursuit. Alternatively, embrace the beauty of nature's shower by taking a walk in the rain, feeling the cool droplets on your skin, and witnessing the world come alive with vibrant shades of green.",
     Smoke: "The smoke weather today casts a haze over the city, creating a somber and atmospheric environment. The air is filled with a faint smell of smoke, and visibility is significantly reduced, posing challenges for outdoor activities. It's important to take necessary precautions, such as wearing masks, to protect yourself from the effects of smoke pollution. The smoke weather can impact respiratory health, so it is advisable to limit outdoor exposure and stay indoors if possible. During this time, it's crucial to stay informed about air quality updates and follow guidelines provided by local authorities."
}
if(window.innerWidth>=600){
    window.alert('This web is only designed for mobile devices');
    window.alert('This web is only designed for mobile devices');
    window.alert('This web is only designed for mobile devices');
}
// Menu Button
menuBtn.addEventListener('click', () => {
     mainMenu.classList.toggle('menu-active'); //-------> (1)
     cityOptions.classList.remove('city-option-active');// ---->  (2)
})
// Event to show all all available city names-----------
defaultOption.addEventListener('click', () => {
     mainMenu.classList.remove('menu-active'); //-------> (1)
     cityOptions.classList.toggle('city-option-active');

})
// Event to hide all all available city names
cityOptionClsBtn.addEventListener('click', () => {
     cityOptions.classList.remove('city-option-active');// ---->  (2)
})
let cityNames = ["New York", "Islamabad", "Iceland", "Dehli", "Lahore", "Gilgit","Landon","Mumbai"];
// Loop to access all cities name and navigate them
for (i = 0; i < cityNames.length; i++) {
     // Default City-------------------
     headCityName.innerText = cityNames[0];
     // To create the element-------------------------
     let city = document.createElement('div');
     city.innerText = cityNames[i];
     cityOptions.appendChild(city).className = "option";
     let apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric";
     let apiKey = "cdc60d00d2bab11ef1c79c5e4a34d41e";
     async function weatherCheck(cityName) {
          // API link --------------------
          const res = await fetch(apiLink + `&appid=${apiKey}&q=${cityName}`);
          let data = await res.json();
          // After Fetched  -------------------
          tempNor.innerHTML = Math.round(data.main.temp) + '&degc';
          tempMin.innerHTML = "min <br>" + data.main.temp_min + '&deg';
          tempMax.innerHTML = "max <br>" + data.main.temp_max + '&deg';
          feelLike.innerHTML = "feels like " + Math.round(data.main.feels_like) + '&deg';
          document.querySelector('.ws').innerHTML = data.weather[0].description +" with " + data.wind.speed + " speed of wind";
          switch (data.weather[0].main) {
               case "Clear":
                    document.body.style.backgroundImage = `url('images/Clear.jpg')`;
                    goodWordsDiv.innerText = goodWords.Clear;
                    break;
               case "Clouds":
                    document.body.style.backgroundImage = `url('images/Clouds.jpg')`;
                    goodWordsDiv.innerText = goodWords.Clouds;
                    break;
               case "Drizzle":
                    document.body.style.backgroundImage = `url('images/Drizzle.jpg')`;
                    goodWordsDiv.innerText = goodWords.Drizzle;
                    break;
               case "Mist":
                    document.body.style.backgroundImage = `url('images/Mist.jpg')`;
                    goodWordsDiv.innerText = goodWords.Mist;
                    break;
               case "Rain":
                    document.body.style.backgroundImage = `url('images/Rain.jpg')`;
                    goodWordsDiv.innerText = goodWords.Rain;
                    break;
               case "Smoke":
                    document.body.style.backgroundImage = `url('images/Smoke.jpg')`;
                    goodWordsDiv.innerText = goodWords.Smoke;
                    break;

               default:
                    document.body.style.backgroundImage = `url('images/Clear.jpg')`;
                    goodWordsDiv.innerText = goodWords.Clear;
                    break;
          }
     }
     // Default -------------
     weatherCheck(cityNames[1]);
     // Event on every single click on above childs----------
     city.addEventListener('click', () => {
          headCityName.innerText = city.innerText;
          cityOptions.classList.remove('city-option-active'); //-----> (2)
          weatherCheck(city.innerText);
     })

}
setInterval(() => {
     let date = new Date();
     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[date.getDay()];
     dayDiv.innerText = day;
     timeDiv.innerText = `${date.getHours()}:${date.getMinutes()}`;
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     let month = months[date.getMonth()];
     dateDiv.innerText = `${month} ${date.getDate()}`;
}, 1000);

// =============Swipt Functions
document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);
var initialY = null;
function startTouch(e) {
     initialY = e.touches[0].clientY;
};
function moveTouch(e) {
     if (initialY === null) {
          return;
     }
     var currentY = e.touches[0].clientY;
     var diffY = initialY - currentY;
     if (diffY > 0) {
          // swiped up
          mainMenu.classList.add('menu-active'); //-------> (1)
          cityOptions.classList.remove('city-option-active'); //-----> (2)
     }
     if (diffY < 0) {
          // swiped down
          //  console.log("swiped down");
          mainMenu.classList.remove('menu-active'); //-------> (1)
     }
     initialX = null;
     initialY = null;
}
