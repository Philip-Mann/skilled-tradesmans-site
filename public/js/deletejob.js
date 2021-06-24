// let deleteRequest;

const jobDelete = document.querySelectorAll("[data-delete-job]")
const handleDeleteClick = (e) => {
    const jobId = e.currentTarget.getAttribute("data-delete-id")
    console.log(jobId)
    const url = `/vocations/${jobId}`
    
    // deleteRequest = () => {
        fetch(url, {
            method: "delete"
        }).then(result => result.json()).then(data => location.reload())
        .catch(err => console.log(err))
    // }
}

jobDelete.forEach(xJob => {
    xJob.addEventListener('click', handleDeleteClick)
})