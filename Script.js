const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");
const loader = document.querySelector(".loader");
let data;

btn.addEventListener("click", function () {
  fetchImage()
  setTimeout(showImages, 5000);
  showLoader();
});

function fetchImage() {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) => res.json())
    .then((res) => {
      data = res;
    })
  };


function showLoader() {
  document.querySelector(".loader").style.display = "block";
}

function hideLoader() {
  document.querySelector(".loader").style.display = "none";
}


function showImages() {
  let i = 0;
  const imgSize = 30;

  function insertImages() {
    let end = Math.min(i + imgSize, data.length);
    do {
      let elem = `<img src=${data[i].url} width="200" height="200" alt="изображение"></img>`;
      wrap.innerHTML += elem;
      i++;
    }
    while (i < end);
    if (i < data.length) {
      setTimeout(insertImages, 1000);
    }
    else {
      console.log("Изображения загружены");
    }
  }
  insertImages();
  hideLoader();
}