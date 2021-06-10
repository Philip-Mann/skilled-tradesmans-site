fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=JWmYlcV2_sQ')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const weldAltText = image.alt_description
        const weldImagePath = image.urls.small
        weldReplaceImg(weldImagePath, weldAltText);
      });
  })
  .catch(err => { throw err}); 

const weldReplaceImg = (weldImagePath, weldAltText) => {
    const target = document.getElementById('welder');
    target.innerHTML = `
        <img src="${weldImagePath}" alt="${weldAltText}" />  
    `;
};