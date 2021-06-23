import React from 'react';
import ReactDom from 'react-dom';
import {range} from 'd3'
import {Face} from './Face.js';

const width = 160;
const height = 160;
///let eyeRadius = 5 + Math.random()*5;

const array = range(6*3);

const App = () => array.map(() => (
  <Face 			width = {width}
    					height = {height}
    					centerX = {width / 2}
              centerY = {height / 2}
							strokeWidth = {Math.random()*10}
              eyeOffsetX = {width/10 + Math.random()*10} 
              eyeOffsetY = {height/(Math.random()*3+6)} 
              eyeRadius = {5 + Math.random()*10} 
              mouthRadius = {width/10 + Math.random()*50} 
              mouthWidth = {Math.random()*10+1}
    					browOffsetY ={height/(Math.random()*3+4)}
              browRadius = {5 + Math.random()*10 * 1.9}/>
));

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App/>,
  rootElement
);