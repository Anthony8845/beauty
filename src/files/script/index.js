
const push = document.querySelector('.pushMe')
const listMenu = document.querySelector('#ilistMenu')

push.addEventListener('click', (e) => {
    console.log(listMenu.classList.contains('active'))
    if(!listMenu.classList.contains('active')) {
        listMenu.classList.add('active')
    } else {
        listMenu.classList.remove('active')
    }
    
})