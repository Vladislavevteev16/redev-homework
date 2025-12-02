export const DOG_API = {
  BASE_URL: "https://dog.ceo/api",

  getAllDogs: async function () {
    try {
      const response = await fetch(`${this.BASE_URL}/breeds/list/all`);
      if (!response.ok) {
        throw new Error("Ошибка получения списка собак");
      }
      const { message } = await response.json();

      return Object.keys(message);
    } catch (error) {
      console.log(error);
    }
  },
  getRandomDogsImage: async function (breed, count) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/breed/${breed}/images/random/${count}`
      );
      if (!response.ok)
        throw new Error("Ошибка получения случайной породы собаки");

      const { message } = await response.json();

      return message;
    } catch (error) {
      console.log(error.message);
    }
  },
};
