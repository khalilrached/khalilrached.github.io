const burgerShow = ()=>{
    const burgermenu = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burgermenu.addEventListener('click',()=>{
        menu.classList.toggle('menu_active');
        console.log('work!');
    });
}
const parallax = ()=>{
    const hometext = document.querySelector('.home_text');
    const homeimage = document.querySelector('.home_image');
    const webbaner = document.querySelector('.webdev_baner');
    window.addEventListener('scroll', ()=>{
        let offset = window.pageYOffset;
        homeimage.style.cssText = "top:"+(-offset*0.5)+"px;";
        webbaner.style.cssText = "display:flex;";
        if(offset==0){
            webbaner.style.cssText = "display:none;";   
        }
    });
}
parallax();
burgerShow();