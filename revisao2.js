// 1)

var modeloCarro = "Hatch"

var veiculos = ["Sedan", "Motocicletas", "Caminhonetes"]


switch(modeloCarro, veiculos){
    case "Hatch":
        console.log("Compra efetuada com sucesso");
        break;
        case "Sedan", "Motocicletas", "Caminhonetes":
            console.log("Tem certeza que não prefere este modelo?");
            break;
            default:
                console.log("Não trabalhamos com este tipo de automóvel aqui")
}

// 3)

var numero = 3

if(3 > 0){
    console.log("Número Positivo")
}
else{
    console.log("Número Negativo")
}
