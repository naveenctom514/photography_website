

let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let photographers = document.getElementById('photographers').value;
    let hours = document.getElementById('hours').value;

    let finalcost = document.getElementById('finalcost').value;
    document.getElementById('finalcost').value = (parseFloat(hours) + parseFloat(photographers)) * 100;

})
