$(function () {

    let sliderDepartments = $("#departmentsSlider");

    sliderDepartments.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    let sliderReviews = $("#reviewsSlider");
    sliderReviews.slick({
        infinite: true,
        dots: true,
    });

    let sliderStudents = $("#studentsSlider");
    sliderStudents.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

});