const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.type = type;
    this.image = 'images/super-' + (id + 1) + '.png';
    console.log(this.image);
    this.strength = this.getRandomStrength();
    this.type = type;
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100)
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let player = document.createElement('div')
    player.classList.add('player')
    player.setAttribute('data-id', this.id)   
    let name = document.createElement('div')
    name.textContent = this.name
    let img = document.createElement('img')
    img.setAttribute('src', this.image)
    let strength = document.createElement('div')
    strength.textContent = this.strength
    strength.classList.add('strength')
    player.append(img, name, strength)
    if (this.selected == true) player.classList.add('selected')
    console.log(player)
    return player
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player, i) => {
      console.log(i)
      let type = i % 2 == 0 ? 'hero' : 'villain';
      return new Player(i, player, type);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
