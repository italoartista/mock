let url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d'

async function buscar(url) { 
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

buscar(url).then(data => {
    console.log(data)
});

