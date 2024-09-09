const altDesignCheckbox = document.getElementById('js-optioninput');
const optionDescription = document.getElementById('js-option-description');
const authorSocialLinksFrame = document.getElementById('js-frame');
const authorHeadshot = document.getElementById('js-headshot');
const authorName = document.getElementById('js-name');
const authorLocation = document.getElementById('js-location');
const authorBio = document.getElementById('js-bio');
const pageAttribution = document.getElementById('js-attribution');


let originalName = authorName.textContent;
let originalLocation = authorLocation.textContent;
let originalBio = authorBio.textContent;

const newName = "Alexander Roan";
const newLocation = "Bangkok, Thailand";
const newBio = `"Consultant, photographer and noob coder!"`

window.addEventListener("load", () => {
  altDesignCheckbox.checked = false;
})

altDesignCheckbox.addEventListener("input", () => {

  if (altDesignCheckbox.checked === true) {
    authorName.textContent = newName;
    authorLocation.innerHTML = newLocation;
    authorBio.textContent = newBio;

    document.body.classList.add("body--alt");

    optionDescription.classList.add("options__description--alt");

    authorSocialLinksFrame.classList.add("frame--alt");
    
    authorHeadshot.src="assets/images/avatar-alexander.jpeg"
    authorName.classList.add("frame__name--alt");
    authorLocation.classList.add("frame__location--alt");
    authorBio.classList.add("frame__bio--alt");

    const authorSocialLink = document.querySelectorAll('.js-link');  
    console.log(authorSocialLink)
    authorSocialLink.forEach((el) => {
      el.classList.add("frame__link--alt");
    });

    pageAttribution.classList.add("attribution--alt");
  }
  
  if (altDesignCheckbox.checked === false) {
    authorName.textContent = originalName;
    authorLocation.innerHTML = originalLocation;
    authorBio.textContent = originalBio;

    document.body.classList.remove("body--alt");

    optionDescription.classList.remove("options__description--alt");

    authorSocialLinksFrame.classList.remove("frame--alt");

    authorHeadshot.src="assets/images/avatar-jessica.jpeg"
    authorName.classList.remove("frame__name--alt");
    authorLocation.classList.remove("frame__location--alt");
    authorBio.classList.remove("frame__bio--alt");

    const authorSocialLink = document.querySelectorAll('.js-link');  
    authorSocialLink.forEach((el) => {
      el.classList.remove("frame__link--alt");
    });
    
    pageAttribution.classList.remove("attribution--alt");
  }
})
