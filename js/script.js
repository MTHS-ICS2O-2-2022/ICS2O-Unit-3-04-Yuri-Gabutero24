// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This file contains the JS functions for index.html


'use strict'
/**
* This function is for converting the temperature from Fahrenheit to Celsius
*/
function calculate() {
// input
  const fahrenheit = parseInt(document.getElementById('enter-fahrenheit').value)

 // process
 const temperature = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = "The temperature in Celsius is " + temperature + "°C"
}