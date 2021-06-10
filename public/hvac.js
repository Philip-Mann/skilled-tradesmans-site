fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=qJw0WjKr2TI')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const hvacAltPath = image.alt_description
        const hvacImgPath = image.urls.small
        hvacReplaceImg(hvacImgPath, hvacAltPath);
      });
  })
  .catch(err => { throw err}); 

const hvacReplaceImg = (hvacImgPath, hvacAltPath) => {
    const target = document.getElementById('hvac');
    target.innerHTML = `
        <img src="${hvacImgPath}" alt="${hvacAltPath}" />  
    `;
};