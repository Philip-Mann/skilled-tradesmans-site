fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=KB9IaafNBWw')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const carpAltPath = image.alt_description
        const carpImgPath = image.urls.small
        carpReplaceImg(carpImgPath, carpAltPath);
      });
  })
  .catch(err => { throw err}); 

const carpReplaceImg = (carpImgPath, carpAltPath) => {
    const target = document.getElementById('carpenter');
    target.innerHTML = `
        <img src="${carpImgPath}" alt="${carpAltPath}" />  
    `;
};