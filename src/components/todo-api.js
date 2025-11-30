const userLogin = {
  email: "vbabangida@bk.ru",
  password: "VladEvteev$1996",
};

export class TodoAPI {
  static getToken = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLogin),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка в получении токена");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  static getTasks = async (token) => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/todos",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка загрузки тасок");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
}
