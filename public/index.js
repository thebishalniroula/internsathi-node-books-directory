const addBtn = document.getElementById("addBtn");
const submitBtn = document.getElementById("submit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const publishYear = document.getElementById("publishYear");
const msg = document.getElementById("message");
const showAll = document.getElementById("showall");

addBtn.onclick = (e) => {
  e.preventDefault();
  const newInput = document.createElement("input");
  newInput.className = "authors";
  addBtn.remove();
  authorsContainer.appendChild(newInput);
  authorsContainer.appendChild(addBtn);
};

submitBtn.onclick = async (e) => {
  e.preventDefault();
  const authorsCollection = document.getElementsByClassName("authors");
  const authors = Array.from(authorsCollection).map((item) => item.value);
  if (
    title.value &&
    description.value &&
    publishYear.value &&
    authors.length > 0
  ) {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        publishYear: publishYear.value,
        authors,
      }),
    });
    const data = await res.json();
    if (data?.success) {
      msg.classList.add("succcess");
      msg.innerHTML = "Submitted successfulluy";
      showAllBooks();
      title.value = "";
      description.value = "";
      publishYear.value = "";
      Array.from(authorsCollection).forEach((item, index) => {
        if (index === 0) {
          item.value = "";
        } else {
          item.remove();
        }
      });
    } else {
      msg.classList.add("error");
      msg.innerHTML = "Could not submit.";
      setTimeout(() => (msg.innerHTML = ""), 1500);
    }
  } else {
    msg.classList.add("error");
    msg.innerHTML = "Recheck all fields";
    setTimeout(() => (msg.innerHTML = ""), 1500);
  }
};

showAll.onclick = showAllBooks;

async function showAllBooks() {
  const res = await fetch("/api/book", {
    method: "GET",
  });
  if (res.ok) {
    const data = await res.json();
    const pre = document.getElementById("json");
    pre.innerText = JSON.stringify(data.data, undefined, 2);
  }
}
