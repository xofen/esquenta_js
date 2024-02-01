window.onload = function () {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var tens = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("pause");
  var buttonReset = document.getElementById("reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    appendTens.innerHTML = convertNumberToRoman(tens);
    appendSeconds.innerHTML = convertNumberToRoman(seconds);
    appendMinutes.innerHTML = convertNumberToRoman(minutes);
    appendHours.innerHTML = convertNumberToRoman(hours);
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = convertNumberToRoman(tens);
    }

    if (tens > 9) {
      appendTens.innerHTML = convertNumberToRoman(tens);
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = convertNumberToRoman(seconds);
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = convertNumberToRoman(seconds);
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = convertNumberToRoman(minutes);
      seconds = 0;
      appendSeconds.innerHTML = convertNumberToRoman(seconds);
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = convertNumberToRoman(minutes);
    }

    if (minutes > 59) {
      console.log("hours");
      hours++;
      appendHours.innerHTML = convertNumberToRoman(hours);
      minutes = 0;
      appendMinutes.innerHTML = convertNumberToRoman(minutes);
    }

    if (hours > 9) {
      appendHours.innerHTML = convertNumberToRoman(hours);
    }
  }

  const romanNumerals = {
    0: "nulla",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
    13: "XIII",
    14: "XIV",
    15: "XV",
    16: "XVI",
    17: "XVII",
    18: "XVIII",
    19: "XIX",
    20: "XX",
    21: "XXI",
    22: "XXII",
    23: "XXIII",
    24: "XXIV",
    25: "XXV",
    26: "XXVI",
    27: "XXVII",
    28: "XXVIII",
    29: "XXIX",
    30: "XXX",
    31: "XXXI",
    32: "XXXII",
    33: "XXXIII",
    34: "XXXIV",
    35: "XXXV",
    36: "XXXVI",
    37: "XXXVII",
    38: "XXXVIII",
    39: "XXXIX",
    40: "XL",
    41: "XLI",
    42: "XLII",
    43: "XLIII",
    44: "XLIV",
    45: "XLV",
    46: "XLVI",
    47: "XLVII",
    48: "XLVIII",
    49: "XLIX",
    50: "L",
    51: "LI",
    52: "LII",
    53: "LIII",
    54: "LIV",
    55: "LV",
    56: "LVI",
    57: "LVII",
    58: "LVIII",
    59: "LIX",
    60: "LX",
    61: "LXI",
    62: "LXII",
    63: "LXIII",
    64: "LXIV",
    65: "LXV",
    66: "LXVI",
    67: "LXVII",
    68: "LXVIII",
    69: "LXIX",
    70: "LXX",
    71: "LXXI",
    72: "LXXII",
    73: "LXXIII",
    74: "LXXIV",
    75: "LXXV",
    76: "LXXVI",
    77: "LXXVII",
    78: "LXXVIII",
    79: "LXXIX",
    80: "LXXX",
    81: "LXXXI",
    82: "LXXXII",
    83: "LXXXIII",
    84: "LXXXIV",
    85: "LXXXV",
    86: "LXXXVI",
    87: "LXXXVII",
    88: "LXXXVIII",
    89: "LXXXIX",
    90: "XC",
    91: "XCI",
    92: "XCII",
    93: "XCIII",
    94: "XCIV",
    95: "XCV",
    96: "XCVI",
    97: "XCVII",
    98: "XCVIII",
    99: "XCIX",
  };

  function convertNumberToRoman(number) {
    if (number in romanNumerals) {
      return romanNumerals[number];
    } else {
      return "";
    }
  }

  function updateGrainyEffect() {
    const grainyOverlay = document.querySelector('.grainy-overlay');
    setInterval(() => {
      const randomX = Math.floor(Math.random() * 100);
      const randomY = Math.floor(Math.random() * 100);
      grainyOverlay.style.backgroundImage = `radial-gradient(circle at ${randomX}% ${randomY}%, black 1px, transparent 1px)`;
    }, 1000); // Adjust the interval as needed
  }

  updateGrainyEffect();
};
