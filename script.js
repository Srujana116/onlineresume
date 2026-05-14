// PROFILE IMAGE PREVIEW

function previewProfile(event) {

  const reader = new FileReader();

  reader.onload = function () {
    document.getElementById("profilePreview").src = reader.result;
  };

  reader.readAsDataURL(event.target.files[0]);
}


// GALLERY IMAGE PREVIEW

function previewGallery(event, index) {

  const reader = new FileReader();

  reader.onload = function () {
    document.getElementById("gallery" + index).src = reader.result;
  };

  reader.readAsDataURL(event.target.files[0]);
}
