function scrollToLogo() {
    const logoSection = document.getElementById("socialIcons");
    if (socialIcons.style.display === "none") {
        socialIcons.style.display = "block"; // Show the social icons
    } else {
        socialIcons.style.display = "none"; // Hide the social icons
    }
}

function Project1(url) {
window.location.href = url;}
function Project2(url) {
window.location.href = url;}
function Project3(url) {
window.location.href = url;}


                    function downloadResume() {
                        var link = document.createElement('a');
                        link.href = 'AjayResume.pdf'; // Replace with the actual path to your resume file
                        link.download = 'AjayResume.pdf'; // Replace with the desired filename
                        link.click();
                    }
            