function toggleDetails(detailsContentId) {
    var detailsContent = document.getElementById(detailsContentId);
    if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";
    } else {
        detailsContent.style.display = "none";
    }

    // Toggle a class on the parent project-thumbnail
    var thumbnail = detailsContent.closest('.project-thumbnail');
    thumbnail.classList.toggle('details-open', detailsContent.style.display === 'block');
}