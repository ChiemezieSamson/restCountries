# <h1 align='center'>[World Countries](https://worldrest-countries.netlify.app/)</h1>

<div align="center">
  <table>
    <tr>
      <td>
        <img src="./src/Components/asset/images/World Countries App.png" width="100px" alt="homepage"/>      
      </td>
      <td>
        <img src="./src/Components/asset/images/World Countries App (1).png" width="100px" alt="countries" />      
      </td>
      <td>
        <img src="./src/Components/asset/images/World Countries App (2).png" width="100px" alt="population" />
      </td>
      <td>
        <img src="./src/Components/asset/images/World Countries App (3).png" width="100px" alt="currencies" />      
      </td>
      <td>
        <img src="./src/Components/asset/images/World Countries App (4).png" width="100px" alt="Regions" />      
      </td>
    </tr>
  </table>
</div>

## Overview

A web application meticulously designed to offer visually appealing and concise information about countries across the globe. This innovative platform caters to a diverse audience, including students, tourists, libraries, businesses, and researchers. Specifically tailored for individuals who may lack prior educational exposure to world geographical regions or for those who seek a convenient refresher on this vital knowledge. Whether you're a student embarking on a learning journey, a tourist planning your next adventure, a library aiming to enhance its resources, a business navigating global markets, or a researcher seeking comprehensive insights, the application seamlessly meets your needs. Dive into a world of curated data, from cultural landmarks to economic indicators, providing a comprehensive understanding of our global community.

The web app was actually an upgrade from my previous app [World Countries Datas](https://worldcountries-data.netlify.app/)

> [!Warning]
> Please be aware that the current implementation utilizes a free version of the ExchangeRate API for fetching currency exchange rates, which is limited to once a day. As a result, the displayed rates might not always reflect the most up-to-date values. To ensure accurate and real-time currency information, it is recommended to consider upgrading to a paid version of the ExchangeRate API after cloning this project.

> [!Tip]
> Population = Displays the country name, the country total population and the percentage of the country population to the world total population
>
> Countries = Have three "Selection" button (List, Grid, details) which handles the way the information for each country is displayed.
>
> Currencies = Feel free to click on the arrow associated with unsupported currency codes to explore a list of countries for which the website currently does not support currency conversion.

Also, Feel free to explore our web application! You never know what amazing discoveries await you.

## The Problem

Please note that approximately 90% of the data featured on the web app is sourced from the [RestCountries API](https://restcountries.com/) and [ExchangeRate API](https://www.exchangerate-api.com/). It's important to be aware that there may be discrepancies in some information between these APIs, as updates to their data may not be synchronized in real-time. Users are advised to consider this while interacting with the app, and I appreciate your understanding as I strive to provide the most accurate and up-to-date information available from these external sources.

## Current Status

**LIVE LINK:** https://worldrest-countries.netlify.app/

## Future Plans

> [!Note]
> Add more features like:
> Interesting places to visit around the glob.
> Images of each country capital and some of their cities
> Allowing users to share some of the countries information on social media.
> Saving or downloading countries image

## Running the Project

This project is being built with React Js.

To run a version locally on your own machine

Optional:

```bash
#make a directory and change into it:
mkdir newDirectory && cd newDirectory
```

Required:

```bash
#clone the repository into the current directory over SSH:
git clone https://github.com/ChiemezieSamson/restCountries
#change into newly cloned directory:
cd
#run this command to install all dependencies:
npm install
```

for a local development server, run:

```bash
npm run start
```

run this commmand to build:

```bash
npm run build
```

## Dev Dependencies

- [react-icons](https://react-icons.github.io/react-icons/)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [react-router-dom](https://reactrouter.com/en/main)
- [@uidotdev/usehooks](https://usehooks.com/)
