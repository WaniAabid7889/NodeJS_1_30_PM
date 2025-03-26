async function getUsers() {
  let response = await fetch("http://jsonplaceholder.typicode.com/posts");
  return (result = await response.json());
}

async function getUserById(id) {
  return myUser.find((val) => val.id == id);
}
module.exports = {
  getUsers,
  getUserById,
};

let myUser = [
  {
    id: 1,
    title: "est et quae odit qui non",
    body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
  },
  {
    id: 2,
    title: "quasi id et eos tenetur aut quo autem",
    body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
  },
];
