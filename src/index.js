console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

const breedList = document.querySelector("#dog-breeds");

const dogImgContainer = document.querySelector("#dog-image-container");


//challenges
document.addEventListener('DOMContentLoaded', function() {
//fetch images
function dogImage() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
    return images.message.forEach(imgDog => imgRender(imgDog))
    });
}
dogImage();
//fetch list
function fetchDog () {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedResults => {
    breeds = Object.keys(breedResults.message);
    renderDogBreed(breeds);
function letterListener () {
    let dogBreedDropdown = document.querySelector("#breed-dropdown");
    dogBreedDropdown.addEventListener("change",(e) =>{
 //letter filter
    function letterFilter(start) {
     renderDogBreed(breeds.filter(breed => breed.startsWith(start)));
    }
    letterFilter(e.target.value);
    });
  }
letterListener();
});
}
fetchDog();
//image container
function imgRender(dogs) {
    let image = document.createElement("img");
    image.src = dogs;
    image.style.alignItems = "flex";
    image.style.padding = "20px";
    dogImgContainer.appendChild(image);
};
// imgRender(dogs)
//render dog breed -ul
function renderDogBreed (breeds) {
    removeElement(breedList);
    breeds.forEach((breed)=>{
        //pointer on click and color change update
        let list =  document.createElement("li");
        list.innerText = breed;
        list.style.cursor = "pointer";
        breedList.appendChild(list);
        list.addEventListener("click", (e)=>{
            e.target.style.color = "green";
        });
    })
}
function removeElement(element) {
    let childElement = element.lastElementChild;
    while (childElement) {
      element.removeChild(childElement);
      childElement = element.lastElementChild;
    }
}

});
