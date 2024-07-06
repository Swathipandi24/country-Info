

// Function to fetch country data
function fetchCountryData(countryName) {
    const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(countryUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const country = data[0];
                const countryInfo = `
                    Name: ${country.name.common} <br>
                    Capital: ${country.capital[0]} <br>
                    Population: ${country.population} <br>
                    Region: ${country.region}
                `;
                document.getElementById('countryInfo').innerHTML = countryInfo;
            } else {
                document.getElementById('countryInfo').innerText = 'No country information found.';
            }
        })
        .catch(error => {
            document.getElementById('countryInfo').innerText = 'Failed to load country data';
            console.error('Error fetching country data:', error);
        });
}

// Event listener for the fetch button
document.getElementById('fetchButton').addEventListener('click', () => {
    const countryName = document.getElementById('countryName').value.trim();
    if (countryName) {
        fetchCountryData(countryName);
    } else {
        alert('Please enter a country name');
    }
});
