// Function to share content on Facebook
function shareOnFacebook() {
    // Change URL and other parameters as needed
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 'facebook-share-dialog', 'width=626,height=436');
}

// Function to share content on Twitter
function shareOnTwitter() {
    // Change URL and other parameters as needed
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), 'twitter-share-dialog', 'width=626,height=436');
}

// Attach event listeners to the social share buttons
document.getElementById("facebook-share").addEventListener("click", shareOnFacebook);
document.getElementById("twitter-share").addEventListener("click", shareOnTwitter);
