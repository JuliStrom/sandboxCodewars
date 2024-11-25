/*mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free*/
function mango(quantity, price){
    if(quantity > 2){
        let trio = Math.floor(quantity / 3) ;
     let residue = quantity - trio * 3;
     return  trio * 2 * price + residue * price;
    }
  return quantity * price;
}

/*function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}*/
console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30
console.log(mango(5, 54)); // 216
console.log(mango(10, 3)); // 35