fetch('https://api.unsplash.com/photos/random/?client_id=XpXyYGIqGSLJqcEqPciOkS40IVK6-SnnaYiGfSGXOqw&count=1&collections=HkPlDmMjivc')
  .then(response => response.json())
  .then(images => {
      images.map ( image => {
        const truckAltText = image.alt_description
        const truckImagePath = image.urls.small
        // const  truckUserNamePath = image.user.username
        truckReplaceImg(truckImagePath, truckAltText);
      });
  })
  .catch(err => { throw err}); 
// 
const truckReplaceImg = (truckImagePath, truckAltText) => {
    const target = document.getElementById('trucker');
    target.innerHTML = `
        <img src="${truckImagePath}" alt="${truckAltText}" />
    `;
};
