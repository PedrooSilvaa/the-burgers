var qtd = 1;
var total = 0.0;
var valor = 0;
var posicao = 0;

function Filter(){
    document.getElementById("list-filter").style.display = "flex";
}

function Apply(){
    document.getElementById("list-filter").style.display = "none";
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

function BuyMeat1(){
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
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    valor = parseInt(document.getElementById("valor-m1").innerText);
    
    document.getElementById(NboxName).innerHTML = "Cheddar Duplo";
    document.getElementById(NboxPrice).innerHTML =  valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat2(){
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
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Rodeio Duplo";

    valor = parseInt(document.getElementById("valor-m2").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat3(){
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
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Duplo Bacon";
    valor = parseInt(document.getElementById("valor-m3").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat4(){
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
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper";
    valor = parseInt(document.getElementById("valor-m4").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuySpecial1(){
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
    img.setAttribute('src', "src/images/png/special-sandwiches/special-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper Royal";
    valor = parseInt(document.getElementById("valor-s1").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial2(){
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
    img.setAttribute('src', "src/images/png/special-sandwiches/special-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Bacon Lover";
    valor = parseInt(document.getElementById("valor-s2").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial3(){
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
    img.setAttribute('src', "src/images/png/special-sandwiches/special-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Bacon Meat";
    valor = parseInt(document.getElementById("valor-s3").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial4(){
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
    img.setAttribute('src', "src/images/png/special-sandwiches/special-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper Round";
    valor = parseInt(document.getElementById("valor-s4").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyVegetarian1(){
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
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Crispy";
    valor = parseInt(document.getElementById("valor-v1").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian2(){
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
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Duplo";
    valor = parseInt(document.getElementById("valor-v2").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian3(){
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
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Junior";
    valor = parseInt(document.getElementById("valor-v3").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian4(){
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
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "CBK";
    valor = parseInt(document.getElementById("valor-v4").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyDessert1(){
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
    img.setAttribute('src', "src/images/png/dessert/dessert-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Sundae";
    valor = parseInt(document.getElementById("valor-d1").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert2(){
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
    img.setAttribute('src', "src/images/png/dessert/dessert-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Mix Nutella";
    valor = parseInt(document.getElementById("valor-d2").innerText);
    document.getElementById(NboxPrice).innerHTML = valor;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert3(){
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
    img.setAttribute('src', "src/images/png/dessert/dessert-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Creme";
    valor = parseInt(document.getElementById("valor-d3").innerText);
    document.getElementById(NboxPrice).innerHTML = valor ;

    total = total + valor;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert4(){
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
    img.setAttribute('src', "src/images/png/dessert/dessert-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Sundae Guide";
    valor = parseInt(document.getElementById("valor-d4").innerText);
    document.getElementById(NboxPrice).innerHTML = "$"+ valor + ".00";

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
    // Remover elementos pelo ID
    console.log("funfou")
    var imgElement = document.getElementById(`box-buy${itemId}`);
    var nameElement = document.getElementById(`box-name${itemId}`);
    var priceElement = document.getElementById(`box-price${itemId}`);
    var removedElement = document.getElementById(`box-removed${itemId}`);
    
        valor = parseInt(document.getElementById(`box-price${itemId}`).innerText);
        total = total - valor;
    
        document.getElementById("saida-total").innerHTML = "$" + total + ".00";

    // Verificar se os elementos existem antes de tentar removê-los
    if (imgElement) imgElement.remove();
    if (nameElement) nameElement.remove();
    if (priceElement) priceElement.remove();
    if (removedElement) removedElement.remove();

}