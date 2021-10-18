export const getPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=200"
    //   "https://pokeapi.co/api/v2/pokemon/ditto"
    );
    return response;
  };

 export function SetLikes(users) {
    const newUsers = users.map((user) => {
      user.like = false;
    return newUsers
    })
}