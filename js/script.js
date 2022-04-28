// API request
$(".search-button").click(function () {
  let userInput = $(".search-term").val();
  let giphyAPIURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  fetch(giphyAPIURL)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(giphyAPIURL);
      console.log(data);
      //console.log(data.data[0].images.original.url);
      let randomNum = Math.floor(Math.random() * data.data.length);
      $(".main").append(
        `<img src=${data.data[randomNum].images.original.url}/>`
      );
    });
});
