const imagePaths = ['images/01.webp' , 'images/02.webp', 'images/03.webp', 'images/04.webp', 'images/05.webp'];
const largeImageContainer = document.getElementById('changing-image') , thumbnailContainers = document.getElementsByClassName('thumbnail');

// Insert images in the page
for (let i = 0 ; i < imagePaths.length ; i++) {
    const imageContainers = [largeImageContainer , thumbnailContainers[i]];

    for (let j = 0 ; j < 2 ; j++) {
        const image = document.createElement('img');
        image.src = imagePaths[i];
        imageContainers[j].append(image);
        
        // Add active class to the first images of the page
        i === 0 ? j === 0 ? image.classList.add("active") : imageContainers[j].classList.add("active") : null;
    }
}

const primaryImages = document.querySelectorAll('#changing-image > img');

// Function to check images with active class, remove the class and set as active the one behind or after
function activeTheAdjacent(isOrderFromFirstToLast = true) {
    for(let i = 0 , found = false ; !found ; i++) {
        if(primaryImages[i].className.includes('active')) {
            found = true;
            
            primaryImages[i].classList.remove('active');
            thumbnailContainers[i].classList.remove('active');
            
            if (isOrderFromFirstToLast) {
                i + 1 < PrimaryImages.length ? PrimaryImages[i + 1].classList.add('active') : PrimaryImages[0].classList.add('active');
                i + 1 < thumbnailContainers.length ? thumbnailContainers[i + 1].classList.add('active') : thumbnailContainers[0].classList.add('active');
            } else {
                i - 1 >= 0 ? PrimaryImages[i - 1].classList.add('active') : PrimaryImages[PrimaryImages.length - 1].classList.add('active');
                i - 1 >= 0 ? thumbnailContainers[i - 1].classList.add('active') : thumbnailContainers[thumbnailContainers.length - 1].classList.add('active');
            }
        }
    }
}


const nextBtn = document.getElementsByTagName('button');

// Calling the function on click on arrow, for previous arrow passing false as argument to revert the logic of the function and obtaining the previous item instead of the next one
nextBtn[0].addEventListener('click' , function () {
    activeTheAdjacent(false);
});
nextBtn[1].addEventListener('click' , activeTheAdjacent);