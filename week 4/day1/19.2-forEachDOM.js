const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let list = document.createElement("ol");
document.querySelector("div").appendChild(list);
for (let i = 0; i < users.length; i++) {
  let name = users[i].firstName + " " + users[i].lastName;
  let itemName = document.createElement("li");
  itemName.innerText = name;
  itemName.setAttribute("id", users[i].id);
  list.appendChild(itemName);
}

list.setAttribute("style", "list-style-type: none;");
