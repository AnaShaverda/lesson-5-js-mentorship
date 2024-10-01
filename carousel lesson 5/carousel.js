const imagesForCarousel = [
  {
    url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F770959cc-f71b-4b5a-8836-1eaa8901e274_Thumb.jpeg&w=3840&q=75",
    alt: "iphone 17",
  },
  {
    url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fed731554-9f31-4e14-8277-acf8f647b161_Thumb.jpeg&w=3840&q=75",
    alt: "iphone 15",
  },
  {
    url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9bd4b714-9e13-4af8-b242-f93ccd5adef2_Thumb.jpeg&w=3840&q=75",
    alt: "laptop",
  },
];
const slide = document.querySelector(".carousel-slide");

imagesForCarousel.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("carousel-img");
  slide.appendChild(img);
});

const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});
