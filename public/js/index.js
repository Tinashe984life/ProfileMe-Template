const dd = document.getElementById('dd');
const dd2 = document.getElementById('dd2');
const dd3 = document.getElementById('dd3');
const dd4 = document.getElementById('dd4');
const amc = document.getElementById('amc');
const wec = document.getElementById('wec');
const pc = document.getElementById('pc');
const mc = document.getElementById('mc');

dd.addEventListener('click', () => {
    amc.classList.toggle('amc');
})

dd2.addEventListener('click', () => {
    wec.classList.toggle('amc');
})

dd3.addEventListener('click', () => {
    pc.classList.toggle('amc');
})

dd4.addEventListener('click', () => {
    mc.classList.toggle('amc');
})