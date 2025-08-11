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
let btnBack = document.querySelector(".btnBack")
let foodTag1 = document.querySelector(".foodEach1")
let foodTag2 = document.querySelector(".foodEach2")
let foodTag3 = document.querySelector(".foodEach3")
let foodTag4 = document.querySelector(".foodEach4")
let foodTag5 = document.querySelector(".foodEach5")
let foodTag6 = document.querySelector(".foodEach6")
let foodTag7 = document.querySelector(".foodEach7")
let drinkEach1 = document.querySelector(".drinkEach1")
let drinkEach2 = document.querySelector(".drinkEach2")
let drinkEach3 = document.querySelector(".drinkEach3")
let drinkEach4 = document.querySelector(".drinkEach4")
let drinkEach5 = document.querySelector(".drinkEach5")


card1.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok1.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 1"
});
card2.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok2.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 2"
});
card3.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok3.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 3"
});
card4.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok4.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 4"
});
card5.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok5.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 5"
});
card6.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok6.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 6"
});

if(mainSection.classList.contains('view')){
    btnBack.classList.add('hide')
}

btnBack.addEventListener("click", e => {
    window.location.reload();
})

foodTag1.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok1.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 1"
})
foodTag2.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok2.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 2"
})
foodTag3.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok3.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 3"
})
foodTag4.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok4.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 4"
})
foodTag5.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok4.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 4"
})
foodTag6.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok5.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 5"
})
foodTag7.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok6.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 6"
})

drinkEach1.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok1.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 1"
})
drinkEach2.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok2.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 2"
})
drinkEach3.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok3.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 3"
})
drinkEach4.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok5.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 5"
})
drinkEach5.addEventListener('click', e => {
    mainSection.classList.add("hide")
    mainSection.classList.remove("view")
    kelompok6.classList.remove("hide")
    btnBack.classList.remove('hide')
    btnTeam.innerHTML = "Team 6"
})