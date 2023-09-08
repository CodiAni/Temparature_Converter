
const converter = () => {
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');

    const convertcelsius = f => 5 / 9 * (f - 32);
    const convertfahrenheit = c => 32 + 9 / 5 * c;

    celsius.addEventListener('input', (e) => {
        fahrenheit.value=convertfahrenheit(e.target.value);
    })
    fahrenheit.addEventListener('input', (e) => {
        celsius.value=convertcelsius(e.target.value);
    })
}

converter()