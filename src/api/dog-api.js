export const DOG_API = {
  getAllDogs: async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok) {
        throw new Error("Ошибка получения списка собак");
      }
      const { message } = await response.json();

      return Object.keys(message);
    } catch (error) {
      console.log(error);
    }
  },
  getRandomDogsImage: async (breed, count) => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${count}`
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