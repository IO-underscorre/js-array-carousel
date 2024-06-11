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
