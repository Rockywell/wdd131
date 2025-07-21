function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16)
}

document.addEventListener("DOMContentLoaded", () => {
    let temperatureC = parseFloat(document.getElementById("temperature").textContent);
    let windSpeedKmH = parseFloat(document.getElementById("windSpeed").textContent);

    const windChillElement = document.getElementById("windChill");

    windChillElement.textContent = (temperatureC <= 10 && windSpeedKmH > 4.8) ? `${calculateWindChill(temperatureC, windSpeedKmH).toFixed(2)}℃` : "N/A";
})