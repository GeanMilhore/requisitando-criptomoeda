  // My api key
  var apikey = {
    key: 'your api key here c:'
}

// Get fetch requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status '+ response.status)
        return response.json()
    })
    .then((api) => {
        var texto = ""
        // Get 10 coins and symbols
        for (let i = 0; i < 10; i ++){

            // Show API information
            texto = texto + `

                <div class="media">
                    <img src="./img/${api.data[i].name}.png" height="60" width="70">
                    <div class="media-body">
                        <h5>${api.data[i].name}</h5>
                    </div>
                </div>           
                        
                        `
        }
        document.getElementById("coins").innerHTML = texto
        return api
    }).then((api) =>{
        
        const divMoedas = document.getElementsByClassName('media')

        for (let i = 0; i < divMoedas.length; i++){
                divMoedas[i].addEventListener('click', function(){
                    expPop('info-moeda', api.data[i].name, api.data[i].first_historical_data.split('T')[0], api.data[i].symbol )
                })
        }

        function expPop(modalID, name, date, symb){
            const pop = document.getElementsByClassName(modalID)
            document.getElementById('name').innerHTML = `Name:<span> ${name}</span>`
            document.getElementById('simbolo').innerHTML = `Sigla:<span> ${symb}</span>`
            document.getElementById('data-lancamento').innerHTML = `Lançamento:<span> ${date}</span>`
            pop[0].classList.add('mostrar')

            pop[0].addEventListener('click', (e) => {
                if (e.target.className == 'fechar'){
                    pop[0].classList.remove('mostrar')
                }
            })
        }
    }
        
    )
    .catch((error) => {
        console.error(error.message)
    })