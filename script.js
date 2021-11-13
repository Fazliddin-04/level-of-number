let num = +prompt('Bu sonning darajasini aniqlovchi dastur.\nSon kiriting')

while (isNaN(num)) {
    alert('Bu Son emas')
    num = +prompt('Son kiriting')
}

let lvl = +prompt('Darajani kiriting')

while (isNaN(lvl) || lvl == 0) {
    alert('Bu daraja bo\'lolmaydi')
    lvl = +prompt('Darajani kiriting')
}

total = num ** lvl
alert(`${num} sonining ${lvl}-darajasi: ${total}`);