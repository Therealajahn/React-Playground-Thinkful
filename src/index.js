import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.js';
// import HelloWorld from './state-drills/HelloWorld.js';
// import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun.js';

ReactDOM.render(<RouletteGun bulletInChamber={5} />, document.getElementById('root'));


