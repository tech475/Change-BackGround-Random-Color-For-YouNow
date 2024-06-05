// ==UserScript==
// @name         Change Background Color
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change background color of www.younow.com to a random hexadecimal color
// @author       tech475
// @match        https://www.younow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
})();
