addEventListener('click', (event) => {
    const { target } = event
    if (!target.matches('button') || !target.id) return
    if (!target.id === 'toggle-button') return
    
    const element = document.getElementsByClassName('toggle-box')[0]
    element.classList.toggle('collapsed')
})

window.onload = function (){

    const menu_btn = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function (){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}