const displaymenu = document.querySelector('.display-menu');
const menuicon = document.querySelectorAll('.menu');

// toggle the menu icon on smaller screen sizes
document.querySelector('.menu-container').addEventListener('click', (e) =>{
        const clickedMenu = e.target.closest('.menu');

        if(clickedMenu){
            menuicon.forEach(icon =>{
                icon.classList.remove('hidden');
            });
            clickedMenu.classList.add('hidden');
            displaymenu.classList.toggle('hidden');
        }
})

// toggle active state for the links
const links = document.querySelectorAll('.link');

const handleClickedBtn = () => {
    document.querySelector('.display-menu').addEventListener('click', (event) =>{
        const clickedLink = event.target.closest('.link');
        if(clickedLink){
            links.forEach(link =>{
                link.classList.remove('active');
                
            });
            clickedLink.classList.add('active');
        }
    })
};
handleClickedBtn();
