const displaymenu = document.querySelector('.display-menu');
const menuicon = document.querySelectorAll('.menu');

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

// toggle active state
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

// loop over the icons and add an event listener
// menuicon.forEach(icon => {
//     icon.addEventListener('click', () =>{
//         displaymenu.classList.toggle('hidden');
//         icon.classList.toggle('hidden');
//     });
// });