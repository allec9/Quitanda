const inicioPrograma = Number(prompt(`
    ======== Bem-Vindo =========
        O que deseja comprar?
    ============================
        Selecione uma opção:
    ____________________________    
    [1] - Maracuja
    [2] - Tomate
    [3] - Cupuacu
    [4] - Pitaya
    [5] - Mamona
    ____________________________
    `))

switch (fruta) {
    case 1:
        alert("Você escolheu = Maracuja! XD")
        break;
    case 2:
        alert("Você escolheu = Tomate! XD")
        break;
    case 3:
        alert("Você escolheu = Cupuacu! XD")
        break;
    case 4:
        alert("Você escolheu = Pitaya! XD")
        break;
    case 5:
        alert("Você escolheu = Mamona! XD")
        break;

    default:
        ("Essa opção não existe!!! >:( ")
        break;
}