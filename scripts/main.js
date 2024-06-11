const imagePaths = ['images/01.webp' , 'images/02.webp', 'images/03.webp', 'images/04.webp', 'images/05.webp'];


for (let i = 0 ; i < imagePaths.length ; i++) {
    const imageContainers = [document.getElementById('changing-image') , document.getElementsByClassName('thumbnail')[i]];

    for (let j = 0 ; j < 2 ; j++) {
        const image = document.createElement('img');
        image.src = imagePaths[i];
        imageContainers[j].append(image);
    
        i === 0 ? j === 0 ? image.classList.add("active") : imageContainers[j].classList.add("active") : null;
    }
}

function activeTheAdjacent(isOrderFromFirstToLast = true) {
    const PrimaryImages = document.querySelectorAll('#changing-image > img') , thumbnailContainers = document.getElementsByClassName('thumbnail');

    for(let i = 0 , found = false ; !found ; i++) {
        if(PrimaryImages[i].className.includes('active')) {
            found = true;
            
            PrimaryImages[i].classList.remove('active');
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
nextBtn[0].addEventListener('click' , function () {
    activeTheAdjacent(false);
});
nextBtn[1].addEventListener('click' , activeTheAdjacent);