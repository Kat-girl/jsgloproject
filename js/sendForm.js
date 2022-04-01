const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formDate = new FormData(form);
    const body = {};
    formDate.append("form", form.classList.value);
    formDate.forEach((value, field) => {
      body[field] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        alert("Success");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error " + error.message);
      })
      .finally(() => {
        form.reset();
      });
  });
});
