async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


(async () => {
    try{
        const res = await fetchCatFact();
        console.log(res.fact); 
    } catch (error) {
        console.error(error.message);
    }
})();