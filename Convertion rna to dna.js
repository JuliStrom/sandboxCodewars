/*Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.*/
function DNAtoRNA(dna) {
    let newRNA = dna.split('');
    for(let i = 0; i < dna.length; i++) {
    if(newRNA[i] === "T") {
        newRNA[i] = "U"
    }
    } return newRNA.join('');
}
/*function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}*/

console.log(DNAtoRNA("TTTT")); // "UUUU")
console.log(DNAtoRNA("GCAT")); // "GCAU")
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC")