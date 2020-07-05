// botão do menu com javascript puro

let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');
botao.addEventListener("click", abreFechaMenu);
function abreFechaMenu(evento){
    menuPrincipal.classList.toggle('menu-principal--fechado');
}

// botão do menu com JQUERY

// $('.menu-principal__btn').click(function(){
//     $('.menu-principal').toggleClass('menu-principal--fechado');
// });

//slide depoimentos

$('.depoimento__caixa').slick();
