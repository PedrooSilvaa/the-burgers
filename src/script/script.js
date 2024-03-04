var qtd = 1;
var total = 0.0;
var valor = 0;
var posicao = 0;
var qtdMeat = 4;

function Filter(){
    document.getElementById("local-filter").style.display = "flex";
}

function Apply(){
    document.getElementById("local-filter").style.display = "none";
}

function CloseMeat(){
    document.getElementById("meat-burg").style.display = "none";
    document.getElementById("closeMeat").style.display = "none";
    document.getElementById("viewMeat").style.display = "inline";
}

function CloseSpecial(){
    document.getElementById("special-burg").style.display = "none";
    document.getElementById("closeSpecial").style.display = "none";
    document.getElementById("viewSpecial").style.display = "inline";
}

function CloseVegetarian(){
    document.getElementById("vegetarian-burg").style.display = "none";
    document.getElementById("closeVegetarian").style.display = "none";
    document.getElementById("viewVegetarian").style.display = "inline";
}

function CloseDessert(){
    document.getElementById("dessert").style.display = "none";
    document.getElementById("closeDessert").style.display = "none";
    document.getElementById("viewDessert").style.display = "inline";
}

function ViewMeat(){
    document.getElementById("meat-burg").style.display = "flex";
    document.getElementById("closeMeat").style.display = "inline";
    document.getElementById("viewMeat").style.display = "none";
}

function ViewSpecial(){
    document.getElementById("special-burg").style.display = "flex";
    document.getElementById("closeSpecial").style.display = "inline";
    document.getElementById("viewSpecial").style.display = "none";
}

function ViewVegetarian(){
    document.getElementById("vegetarian-burg").style.display = "flex";
    document.getElementById("closeVegetarian").style.display = "inline";
    document.getElementById("viewVegetarian").style.display = "none";
}

function ViewDessert(){
    document.getElementById("dessert").style.display = "flex";
    document.getElementById("closeDessert").style.display = "inline";
    document.getElementById("viewDessert").style.display = "none";
}

function BuyMeat(Id){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');
    var boxRemoved = document.createElement('div');
    
    var NboxRemoved = `box-removed${qtd}`
    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`
    
    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);
    boxRemoved.setAttribute("id", NboxRemoved);
    boxRemoved.setAttribute("onclick", `RemoveList(${qtd})`);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);
    pai[0].appendChild(boxRemoved);

    
    boxImg.appendChild(img);
    document.getElementById(NboxRemoved).innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    img.setAttribute('src', `src/images/png/meat-sandwiches/meat-${Id}.png`);
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    valor = parseInt(document.getElementById(`valor-m${Id}`).innerText);
    titulo = document.getElementById(`ttl-m${Id}`).innerText;

    document.getElementById(NboxName).innerText = titulo;
    document.getElementById(NboxPrice).innerHTML =  valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuySpecial(Id){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');
    var boxRemoved = document.createElement('div');
    
    var NboxRemoved = `box-removed${qtd}`
    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`
    
    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);
    boxRemoved.setAttribute("id", NboxRemoved);
    boxRemoved.setAttribute("onclick", `RemoveList(${qtd})`);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);
    pai[0].appendChild(boxRemoved);

    
    boxImg.appendChild(img);
    document.getElementById(NboxRemoved).innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    img.setAttribute('src', `src/images/png/special-sandwiches/special-${Id}.png`);
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    valor = parseInt(document.getElementById(`valor-s${Id}`).innerText);
    titulo = document.getElementById(`ttl-s${Id}`).innerText;

    document.getElementById(NboxName).innerText = titulo;
    document.getElementById(NboxPrice).innerHTML =  valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyVegetarian(Id){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');
    var boxRemoved = document.createElement('div');
    
    var NboxRemoved = `box-removed${qtd}`
    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`
    
    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);
    boxRemoved.setAttribute("id", NboxRemoved);
    boxRemoved.setAttribute("onclick", `RemoveList(${qtd})`);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);
    pai[0].appendChild(boxRemoved);

    
    boxImg.appendChild(img);
    document.getElementById(NboxRemoved).innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    img.setAttribute('src', `src/images/png/vegetarian-sandwiches/vegetarian-${Id}.png`);
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    valor = parseInt(document.getElementById(`valor-v${Id}`).innerText);
    titulo = document.getElementById(`ttl-v${Id}`).innerText;

    document.getElementById(NboxName).innerText = titulo;
    document.getElementById(NboxPrice).innerHTML =  valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyDessert(Id){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');
    var boxRemoved = document.createElement('div');
    
    var NboxRemoved = `box-removed${qtd}`
    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`
    
    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);
    boxRemoved.setAttribute("id", NboxRemoved);
    boxRemoved.setAttribute("onclick", `RemoveList(${qtd})`);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);
    pai[0].appendChild(boxRemoved);

    
    boxImg.appendChild(img);
    document.getElementById(NboxRemoved).innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    img.setAttribute('src', `src/images/png/dessert/dessert-${Id}.png`);
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    valor = parseInt(document.getElementById(`valor-d${Id}`).innerText);
    titulo = document.getElementById(`ttl-d${Id}`).innerText;

    document.getElementById(NboxName).innerText = titulo;
    document.getElementById(NboxPrice).innerHTML =  valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function OpenCart(){
    document.getElementById("local-buy").style.display = "flex"
}

