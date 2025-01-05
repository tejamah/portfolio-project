<template>
  <div class="container">
    <div class="app-title">
      <p>cd</p>
    </div>
    <div class="notification" v-if="notificationVisible">
      <p>{{ notificationMessage }}</p>
    </div>
    <div class="weather-container" v-if="temperature !== '-'">
      <div class="weather-icon">
        <img :src="weatherIcon" alt="Weather Icon" />
      </div>
      <div class="temperature-value">
        <p>{{ temperature }}°<span>C</span></p>
      </div>
      <div class="temperature-description">
        <p>{{ description }}</p>
      </div>
      <div class="location">
        <p>{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: '-',
      description: '-',
      location: '-',
      weatherIcon: 'Weather-App-JavaScript-master/icons/unknown.png',
      notificationVisible: false,
      notificationMessage: '',
    };
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    getUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          this.fetchWeatherData,
          this.showError
        );
      } else {
        this.showNotification("Browser doesn't support geolocation.");
      }
    },
    fetchWeatherData(position) {
      const apiKey = "dfdee6b3a2e5d9db55fff15dd299718c"; // Replace with your API key
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod !== 200) {
            this.showNotification("Failed to fetch weather data.");
            return;
          }

          this.temperature = Math.round(data.main.temp);
          this.description = data.weather[0].description;
          this.location = `${data.name}, ${data.sys.country}`;
          this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch((error) => {
          this.showNotification("Error fetching weather data.");
          console.error(error);
        });
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.showNotification("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          this.showNotification("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          this.showNotification("The request to get user location timed out.");
          break;
        default:
          this.showNotification("An unknown error occurred.");
          break;
      }
    },
    showNotification(message) {
      this.notificationMessage = message;
      this.notificationVisible = true;
      setTimeout(() => (this.notificationVisible = false), 5000); // Hide notification after 5 seconds
    },
  },
};
</script>

<style scoped>
/* Container styles */
.container {
  width: 100%;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  margin: 0 auto;
}

/* Title section */
.app-title {
  background-color: #f4f9ff;
  padding: 10px 0;
  text-align: center;
}

.app-title p {
  font-size: 1.4em;
  color: #293251;
  font-weight: bold;
}

/* Notification styles */
.notification {
  background-color: #f8d7da;
  display: block;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.notification p {
  color: #721c24;
  font-size: 1.2em;
}

/* Weather container */
.weather-container {
  background-color: #f4f9ff;
  padding: 20px 0;
  text-align: center;
  border-radius: 10px;
}

.weather-icon img {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.temperature-value p {
  font-size: 4em;
  color: #293251;
  cursor: pointer;
  transition: color 0.3s ease;
}

.temperature-value p:hover {
  color: #4070f4;
}

.temperature-value span {
  font-size: 0.6em;
}

.temperature-description p {
  font-size: 1.2em;
  color: #293251;
  margin-bottom: 10px;
}

.location p {
  font-size: 0.9em;
  color: #293251;
}
</style>
