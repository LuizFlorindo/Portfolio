// ALTERAR ID DA URL
let URL_ANTIGA = window.location.href; let URL_NOVA = URL_ANTIGA.split("/"); URL_NOVA.pop(); URL_NOVA.push("index.html#home"); URL_NOVA = URL_NOVA.join("/"); window.location.replace(URL_NOVA);
// NAVBAR
function open_or_close_navbar() { document.getElementById("menu-navbar").classList.toggle("active-navbar"); }
// COPIAR EMAIL
var content_copy; var modal = document.getElementById("modal"); function copy_text(text) { content_copy = document.createElement("input"); content_copy.type = "text"; if (text == 'email') { content_copy.value = "devluizsilvaofc@gmail.com"; } else if (text == 'num') { content_copy.value = "+55 85 99236-1807"; } if (navigator.clipboard.writeText(content_copy.value)) { modal.style.display = "flex"; setTimeout(() => { if (modal.style.display == "flex") { modal.style.display = "none"; } }, 1500); } }

//EFEITO DE ENTRADA E SAIDA DEELEMENTOS
const target = document.querySelectorAll('[data-anime]');

function animeScroll() {
    const windowHeight = window.innerHeight - 25;

    target.forEach(function (element){
        if((element.getBoundingClientRect().top + 50) < windowHeight){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate")
        }
    });
}

window.addEventListener('scroll', animeScroll);
window.addEventListener("load", animeScroll);