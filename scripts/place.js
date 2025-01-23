function calculateWindChill(temp, windSpeed) {
    // Check if conditions for calculation are met (Metric preference)
    if (temp <= 10 && windSpeed > 4.8) {
        // Calculate wind chill using the metric formula
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    } else {
        // If conditions are not met
        return 'N/A';
    }
}
