const mass = [0, 0, 0, 0, 0, 0]
const cube = document.querySelector('.cube')
const statistic = document.querySelector('.statistic')

cube.addEventListener('click', () => {
    const count = getRandomInt(1, 7)
    mass[count - 1] += 1
    cube.style.backgroundImage = `url(Dice${count}.png)`
    statistic.innerHTML = mass
})
function getRandomInt(min, max) {
    min = Math.ceil(1)
    max = Math.floor(7)
    return Math.floor(Math.random(1, 7) * (max - min)) + min //Максимум не включается, минимум включается
}
