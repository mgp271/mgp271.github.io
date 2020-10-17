export default {
    getData: () =>
    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "be0f949ad5msh1ea408010378e42p10c7ffjsn1ad474b482c3"
        }
    }),
    // getNewData: () =>
    // fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    //     "method": "GET",
    //     "headers": {
    //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    //     "x-rapidapi-key": "be0f949ad5msh1ea408010378e42p10c7ffjsn1ad474b482c3"
    //     }
    // })
}