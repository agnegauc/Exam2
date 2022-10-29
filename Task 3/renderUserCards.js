const renderUserCards = (users) => {
  const usersContainer = document.body.querySelector("#output");
  usersContainer.textContent = "";

  users.forEach((user) => {
    const image = document.createElement("img");
    const login = document.createElement("h4");
    const userCardContainer = document.createElement("div");

    image.src = user.avatar_url;
    login.textContent = `login: ${user.login}`;

    image.setAttribute("alt", "User avatar");
    userCardContainer.setAttribute("class", "userCard");

    userCardContainer.append(image, login);
    usersContainer.append(userCardContainer);
  });
};

export { renderUserCards };
