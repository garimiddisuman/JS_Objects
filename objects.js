const people = [
  {
    name: "Rahul",
    city: "Pune",
    age: null,
    hasCar: true,
    isEmployed: true,
    doesPreferPublicTransport: false,
    profession: "Software engineer",
    education: "Computer Science",
    hobbies: ["Playing chess", "Gardening"],
    hasPet: true,
    pets: [
      {
        type: "Dog",
        breed: "Golden Retriever",
        name: "Max",
        age: 4,
        isVaccinated: true,
        favouriteActivity: ["Playing fetch in the park"],
      },
    ],
  },
  {
    name: "Ananya",
    city: "Bangalore",
    age: 30,
    hasCar: false,
    isEmployed: false,
    doesPreferPublicTransport: true,
    profession: "Graphic designer",
    education: "Computer Science",
    hobbies: ["Cooking", "Experiments with Italian recipes"],
    hasPet: true,
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        isVaccinated: true,
        favouriteActivity: ["Knows over 20 phrases", "Mimics"],
      },
    ],
  },
  {
    name: "Ramesh",
    city: "Jaipur",
    age: 45,
    hasCar: false,
    isEmployed: false,
    doesPreferPublicTransport: true,
    profession: "Bussiness owner",
    hobbies: ["Rose garden", "Reading historical fiction", "Gardening"],
    hasPet: true,
    pets: [
      {
        type: "Persian cats",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        favouriteActivity: ["love lounging in the sun"],
      },
      {
        type: "Persian cats",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        favouriteActivity: ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    city: "Chennai",
    age: 28,
    hasCar: false,
    isEmployed: false,
    doesPreferPublicTransport: true,
    profession: "Professional dancer",
    hobbies: ["modern fantasy novels", "binge-watching sci-fi shows"],
    hasPet: true,
    pets: [
      {
        type: "Rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        favouriteActivity: [
          "enjoys hopping around backyard",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

const countCurrentlyEmployed = (people) =>
  people.filter((person) => person.isEmployed).length;

const countPeopleWhoHasCar = (people) =>
  people.filter((person) => person.hasCar).length;

const pets = (people) => people.flatMap((person) => person.pets);

const countFullyVaccinatedPets = (people) => {
  const vaccinatedPets = pets(people).filter((pet) => pet.isVaccinated);

  return vaccinatedPets.length;
};

const getNameAndType = function (pet) {
  return { type: pet.type, name: pet.name };
};

const nameAndTypeOfAnimal = (people) => pets(people).map(getNameAndType);

const cities = (people) => people.map((person) => person.city);

const hobbies = (people) => people.flatMap((person) => person.hobbies);

const hobbiesCount = (people) => hobbies(people).length;

const numberOfPets = (person) => person.pets.length;

const add = (x, y) => x + y;

const petCountOfPeopleWhoAreUnemployed = function (people) {
  const unEmployed = people.filter((person) => !person.isEmployed);
  return unEmployed.map(numberOfPets).reduce(add, 0);
};

const avg = (numbers) => {
  const sum = numbers.reduce(add, 0);
  return sum / numbers.length;
};

const averageOfAges = (people) => avg(people.map((person) => person.age));

const CSEStudiedPeople = (people) =>
  people.filter((person) => "Computer Science" === person.education);

const CSEStudiedPeopleCount = (people) => CSEStudiedPeople(people).length;

const CSStudiedPeoplePetsCount = (people) =>
  CSEStudiedPeople(people).map(numberOfPets).reduce(add, 0);

const moreThanOnePetPeopleCount = (people) =>
  people.filter((person) => numberOfPets(person) > 1).length;

const petsAssosiatedFavouriteActivities = function (people) {
  const petsWithActivity = pets(people).filter((pet) => pet.favouriteActivity);
  return petsWithActivity.map((pet) => pet.name);
};

const animalsBelongsToPeopleInBangloreOrChennai = function (people) {
  const whoLivesInBngOrChennai = people.filter((person) =>
    ["Bangalore", "Chennai"].includes(person.city)
  );

  return pets(whoLivesInBngOrChennai).map((pet) => pet.name);
};

const vaccinatedPetsBelongsToPeopleDoNotOwnACar = function (people) {
  const peopleDoNotOwnACar = people.filter((person) => !person.hasCar);
  return peopleDoNotOwnACar.map(numberOfPets).reduce(add, 0);
};

const countMoreThanTwoHobbies = (people) =>
  people.filter((person) => person.hobbies.length > 2).length;

const youngest = function (younger, pet) {
  return younger.age > pet.age ? pet : younger;
};

const youngestPet = function (people) {
  const petsAgeAndNames = pets(people).map(function (pet) {
    return { name: pet.name, age: pet.age };
  });

  return petsAgeAndNames.reduce(youngest);
};

const individualDoNotOwnAnyPets = (people) =>
  people.filter((person) => !person.pets);

const countCitiesStartsWithB = (people) =>
  people.filter((person) => person.city.at(0) === "B").length;

const getOccurences = function (wordsOccurence, element) {
  wordsOccurence[element] = (wordsOccurence[element] || 0) + 1;
  return wordsOccurence;
};

const mostOccurence = function (wordCount) {
  let mostOccurring = null;
  let maxCount = 0;

  for (const word in wordCount) {
    if (wordCount[word] > maxCount) {
      maxCount = wordCount[word];
      mostOccurring = word;
    }
  }

  return mostOccurring;
};

const mostCommonTypePet = function (people) {
  const petTypes = pets(people).map((pet) => pet.type);
  const occurrences = petTypes.reduce(getOccurences, {});
  return mostOccurence(occurrences);
};

const countEquals = function ([reference, count], element) {
  return reference.includes(element)
    ? [reference, count + 1]
    : [reference, count];
};

const countSharingHobbiesWithRamesh = function (people) {
  const hobbiesWithOutRamesh = people
    .filter((person) => !(person.name === "Ramesh"))
    .flatMap((person) => person.hobbies);

  const rameshHobbies = people.find(
    (person) => person.name === "Ramesh"
  ).hobbies;

  return hobbiesWithOutRamesh.reduce(countEquals, [rameshHobbies, 0])[1];
};

const getBookName = function (array, person) {
  const book = [...person.hobbies.filter((x) => x.startsWith("Reading"))];
  array.push({ name: person.name, books: book });

  return array;
};

const nameAndTypeOfBookAreMentionedAsInterests = function (people) {
  const listOfReadingPeople = people.filter((person) =>
    person.hobbies.join(" ").includes("Reading")
  );

  return listOfReadingPeople.reduce(getBookName, []);
};

/*---------------- TESTING SECTION --------------------------*/
const test = (fn) => console.log("\n  ", fn.name, "->", fn(people));

const testsFrom1To10 = function () {
  const fun1 = [
    countCurrentlyEmployed,
    countPeopleWhoHasCar,
    countFullyVaccinatedPets,
    nameAndTypeOfAnimal,
    cities,
    hobbies,
    hobbiesCount,
    petCountOfPeopleWhoAreUnemployed,
    averageOfAges,
    CSEStudiedPeopleCount,
    nameAndTypeOfBookAreMentionedAsInterests,
  ];

  fun1.map(test);
};

const testsFrom11To20 = function () {
  const fun2 = [
    CSStudiedPeoplePetsCount,
    moreThanOnePetPeopleCount,
    petsAssosiatedFavouriteActivities,
    animalsBelongsToPeopleInBangloreOrChennai,
    vaccinatedPetsBelongsToPeopleDoNotOwnACar,
    countMoreThanTwoHobbies,
    youngestPet,
    individualDoNotOwnAnyPets,
    countCitiesStartsWithB,
    mostCommonTypePet,
    countSharingHobbiesWithRamesh,
  ];

  fun2.map(test);
};

const testAll = function () {
  testsFrom1To10();
  testsFrom11To20();
};

testAll();
