var superHeroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"]
    }
  ];

function superPower(a,b){
	var power = a.find(function(hero){
		return hero.name == b;
    });
    if (power){

    output = power.powers;
   final = output.toString();
    x=final.replace(/,/g,', ');
    return x;
}
}

console.log(superPower(superHeroes,'Molecule Man'));
//console.log(superPower(superHeroes,''));