<template>
  <div class="weather-widget" v-if="temperature !== '-'">
    <img :src="weatherIcon" alt="Weather Icon" class="icon" />
    <div class="info">
      <p class="temp">{{ temperature }}°C</p>
      <p class="desc">{{ description }}</p>
      <p class="loc">{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherWidget",
  data() {
    return {
      temperature: '-',
      description: '-',
      location: '-',
      weatherIcon: '',
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
          this.handleError
        );
      } else {
        console.warn("Geolocation not supported.");
      }
    },
    fetchWeatherData(position) {
      const apiKey = "dfdee6b3a2e5d9db55fff15dd299718c";
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.temperature = Math.round(data.main.temp);
          this.description = data.weather[0].description;
          this.location = `${data.name}, ${data.sys.country}`;
          this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(() => {
          console.warn("Failed to fetch weather.");
        });
    },
    handleError(error) {
      console.warn("Error getting location:", error.message);
    },
  },
};
</script>

<style scoped>
.weather-widget {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f4f9ff;
  padding: 6px 12px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 0.85rem;
  max-width: fit-content;
  margin: 10px auto;
}

.icon {
  width: 40px;
  height: 40px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.temp {
  font-weight: bold;
  color: #293251;
  margin: 0;
}

.desc, .loc {
  font-size: 0.75rem;
  color: #555;
  margin: 0;
}
</style>