function CloseCart(){
    document.getElementById("local-buy").style.display = "none"
}

function Edit(){
    console.log("em teste");
}

function RemoveList(itemId) {
    console.log("funfou")
    var imgElement = document.getElementById(`box-buy${itemId}`);
    var nameElement = document.getElementById(`box-name${itemId}`);
    var priceElement = document.getElementById(`box-price${itemId}`);
    var removedElement = document.getElementById(`box-removed${itemId}`);
    
        valor = parseInt(document.getElementById(`box-price${itemId}`).innerText);
        total = total - valor;
    
        document.getElementById("saida-total").innerHTML = "$" + total + ".00";

    if (imgElement) imgElement.remove();
    if (nameElement) nameElement.remove();
    if (priceElement) priceElement.remove();
    if (removedElement) removedElement.remove();
}

function AddMeat(){  
    qtdMeat++;

    var pai = document.getElementsByClassName("meat-grid");
    var divPrincipal = document.createElement('div')

    divPrincipal.setAttribute('class', 'boxMeat');
    divPrincipal.setAttribute('id', `meat-${qtdMeat}`)

    
    var tituloLanche = document.createElement('h1');
    
    tituloLanche.setAttribute('id', `ttl-m${qtdMeat}`);
    
    
    var imagem = document.createElement('img');
    
    imagem.setAttribute('src', `src/images/png/meat-sandwiches/meat-${qtdMeat}.png`)
    
    
    var preco = document.createElement('h1');
    
    preco.setAttribute('id', `price-m${qtdMeat}`);
    preco.setAttribute('class', `price-meat`);
    
    
    var txtPrice = document.createElement('span');
    
    txtPrice.setAttribute('id', `valor-m${qtdMeat}`);
    
    
    var icone = document.createElement('i');
    
    icone.setAttribute('id', `buy-meat${qtdMeat}`);
    icone.setAttribute('onclick', `BuyMeat(${qtdMeat})`);
    icone.setAttribute('class', 'fa-solid fa-cart-shopping')
    
    
    tituloLanche.innerHTML = "Chedar melt"
    preco.innerText = "$";
    txtPrice.innerHTML = "10.00"

    pai[0].appendChild(divPrincipal);
    divPrincipal.appendChild(tituloLanche);
    divPrincipal.appendChild(imagem);
    divPrincipal.appendChild(preco);
    preco.appendChild(txtPrice);
    preco.appendChild(icone);
}


