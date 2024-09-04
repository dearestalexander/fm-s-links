const originalBtn = document.getElementById('original-btn');
const alternateBtn = document.getElementById('alternate-btn');
const authorSocialLinksFrame = document.getElementById('social-links-frame');
const authorName = document.getElementById('name');
const authorLocation = document.getElementById('location');
const authorBio = document.getElementById('bio');
const pageAttribution = document.getElementById('attribution');
const authorHeadshot = document.getElementById('headshot');


let originalName = authorName.textContent;
let originalLocation = authorLocation.textContent;
let originalBio = authorBio.textContent;

const newName = "Alexander Roan";
const newLocation = "Bangkok, Thailand";
const newBio = `"Consultant, photographer and noob coder!"`


originalBtn.addEventListener("click", () => {
  authorName.textContent = originalName;
  authorLocation.innerHTML = originalLocation;
  authorBio.textContent = originalBio;

  document.body.classList.remove("body-alt");

  authorSocialLinksFrame.classList.remove("social-links-frame-alt");

  authorHeadshot.src="assets/images/avatar-jessica.jpeg"
  authorName.classList.remove("name-alt");
  authorLocation.classList.remove("location-alt");
  authorBio.classList.remove("bio-alt");

  const authorSocialLink = document.querySelectorAll('.social-link-alt');  
  authorSocialLink.forEach((el) => {
    el.classList.remove("social-link-alt");
    el.classList.add("social-link");
  });

  pageAttribution.classList.remove("attribution-alt");
})

alternateBtn.addEventListener("click", () => {
  authorName.textContent = newName;
  authorLocation.innerHTML = newLocation;
  authorBio.textContent = newBio;

  document.body.classList.add("body-alt");

  authorSocialLinksFrame.classList.add("social-links-frame-alt");
  
  authorHeadshot.src="assets/images/avatar-alexander.jpeg"
  authorName.classList.add("name-alt");
  authorLocation.classList.add("location-alt");
  authorBio.classList.add("bio-alt");

  const authorSocialLink = document.querySelectorAll('.social-link');  
  authorSocialLink.forEach((el) => {
    el.classList.remove("social-link");
    el.classList.add("social-link-alt");
  });

  pageAttribution.classList.add("attribution-alt");
});





