const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

// var creatures = [
//   { name: "Shark", habitat: "Ocean" },
//   { name: "Whale", habitat: "Ocean" },
//   { name: "Lion", habitat: "Savanna" },
//   { name: "Monkey", habitat: "Jungle" },
// ];

class Creature {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }
}
var creatures = [
  new Creature("Shark", "Ocean"),
  new Creature("Whale", "Ocean"),
];

var aquaticCreatures = creatures.filter(function (creature) {
  //   return creature.habitat == "Ocean";
  let q = "Whale";
  //   console.log(creature.name.toLowerCase().indexOf(q.toLowerCase()));
  //   return creature.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  return creature.name == q;
});

console.log(aquaticCreatures);
` `;
