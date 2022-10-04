let spaghetti = 400;
let guanciale = 250;
let veryFreshEggYolks = 6 * 18;
let agedGratedPecorinoRomanoCheese = 50;
let rawBlackPepper = 4;

console.log("---------Our ingridients---------");
console.log("spaghetti:", spaghetti, "g");
console.log("guanciale:", guanciale, "g");
console.log("Very Fresh Egg Yolks:", veryFreshEggYolks, "g");
console.log(
  "Aged Grated Pecorino Romano Cheese:",
  agedGratedPecorinoRomanoCheese,
  "g"
);
console.log("rawBlackPepper:", rawBlackPepper, "g");

console.log("---------Cooking must begin---------");

console.log("First cut the guanciale into 1cm layers, then into long strips.");

let cuttingGuancialeIntoLayers = guanciale / 1;
let cuttingGuancialeIntoStrips = cuttingGuancialeIntoLayers / 1;

console.log("Combine the egg yolks with the finely grated Pecorino Romano.");

let combinedYolksAndPecorino =
  veryFreshEggYolks + agedGratedPecorinoRomanoCheese;

console.log("Combined Yolks And Pecorino:", combinedYolksAndPecorino, "g");

let fryingInAPanPepper = rawBlackPepper / 2;
let leftPepper = rawBlackPepper - fryingInAPanPepper;

combinedYolksAndPecorino += fryingInAPanPepper;

console.log(
  "Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest."
);
console.log(
  "Combined Yolks And Pecorino with peper",
  combinedYolksAndPecorino,
  "g"
);

let guancialeMediumHeat = cuttingGuancialeIntoStrips / 3;
let guancialeHighHeat = guancialeMediumHeat / 1;
let guancialeGrease = cuttingGuancialeIntoStrips - guancialeMediumHeat;
let justGuanciale = guancialeHighHeat - guancialeGrease;

console.log("Frying guanciale on medium heat and then on high heat");
console.log("leave greace separately");

let water = 1000;
let salt = 3;
let boilingPot = water + salt + spaghetti;
console.log(boilingPot);

console.log("boiling spaghetti:", boilingPot, "g");

//the water will evaporate
let waterEvaporate = 0.5 * water;

//spaghetti will absorb water
let absorbWater = 0.2 * spaghetti;

boilingPot = water - waterEvaporate + salt + (spaghetti + absorbWater);
console.log("After 10 min of boiling spaghetti:", boilingPot, "g");

let spaghettiAlDente = spaghetti + absorbWater;
console.log("let's drain pasta:", spaghettiAlDente, "g");

let boiledWater = boilingPot - spaghettiAlDente;
let wieghtOfSpoonOfWater = 14.79;
let twoSpoonsOfWater = (boiledWater - (boiledWater - wieghtOfSpoonOfWater)) * 2;
console.log(
  "and poor 2 spoons of water into the part of the frying pan containing the cooled guancial"
);

justGuanciale += twoSpoonsOfWater;

let sauce = justGuanciale;

let spaghettiAndSauceMix = spaghettiAlDente + sauce;

let carbonara = spaghettiAndSauceMix + combinedYolksAndPecorino + leftPepper;

console.log(
  "Now mix all ready ingridients and help yourself!:",
  carbonara,
  "g"
);
