# Informações CriptoMoedas :chart:

### Tecnologias utilizadas:	:dollar: CoinMarketCap API, :yellow_square: JavaScript , :orange_square: HTML & :blue_square: CSS

O Projeto tem como objetivo a busca de informações sobre as principais criptomoedas <br> do mundo, utilizando __*javaScript*__ e os objetos *promises*. 

## Visual do Projeto

!["visual-main"](/code/img/Readme/Main-photo.png "Visual página")

as __*divs*__, são feitas através de um ``` .then() ``` que após a requisição do __json()__ da API <br> faz com que as informações sejam passadas para ```div#coin```.

### Modelo da DIV em que são passadas as informações.
```

<div class="media">
    <img src="./img/${api.data[i].name}.png" height="60" width="70">
    <div class="media-body">
        <h5>${api.data[i].name}</h5>
    </div>
</div>           
                        
```

## Mostrando informações.

!["info-moeda"](/code/img/Readme/info-photo.png "Informações Moeda")

após o clicar em qualquer uma das moedas uma tela de informações irá descer<br> informando o nome, sigla e sua primeira data histórica, isso foi implementado <br> utilizando um ```EventListener```  e um ```for()``` como vemos abaixo.


```
.then((api) =>{
        
    const divMoedas = document.getElementsByClassName('media')

    for (let i = 0; i < divMoedas.length; i++){
            divMoedas[i].addEventListener('click', function(){
                expPop('info-moeda', api.data[i].name, api.data[i].first_historical_data.split('T')[0], api.data[i].symbol )
            })
    }


```
O código acima adiciona como evento em cada __div__ com informações um evento de <br> escuta para que ao clicarmos chame a função __*exPop*()__ sejam apresentadas as <br>informações sobre aquela moeda.
## ( Projeto implementado durante uma aula na Digital Innovation One :pencil2: ) 
