// Add JavaScript code here
const testimonial_wrapper = document.querySelector(
    ".testimonial_wrapper"
);
const testimonial_width = testimonial_wrapper.clientWidth;
const left_btn = document.querySelector(".left_btn");
const right_btn = document.querySelector(".right_btn");

right_btn.addEventListener("click", () => {
    testimonial_wrapper.scrollLeft += testimonial_width;
});

left_btn.addEventListener("click", () => {
    testimonial_wrapper.scrollLeft -= testimonial_width;
});