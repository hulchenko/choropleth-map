const tooltip = document.getElementById('tooltip');
const colors = ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#720e9e'];
const educationURL =
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
const countyURL =
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

fetch(
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'
)
  .then((response) => response.json())
  .then((response) => {
    const { baseTemperature, monthlyVariance } = response;

    createChart(
      monthlyVariance.map((d) => ({ ...d, temp: baseTemperature - d.variance })) //create an array of data, calculate temp for each year/month
    );
  });
