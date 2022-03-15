const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
    {
      id: '1',  
      nome: 'Bulbasaur',
      descricao: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
      tipo: 'Planta',
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },

    {
      id: '2',  
      nome: 'Charmander',
      descricao: 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.',
      tipo: 'Fogo',
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },

    {
      id: '3',  
      nome: 'Squirtle',
      descricao: 'Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.',
      tipo: 'Agua',
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    },

    {
      id: '4',  
      nome: 'Pdgey',
      descricao: 'Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.',
      tipo: 'Ar',
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
    },

    {
      id: '5',  
      nome: 'Pikachu',
      descricao: 'Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.',
      tipo: 'Eletrico',
      imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    },
]

// Rotas
app.get('/', function (req, res) {
  res.render('index', {pokedex});
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));