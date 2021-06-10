fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=PY9pHt2z-7U')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const plumAltPath = image.alt_description
        const plumImgPath = image.urls.small
        plumReplaceImage(plumImgPath, plumAltPath);
      });
  })
  .catch(err => { throw err}); 

const plumReplaceImage = (plumImgPath, plumAltPath) => {
    const target = document.getElementById('plumbing');
    target.innerHTML = `
        <img src="${plumImgPath}" alt="${plumAltPath}" />  
    `;
};