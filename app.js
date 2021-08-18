function updateProductQuantity(product, isIncreasing) {
    const productQuantityField = document.getElementById(product + '-quantity');
    const productQuantity = productQuantityField.value;

    if (isIncreasing) {
        productQuantityField.value = parseInt(productQuantity) + 1;
    }
    else if (productQuantity > 0) {
        productQuantityField.value = parseInt(productQuantity) - 1;
    }

    // update case and phone prices
    const casePriceField = document.getElementById("case-price");
    const phonePriceField = document.getElementById('phone-price');

    if (product == 'case') {
        casePriceField.innerText = productQuantityField.value * 59;
    }
    else if (product == 'phone') {
        phonePriceField.innerText = productQuantityField.value * 1219;
    }

    // update subtotal, tax and total-price fields
    const subTotalField = document.getElementById('sub-total');
    const taxField = document.getElementById('tax-amount');
    const totalPriceField = document.getElementById('total-price');

    subTotalField.innerText = parseInt(phonePriceField.innerText) + parseInt(casePriceField.innerText);

    taxField.innerText = parseInt(subTotalField.innerText) / 10;

    totalPriceField.innerText = parseInt(subTotalField.innerText) + parseFloat(taxField.innerText);

}
// handle phone plus and minus events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductQuantity('phone', true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductQuantity('phone', false);
});


// handle case plus and minus events 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductQuantity('case', true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductQuantity('case', false);
});
