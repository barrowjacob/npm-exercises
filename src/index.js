const $ = require('jquery');
const {item, thing} = require('./practice.js');

// import $ from 'jquery';

$(document).ready(function(){

    console.log("hello from index");

    $('div').css('background','blue');
    $('body').append('<h1> hello world </h1>');

    const sayHello = () => console.log("hello");

    sayHello();

    console.log(item.color);
    console.log(thing.weight);
});
