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