function AddSpecial(){  
    qtdSpecial++;

    var pai = document.getElementsByClassName("special-grid");
    var divPrincipal = document.createElement('div')

    divPrincipal.setAttribute('class', 'boxSpecial');
    divPrincipal.setAttribute('id', `special-${qtdSpecial}`)

    
    var tituloLanche = document.createElement('h1');
    
    tituloLanche.setAttribute('id', `ttl-s${qtdSpecial}`);
    
    
    var imagem = document.createElement('img');
    
    imagem.setAttribute('src', `src/images/png/special-sandwiches/special-${qtdSpecial}.png`)
    
    
    var preco = document.createElement('h1');
    
    preco.setAttribute('id', `price-s${qtdSpecial}`);
    preco.setAttribute('class', `price-special`);
    
    
    var txtPrice = document.createElement('span');
    
    txtPrice.setAttribute('id', `valor-s${qtdSpecial}`);
    
    
    var icone = document.createElement('i');
    
    icone.setAttribute('id', `buy-special${qtdSpecial}`);
    icone.setAttribute('onclick', `BuySpecial(${qtdSpecial})`);
    icone.setAttribute('class', 'fa-solid fa-cart-shopping')
    
    
    tituloLanche.innerHTML = "Chedar melt"
    preco.innerText = "$";
    txtPrice.innerHTML = "10.00"

    pai[0].appendChild(divPrincipal);
    divPrincipal.appendChild(tituloLanche);
    divPrincipal.appendChild(imagem);
    divPrincipal.appendChild(preco);
    preco.appendChild(txtPrice);
    preco.appendChild(icone);
}


function AddVegetarian(){  
    qtdVegetarian++;

    var pai = document.getElementsByClassName("vegetarian-grid");
    var divPrincipal = document.createElement('div')

    divPrincipal.setAttribute('class', 'boxVegetarian');
    divPrincipal.setAttribute('id', `vegetarian-${qtdVegetarian}`)

    
    var tituloLanche = document.createElement('h1');
    
    tituloLanche.setAttribute('id', `ttl-v${qtdVegetarian}`);
    
    
    var imagem = document.createElement('img');
    
    imagem.setAttribute('src', `src/images/png/vegetarian-sandwiches/vegetarian-${qtdVegetarian}.png`)
    
    
    var preco = document.createElement('h1');
    
    preco.setAttribute('id', `price-vegetarian-v${qtdVegetarian}`);
    preco.setAttribute('class', `price-vegetarian`);
    
    
    var txtPrice = document.createElement('span');
    
    txtPrice.setAttribute('id', `valor-v${qtdVegetarian}`);
    
    
    var icone = document.createElement('i');
    
    icone.setAttribute('id', `buy-vegetarian${qtdVegetarian}`);
    icone.setAttribute('onclick', `BuyVegetarian(${qtdVegetarian})`);
    icone.setAttribute('class', 'fa-solid fa-cart-shopping')
    
    
    tituloLanche.innerHTML = "Chedar melt"
    preco.innerText = "$";
    txtPrice.innerHTML = "10.00"

    pai[0].appendChild(divPrincipal);
    divPrincipal.appendChild(tituloLanche);
    divPrincipal.appendChild(imagem);
    divPrincipal.appendChild(preco);
    preco.appendChild(txtPrice);
    preco.appendChild(icone);
}


function AddDessert(){  
    qtdDessert++;

    var pai = document.getElementsByClassName("dessert-grid");
    var divPrincipal = document.createElement('div')

    divPrincipal.setAttribute('class', 'boxDessert');
    divPrincipal.setAttribute('id', `dessert-${qtdDessert}`)

    
    var tituloLanche = document.createElement('h1');
    
    tituloLanche.setAttribute('id', `ttl-d${qtdDessert}`);
    
    
    var imagem = document.createElement('img');
    
    imagem.setAttribute('src', `src/images/png/dessert/dessert-${qtdDessert}.png`)
    
    
    var preco = document.createElement('h1');
    
    preco.setAttribute('id', `price-dessert-d${qtdDessert}`);
    preco.setAttribute('class', `price-dessert`);
    
    
    var txtPrice = document.createElement('span');
    
    txtPrice.setAttribute('id', `valor-d${qtdDessert}`);
    
    
    var icone = document.createElement('i');
    
    icone.setAttribute('id', `buy-dessert${qtdDessert}`);
    icone.setAttribute('onclick', `BuyDessert(${qtdDessert})`);
    icone.setAttribute('class', 'fa-solid fa-cart-shopping')
    
    
    tituloLanche.innerHTML = "Chedar melt"
    preco.innerText = "$";
    txtPrice.innerHTML = "10.00"

    pai[0].appendChild(divPrincipal);
    divPrincipal.appendChild(tituloLanche);
    divPrincipal.appendChild(imagem);
    divPrincipal.appendChild(preco);
    preco.appendChild(txtPrice);
    preco.appendChild(icone);
}
