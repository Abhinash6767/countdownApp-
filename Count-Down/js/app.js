const finalDate = '1 April 2023 12:00:00 AM';

document.getElementById('finalDate').innerHTML = finalDate;

const inputs = document.querySelectorAll('input');
const saleStart = document.querySelector('#saleStart');

function countDownStart() {
    const end = new Date(finalDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0) {
        document.querySelector('#saleStart').textContent = 'WoooW, Sale is live 🎉🎉🎉🥳'
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

setInterval(()=>{
    countDownStart()
},1000)
