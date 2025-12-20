const namesList = [
  "Pavel",
  "Vadim",
  "Petya",
  "Anton",
  "Vlad",
  "Maxim",
  "Kolya",
  "Vasya",
  "Tolik",
  "Andrey",
  "Vladimir",
];

const surNamesList = [
  "Duboshitov",
  "Ivanov",
  "Petrov",
  "Sidorov",
  "Smirnov",
  "Kuznetsov",
  "Popov",
  "Vasiliev",
  "Pavlov",
  "Semenov",
  "Golubev",
  "Petuhov",
  "Shidlov",
];

export const createUserList = () => {
  const userList = [];

  for (let i = 1; i <= 103; i++) {
    const name = namesList[Math.floor(Math.random() * namesList.length)];
    const surName =
      surNamesList[Math.floor(Math.random() * surNamesList.length)];

    userList.push({ id: i, name, surName });
  }

  return userList;
};
