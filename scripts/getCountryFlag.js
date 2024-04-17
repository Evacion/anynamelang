async function getCountryFlag(latitude, longitude) {
    const apiKey = '710d917c0e1746b3aef14975d6ac263a'; // Replace with your API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results.length > 0) {
            // Extract the country code from the first result
            const countryCode = data.results[0].components.country_code.toUpperCase();
            const flagStyle = "flat"; // Choose the style of the flag
            const flagSize = "64"; // Choose the size of the flag image
            const flagImageUrl = `https://www.countryflags.io/${countryCode}/${flagStyle}/${flagSize}.png`;
            return flagImageUrl;
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        console.error('Error fetching country flag:', error);
        return null;
    }
}