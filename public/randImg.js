const fetchUrls = [
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=KB9IaafNBWw",    //carpentry
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=j9WHBxI3Rts",    //electrical
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=qJw0WjKr2TI",    //hvacr
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=PY9pHt2z-7U",    //plumbing
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=HkPlDmMjivc",    //trucking
    "https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=JWmYlcV2_sQ"     //welding
];

const fetchImgs = async () => {
    try {
        const response = await Promise.all( fetchUrls.map( url => fetch(url)
        .then( res => res.json())
        .then( images => {
            images.map ( image => {
                const altPath = image.alt_description
                const imgPath = image.urls.small
                replaceImg(altPath, imgPath);
            });
        }

        )));
        console.log(response);
    } catch (error) {
        console.log('ERROR', error);
    }
}
fetchImgs();

// const replaceImg = (imgPath, altPath) => {
//     const target = document.getElementById('randomImg');
//     target.innerHTML = `
//         <img src="${imgPath}" alt="${altPath}" />  
//     `;
// };