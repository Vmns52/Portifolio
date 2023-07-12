
/* Animação do menu */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {   
            console.log();  
            link.style.animation
                ? (link.style.animation ="")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick(){
        
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();

        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar('.mobile-menu', '.nav-list', '.nav-list li');

mobileNavbar.init();

/* Animação de Digitação */

const myName = document.querySelector(`.myName`);

function digitacao(texto, contador){
    if(contador < texto.length){
        setTimeout(() => {
            myName.textContent += texto.charAt(contador);
            contador++;
            digitacao(texto, contador);
        }, 120);
    }
}
digitacao(`Vitor Manoel`, 0)

/*Função para mostrar a senha*/
function mostrarSenha(){
    let inputpass = document.getElementById('password')
    let btnShowpass = document.getElementById('btn-senha')

    if(inputpass.type === 'password'){
        inputpass.setAttribute('type', 'text')
        btnShowpass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputpass.setAttribute('type', 'password')
        btnShowpass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}