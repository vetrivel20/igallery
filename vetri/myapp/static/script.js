var gallery = [
    { src: "tan.jpg", caption: "Tanjiro" },
    { src: "akaza.jpg", caption: "Akaza" },
    { src: "kokku2.webp", caption: "kokushibo" },
    { src: "doma.png", caption: "Doma" },
    { src: "ren2.jpg", caption: "Rengoku" },
    { src: "guve.webp", caption: "tomioka giyuu" },
];

var index = 0;
var imgElement = document.getElementById("image");
var captionElement = document.getElementById("caption");
var prevBtn = document.getElementById("button1");
var nextBtn = document.getElementById("button2");

function updateGallery() {
    imgElement.src = gallery[index].src;
    captionElement.textContent = gallery[index].caption;
}

button2.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

button1.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();