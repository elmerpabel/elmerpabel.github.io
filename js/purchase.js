function fazerPedido() {

    let lengthQuantity = document.querySelectorAll(".item-quantity").length;
    let lengthName = document.querySelectorAll(".item-name").length;
    let lengthPrice = document.querySelectorAll(".item-price").length;

    var produto = [];


    for (let i = 1; i <= lengthPrice - 1; i++) {
        let name = document.querySelectorAll(".item-name")[i].innerHTML;
        let price = document.querySelectorAll(".item-price")[i].innerHTML;
        let quantity = document.querySelectorAll(".item-quantity")[i].innerHTML;
        let cor = document.querySelectorAll(".item-cor")[i].innerHTML;
        let tamanho = document.querySelectorAll(".item-tamanho")[i].innerHTML;

        produto.push({name: name, cor: cor, tamanho: tamanho, quantity: quantity, price: price});
    }

    let produtos = "";

    let inicio = "Olá estou comprando pela Simple Store BR. ";

    for (var key in produto) {
        produtos += " QUIERO COMPRAR: " + produto[key].quantity + " " + produto[key].name + " DE COLOR " + produto[key].cor + " EN TALLA " + produto[key].tamanho + " POR " + produto[key].price + " CADA.";
    }


    let valor = document.querySelector(".simpleCart_grandTotal").innerHTML;
    let pedido = " Mi pedido total fue: " + valor + ".";

    //INSIRA SEU TELEFONE NO FORMATO 55dddNumeroTelefone - EX:5511999999999
    let msg =  "https://api.whatsapp.com/send?phone=51949755480&text=" + encodeURIComponent(inicio + produtos + " " + pedido);

    document.querySelector(".button-whats").href = msg;
    
}