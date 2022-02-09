console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(resp2 => addImages(resp2))

    function addImages(respData){
        respData.message.forEach(e => addNewImage(e));
    }


    const dogImagesContainer = document.getElementById("dog-image-container");
    const newBreedContainer = document.getElementById("dog-breeds");
    function addNewImage(resp) {
        let newImg = document.createElement("img");

        newImg.src = resp;
                
        dogImagesContainer.appendChild(newImg);
        
    }




    fetch(breedUrl)
        .then(resp => resp.json())
        .then(resp2 => addBreeds(resp2))

    function addBreeds(data) {


        // Object.keys(data.message).forEach(key => {
        //     addNewBreed(key)
        // })


        for(key in data.message) {
            addNewBreed(key);
            console.log(key);

        }
    }

 
    function addNewBreed(test) {
        let newBreed = document.createElement("li");
        let newTextNode = document.createTextNode(test);
        newBreed.className = "breed"

        newBreed.appendChild(newTextNode);
        newBreedContainer.appendChild(newBreed);

        newBreed.addEventListener("click", () => {

            newBreed.style.color = "pink";
        })
    }



    let select = document.getElementById("breed-dropdown");
    select.addEventListener("change", function(event) {
        newBreedContainer.remove()
            .then(
        fetch(breedUrl)
            .then(resp => resp.json())
            .then(resp2 => addBreeds(resp2))

            
            function addBreeds(data) {


                // Object.keys(data.message).forEach(key => {
                //     addNewBreed(key)
                // })
        
        
                for(key in data.message) {
                    if (key.charAt(0) === event.target.value) {
                        addNewBreed(key);
                    }
        
                }
            }
        
        
    })
    

    
})