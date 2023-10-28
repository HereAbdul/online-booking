const sidebar = document.querySelector('.sidebar'),
    btn = document.getElementById('menu-btn');
btn.addEventListener('click', () => {
    sidebar.classList.toggle("close");
})

function updateCheckboxes(checkbox) {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");

    if (checkbox == checkbox1) {
        checkbox2.checked = !checkbox1.checked;
    } else {
        checkbox1.checked = !checkbox2.checked;
    }
}

const airline = document.getElementById('airline');
const bus = document.getElementById('bus');
const airlineContent = document.getElementById('airline-content');
const busContent = document.getElementById('bus-content');
const title =document.getElementById('title');
const desc =document.getElementById('desc');
const moveTitle =document.getElementById('move-title');
const movedesc =document.getElementById('move-desc');

airline.addEventListener('click', () => {
    if (airlineContent.style.display = 'none') {
        airlineContent.style.display = 'block'
        busContent.style.display = 'none'
        airline.classList.add('active')
        bus.classList.remove('active')
        title.innerText='Airlines'
        desc.innerText='Airlines'
        moveTitle.innerText='Airlines'
        movedesc.innerText='Airlines'
    }
})
bus.addEventListener('click', () => {
    if(busContent.style.display = 'none'){
        busContent.style.display = 'block'
        airlineContent.style.display = 'none'
        airline.classList.remove('active')
        bus.classList.add('active')
        title.innerText='Bus'
        desc.innerText='Buses'
        moveTitle.innerText='Bus'
        movedesc.innerText='Buses'
      
    }
})








