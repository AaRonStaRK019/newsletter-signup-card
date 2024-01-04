let mImg = document.querySelector('#mobile-img');
let dImg = document.querySelector('#desktop-img');


// alert(window.innerWidth);



function checkViewportWidth() {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    let firstthresholdWidth = 768;
    let thresholdWidth = 600;

    let bodyElement = document.body;

    if (viewportWidth < firstthresholdWidth || viewportWidth < thresholdWidth) {
        document.querySelector('#newscard').classList.add('mobile-news-card')
        document.querySelector('body').classList.add('mobile-body')


        mImg.classList.remove('hidden')
        dImg.classList.add('hidden')
    } else {
        document.querySelector('#newscard').classList.remove('mobile-news-card')
        document.querySelector('body').classList.remove('mobile-body')

        mImg.classList.add('hidden')
        dImg.classList.remove('hidden')
    }
}

checkViewportWidth();

window.addEventListener('resize', checkViewportWidth);
