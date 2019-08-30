export const generateRandomNumber = 
  (max, min = 0) => 
    Math.floor(Math.random(min, max) * (max - min) + min);