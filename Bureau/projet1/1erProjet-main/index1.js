// change class of element if textContent is in current url
function changeElementClass() {
    // get a array of li in nav
    let list = document.querySelectorAll('nav ul li a');
    // get current link  
    let currentHref = window.location.href.toLowerCase();

    // create function to remove actived class from all element
    function removeClass() {
        list.forEach(el => {
            el.classList.remove('actived');
        })
    }

    // loop in list 
    list.forEach(element => {

        // check if link contains textContent of this element
        if (currentHref.includes(element.textContent.toLowerCase())) {

            // add class to this element
            element.classList.add('actived');
        }

        // add event listener to each element if clicked
        element.addEventListener('click', (e) => {

            // call the function to remove all call above
            removeClass();

            // reassign textContent of element to the link hash
            window.location.hash = element.textContent.toLowerCase();

            // check if window location contains textContent of element
            if (window.location.hash.toLowerCase().includes(element.textContent.toLowerCase())) {

                // add class to this element
                element.classList.add('actived');
            }
        })
    });

    // check current url if hasn't hash 
    if (!window.location.hash) {
        // add class actived to selector .accueil in html
        document.querySelector('.accueil').classList.add('actived');
    }
}

// call the function
changeElementClass();