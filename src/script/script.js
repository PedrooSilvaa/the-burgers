var qtd = 0;
var total = 0.0;


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

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Cheddar Duplo";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat2(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Rodeio Duplo";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat3(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Duplo Bacon";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyMeat4(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/meat-sandwiches/meat-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuySpecial1(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/special-sandwiches/special-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper Royal";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial2(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/special-sandwiches/special-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Bacon Lover";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial3(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/special-sandwiches/special-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Bacon Meat";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuySpecial4(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/special-sandwiches/special-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Whopper Round";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyVegetarian1(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Crispy";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian2(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Duplo";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian3(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Chicken Junior";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyVegetarian4(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/vegetarian-sandwiches/vegetarian-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "CBK";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}

function BuyDessert1(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/dessert-sandwiches/dessert-1.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Sundae";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert2(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/dessert-sandwiches/dessert-2.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Mix Nutella";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert3(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/dessert-sandwiches/dessert-3.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Creme";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

    document.getElementById("saida-total").innerHTML = "$" +total + ".00";
}
function BuyDessert4(){
    qtd++;
    var pai = document.getElementsByClassName("buy-grid");
    var boxImg = document.createElement('div');
    var img = document.createElement('img');
    var boxName = document.createElement('div');    
    var boxPrice = document.createElement('div');

    var NboxImg = `box-buy${qtd}`
    var NboxName = `box-name${qtd}`
    var NboxPrice = `box-price${qtd}`

    boxImg.setAttribute("id", NboxImg);
    boxName.setAttribute("id", NboxName); 
    boxPrice.setAttribute("id", NboxPrice);

    pai[0].appendChild(boxImg);
    pai[0].appendChild(boxName);
    pai[0].appendChild(boxPrice);

    boxImg.appendChild(img);
    img.setAttribute('src', "src/images/png/dessert-sandwiches/dessert-4.png");
    var imagem = document.getElementById(NboxImg).getElementsByTagName('img');
    imagem[0].style.maxWidth = "100%";

    document.getElementById(NboxName).innerHTML = "Sundae Guide";
    document.getElementById(NboxPrice).innerHTML = "$15.00";

    total = total + 15.00;

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