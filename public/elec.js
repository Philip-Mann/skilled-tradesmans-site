fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=j9WHBxI3Rts')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const elecAltPath = image.alt_description
        const elecImgPath = image.urls.small
        elecReplaceImg(elecImgPath, elecAltPath);
      });
  })
  .catch(err => { throw err}); 

const elecReplaceImg = (elecImgPath, elecAltPath) => {
    const target = document.getElementById('electric');
    target.innerHTML = `
        <img src="${elecImgPath}" alt="${elecAltPath}" />  
    `;
};