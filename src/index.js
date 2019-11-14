import $ from 'jquery';
import cart from './practice.js';
import sayHello from './say-hello.js';

// import $ from 'jquery';

$(document).ready(function(){

    console.log("hello from index");

    $('div').css('background','blue');
    $('body').append('<h1> hello world </h1>');

    // const sayHello = () => console.log("hello");
    //
    // sayHello();

    console.log(cart.item.color);
    console.log(cart.thing.weight);
    console.log(sayHello());
});
