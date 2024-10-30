function excludingVatPrice(price){
    if (price === null) {
        return -1;
    }
    let priceWithoutVAT = (price/1.15).toFixed(2);
    
    return priceWithoutVAT;
}
console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));
