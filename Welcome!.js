function greet(language) {
	let hi = { 
  "english": "Welcome",
  "czech": "Vitejte",
  "danish": "Velkomst", 
  "dutch": "Welkom",
  "estonian": "Tere tulemast",
  "finnish": "Tervetuloa",
  "flemish": "Welgekomen",
  "french": "Bienvenue",
  "german": "Willkommen",
  "irish": "Failte",
  "italian": "Benvenuto",
 "latvian": "Gaidits",
 "lithuanian": "Laukiamas",
 "polish": "Witamy",
 "spanish": "Bienvenido",
 "swedish": "Valkommen",
 "welsh": "Croeso"
};
if(hi[language]) {
    hi[language];
} else if(language === "IP_ADDRESS_INVALID" || language === "IP_ADDRESS_NOT_FOUND" || language === "IP_ADDRESS_REQUIRED"){
    hi[language] =hi['english'];
}
return `${hi[language]}`;
}

console.log(greet('english')); // 'Welcome'
console.log(greet('dutch')); // 'Welkom'
console.log(greet('IP_ADDRESS_INVALID')); // 'Welcome'


/*
function greet(language) {
  
	switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
    }
  
}*/