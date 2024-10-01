export const getWeatherData = async (city) => {
   try {
      const response = await fetch (
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afc0f21d3ca019e533f74014d1c9b24d&lang=ru&units=metric`
      );

      return await response.json();
   } catch (error) {
      console.error(error);
   }
}
