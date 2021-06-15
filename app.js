const getMonth = document.querySelector('h1');
const month = document.querySelector('select');

month.addEventListener('change', (e) => {
    if (e.target.value == 'January') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'February') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'March') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'April') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'May') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'June') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'July') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'August') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'September') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'October') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'November') {
        getMonth.innerHTML = e.target.value
    } else if (e.target.value == 'December') {
        getMonth.innerHTML = e.target.value
    }
})

let currentTip = 0;

function totalTip(currentTip, newTip) {
    currentTip = currentTip + newTip;
    return currentTip
}