const mob_menu = document.querySelector('.menu_mobile');
const close_mob_menu = document.querySelector('.close_btn');
const open_mob_menu = document.querySelector('.burger_mobile')
console.log(open_mob_menu);
close_mob_menu.addEventListener('click', ()=>{
    mob_menu.classList.add('hide');
    console.log(mob_menu.classList)
})
open_mob_menu.addEventListener('click', ()=>{
    mob_menu.classList.remove('hide');
    console.log(mob_menu.classList)
})
