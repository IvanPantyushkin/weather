import { getWeatherData } from "./api.js";
import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js";

const app = async (params) => {
   const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва');
   const header = createHeader(weather.name);
   const content = createContent(weather);
   document.body.append(header, content);
   console.log(weather);
}

app()