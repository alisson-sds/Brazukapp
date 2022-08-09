const token = "live_d2985bbe5f49f1803d44871a441d55"

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + token }
});

instance.get('/path')
    .then(response => {
        return response.data;
    })

console.log('response: ', response)    