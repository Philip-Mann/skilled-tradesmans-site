// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('jobentry-form');
    form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target);
  
    const formdata = new FormData(e.target);
    const entries = formdata.entries();
    const data = Object.fromEntries(entries);
  
    fetch("/vocations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    .then((response) => {
      alert('New job opening posted.');
    })

    .catch((err) => {
      console.info(err + " url: " + "/vocations");
    });
  
    console.log("POSTed data to /vocations");
    });
});