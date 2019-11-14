const $ = require('jquery');

// import $ from 'jquery';

$(document).ready(function(){

    console.log("hello from index");

    $('div').css('background','blue');
    $('body').append('<h1> hello world </h1>');

    const sayHello = () => console.log("hello");

    sayHello();
});
