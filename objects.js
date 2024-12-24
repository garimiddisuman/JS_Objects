const people = [
  {
    name: "Rahul",
    city: "Pune",
    age: 30,
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
        type: "Persian cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        favouriteActivity: ["love lounging in the sun"],
      },
      {
        type: "Persian cat",
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

const countEmployed = (people) =>
  people.filter(({ isEmployed }) => isEmployed).length;

const countPeopleWhoHasCar = (people) =>
  people.filter(({ hasCar }) => hasCar).length;

const pets = (people) => people.flatMap(({ pets }) => pets);

const countVaccinatedPets = (people) =>
  pets(people).filter(({ isVaccinated }) => isVaccinated).length;

const typeAndNameOfPets = (people) =>
  pets(people).map(({ type, name }) => ({ type, name }));

const cities = (people) => people.map(({ city }) => city);

const countHobbies = (people) =>
  people.flatMap(({ hobbies }) => hobbies).length;

const countPetsOfPeopleWhoAreUnemployed = function (people) {
  const unEmployed = people.filter(({ isEmployed }) => !isEmployed);
  return pets(unEmployed).length;
};

const average = (numbers) => {
  const sum = numbers.reduce((x, y) => x + y, 0);
  return sum / numbers.length;
};

const averageOfAges = (people) => average(people.map(({ age }) => age));

const CSEStudiedPeople = (people) =>
  people.filter(({ education }) => "Computer Science" === education);

const CSEStudiedPeopleCount = (people) => CSEStudiedPeople(people).length;

const CSEStudiedPeoplePetsCount = (people) =>
  pets(CSEStudiedPeople(people)).length;

const moreThanOnePetPeopleCount = (people) =>
  people.filter(({ pets }) => pets.length > 1).length;

const petsAssosiatedFavouriteActivities = (people) => {
  const petsWithActivity = pets(people).filter((pet) => pet.favouriteActivity);
  return petsWithActivity.map(({ name }) => name);
};

const animalsBelongsToPeopleInBangloreOrChennai = (people) => {
  const peopleLivesInBngOrChennai = people.filter(
    ({ city }) => city in { Bangalore: true, Chennai: true }
  );

  return pets(peopleLivesInBngOrChennai).map(({ name }) => name);
};

const vaccinatedPetsBelongsToPeopleDoNotOwnACar = (people) => {
  const peopleDoNotOwnACar = people.filter(({ hasCar }) => !hasCar);
  return pets(peopleDoNotOwnACar).length;
};

const countMoreThanTwoHobbies = (people) =>
  people.filter(({ hobbies }) => hobbies.length > 2).length;

const youngest = (younger, pet) => (younger.age > pet.age ? pet : younger);

const youngestPet = (people) => {
  const petsAgeAndNames = pets(people).map(({ name, age }) => ({ name, age }));

  return petsAgeAndNames.reduce(youngest);
};

const individualDoNotOwnAnyPets = (people) =>
  people.filter((person) => !person.pets);

const countCitiesStartsWithB = (people) =>
  people.filter(({ city }) => city.at(0) === "B").length;

const getOccurences = (wordsOccurence, element) => {
  wordsOccurence[element] = (wordsOccurence[element] || 0) + 1;
  return wordsOccurence;
};

const mostOccurence = ([word1, count1], [word2, count2]) =>
  count1 < count2 ? [word2, count2] : [word1, count1];

const mostCommonTypePet = (people) => {
  const petTypes = pets(people).map(({ type }) => type);
  const occurrences = petTypes.reduce(getOccurences, {});
  return Object.entries(occurrences).reduce(mostOccurence);
};

const countEquals = ([reference, count], element) =>
  reference.includes(element) ? [reference, count + 1] : [reference, count];

const countSharingHobbiesWithRamesh = (people) => {
  const hobbiesWithOutRamesh = people
    .filter((person) => !(person.name === "Ramesh"))
    .flatMap((person) => person.hobbies);

  const rameshHobbies = people.find(
    (person) => person.name === "Ramesh"
  ).hobbies;

  return hobbiesWithOutRamesh.reduce(countEquals, [rameshHobbies, 0])[1];
};

const getPeopleNameAndBookName = (array, person) => {
  const books = person.hobbies.filter((hobby) => hobby.startsWith("Reading"));

  array.push({ name: person.name, books });
  return array;
};

const nameAndTypeOfBookAreMentionedAsInterests = (people) => {
  const listOfReadingPeople = people.filter((person) =>
    person.hobbies.join("").includes("Reading")
  );

  return listOfReadingPeople.reduce(getPeopleNameAndBookName, []);
};

/*---------------- TESTING SECTION --------------------------*/
const display = (fn) => console.log("\n  ", fn.name, "->", fn(people));

const testsFrom1To10 = function () {
  const fun1 = [
    countEmployed,
    countPeopleWhoHasCar,
    countVaccinatedPets,
    typeAndNameOfPets,
    cities,
    countHobbies,
    countPetsOfPeopleWhoAreUnemployed,
    averageOfAges,
    CSEStudiedPeopleCount,
    nameAndTypeOfBookAreMentionedAsInterests,
  ];

  fun1.map(display);
};

const testsFrom11To20 = function () {
  const fun2 = [
    CSEStudiedPeoplePetsCount,
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

  fun2.map(display);
};

const testAll = function () {
  testsFrom1To10();
  testsFrom11To20();
};

testAll();
