const country = prompt('Enter you country: ').toLowerCase()
let price

switch(country) {
    case 'china':
        price = 100
        break
    case 'chile':
        price = 250
        break
    case 'australia':
        price = 170
        break
    case 'india':
        price = 80
        break
    case 'jamaica':
        price = 120
        break
}

if (price) {
    alert(`Delivery to ${country} costs ${price} credits`)
} else {
    alert('We do not deliver to your country')
}