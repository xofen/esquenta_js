document.addEventListener("DOMContentLoaded", function () {
    showTime();
});

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    document.getElementById("hours").innerText = "hora" + (h !== 1 ? "s" : "") + ": " + timeToWordsBrazilianPortuguese(h);
    document.getElementById("minutes").innerText = "minuto" + (m !== 1 ? "s" : "") + ": " + timeToWordsBrazilianPortuguese(m);
    document.getElementById("seconds").innerText = "segundo" + (s !== 1 ? "s" : "") + ": " + timeToWordsBrazilianPortuguese(s);

    setTimeout(showTime, 1000);
}

function timeToWordsBrazilianPortuguese(number) {
    const unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    const especiais = ["Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
    const dezenas = ["", "Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

    if (number < 10) {
        return unidades[number];
    } else if (number < 20) {
        return especiais[number - 10];
    } else {
        const dezena = Math.floor(number / 10);
        const unidade = number % 10;

        if (unidade === 0) {
            return dezenas[dezena];
        } else {
            return dezenas[dezena] + (unidade !== 1 ? " e " + unidades[unidade] : " e " + unidades[unidade]);
        }
    }
}
