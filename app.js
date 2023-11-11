const $gifArea = $("#gif-area");
const $searchInput = $("#search-term");
const api_key = "4xpUAW8V75a7bQguPHYKXMp4Moc0jSJE";

$("form").on("submit", async function getGIF(e) {
    e.preventDefault();
    const userInput = $searchInput.val();
    $searchInput.val("");
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key, q: userInput}});
    console.log(res);
    addGIF(res.data);
});

function addGIF(res) {
    let numResults = res.data.length;
        if (numResults) {
            const randomResult = Math.floor(Math.random() * numResults);
            const imageURL = res.data[randomResult].images.fixed_height.url;
            let $newGIF = $("<img>", {
                src: imageURL
            });
            $gifArea.append($newGIF);
        }
}

$("#remove").on("click", function() {
    $gifArea.empty();
});
