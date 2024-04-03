// Danh sách các đường dẫn ảnh
const imagePaths = ["image/slide1.jpg", "image/slide2.jpg"];

// Lấy phần tử ảnh lớn
const largeImage = document.getElementById("largeImage");

let currentIndex = 0;

// Hàm thay đổi ảnh
function changeImage() {
    largeImage.src = imagePaths[currentIndex];
    currentIndex = (currentIndex + 1) % imagePaths.length;
}

// Thay đổi ảnh mỗi 5 giây
setInterval(changeImage, 2000);
