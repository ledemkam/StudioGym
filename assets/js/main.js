const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

//für fotogalerie und modalfenster

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        imgIndex.src = `./assets/img/img${e.target.getAttribute('data-index')}-equip.jpg`;
        modaleEquipement.classList.add('active-modale');

    })
})

modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
})


// Anim navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})