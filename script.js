let mainSection = document.querySelector('.main_section')
let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let card3 = document.querySelector('.card3')
let card4 = document.querySelector('.card4')
let card5 = document.querySelector('.card5')
let card6 = document.querySelector('.card6')
let kelompok1 = document.querySelector('.kelompok1')
let kelompok2 = document.querySelector('.kelompok2')
let kelompok3 = document.querySelector('.kelompok3')
let kelompok4 = document.querySelector('.kelompok4')
let kelompok5 = document.querySelector('.kelompok5')
let kelompok6 = document.querySelector('.kelompok6')
let btnTeam = document.querySelector("#btnTeam")


card1.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok1.classList.remove("hide")
    btnTeam.innerHTML = "Team 1"

});
card2.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok2.classList.remove("hide")
    btnTeam.innerHTML = "Team 2"
});
card3.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok3.classList.remove("hide")
    btnTeam.innerHTML = "Team 3"
});
card4.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok4.classList.remove("hide")
    btnTeam.innerHTML = "Team 4"
});
card5.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok5.classList.remove("hide")
    btnTeam.innerHTML = "Team 5"
});
card6.addEventListener('click', e => {
    mainSection.classList.add("hide")
    kelompok6.classList.remove("hide")
    btnTeam.innerHTML = "Team 6"
});