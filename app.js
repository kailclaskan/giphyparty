async function getGif(key){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${key}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    //Added a random number to retrieve a random image from the array
    //of 50 that appears with the above URL.
    const randNum = Math.floor(Math.random() * 50);
    //When the random gif is loaded grab the URL to use as src.
    const imgUrl = res.data.data[randNum].images.fixed_height.url;
    console.log(imgUrl);
    //Create gif on page using Src above.
    createGif(imgUrl);
}
const searchQuery = document.querySelector('#searchterm');
const form = document.querySelector('form');
function createGif(url){
    const img = document.createElement('img');
    const imgCont = document.querySelector('#gifs');
    //Added the url to the src attribute.
    img.setAttribute('src', url);
    //Added bootstrap to the html to make it look nicer.
    //Added margin
    img.className = 'my-2 col-3';
    //Added the img to the page.
    imgCont.append(img);
    //Cleared the search term.
    //Found it was fun to continue randomly selecting the same one,
    //but felt it was cleaner to clear the search term.
    searchQuery.value = '';
}
function removeAllGifs(){
    //Remove ALL gifs on the page.
   $('#gifs').empty(); 
}
form.addEventListener('click', function(e){
    //Prevent page from reloading.
    e.preventDefault();
    //If the button id is search
    if(e.target.id === 'search'){
        //use the search term to find a gif.
        getGif(searchQuery.value);
    }
    //If the button ID is remove
    if(e.target.id === 'remove'){
        //Remove all gifs from the page.
        removeAllGifs();
    }
});