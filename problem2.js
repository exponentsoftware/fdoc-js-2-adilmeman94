/* problem - 2 */

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

/* a. Write a function which filter users who has  scoresGreaterThan85, */

const filterArray = (arr) => {
  const newArray = [];
  arr.map((item, index) => {
    if (item.scores > 85) {
      newArray.push(item);
    }
  });
  return newArray;
};

// console.log(filterArray(users));

//=============================================================================================//

//*b. Write a function which addUser  to the user array only if the user does not exist. */

const newuser = {
  name: "Adil",
  scores: 85,
  skills: ["HTM"],
  age: 25,
};

const addUser = (arr, newObject) => {
  const exit = arr.some((el) => el.name === newObject.name);
  if (!exit) {
    arr.push(newObject);
    return arr;
  } else {
    console.log("user is already exist");
  }
};

// console.log(addUser(users, newuser));

//=============================================================================================//

/* c. Write a function which addUserSkill which can add skill to a user only if the user exist. */

const addUserSkill = (arr, user, skill) => {
  let changeDone = false;
  arr.map((el) => {
    if (el.name === user) {
      changeDone = true;
      for (let i = 0; i < skill.length; i++) {
        el.skills.push(skill[i]);
      }
    }
  });
  changeDone ? console.log(arr, "result") : console.log("user is not exist");
};

// addUserSkill(users, "Adil", ["CSS", "JavaScript"]);

//=============================================================================================//

/* d. Write a function which editUser if the user exist in the users array. */

const editUser = (arr, user) => {
  let changeDone = false;
  arr.map((el) => {
    if (el.name === user) {
      changeDone = true;
      el.age = 20;
    }
  });
  changeDone ? console.log(arr, "result") : console.log("user is not exist");
};

// editUser(users, "John");
