import './style.css'
import { getRecommendations } from './recomendado.js'

document.querySelector('#app').innerHTML = `
     <div class="container">
        <h1>🌟RECOMENDADOR DE PELICULAS🍿🍿🍿🍿🍿🍿🍿3000🥤🥤🥤🥤🥤🥤🥤</h1>
        <p>😲Ingrese cinco de sus películas favoritas para realizar las sugerencias con mayor precision:😎</p>
        <form id="moviesForm">
            <input type="text" id="movie1" placeholder="1era Película favorita">
            <input type="text" id="movie2" placeholder="2da Película favorita">
            <input type="text" id="movie3" placeholder="3ra Película favorita">
            <input type="text" id="movie4" placeholder="4ta Película favorita">
            <input type="text" id="movie5" placeholder="5ta Película favorita">
            <button type="button">🔍presioname para empezar a analizar tus peliculas y recomendarte las mejores🔎</button>
        </form>
        <div id="recommendations"></div>
    </div>
`

document.querySelector('button').addEventListener('click', getRecommendations)
