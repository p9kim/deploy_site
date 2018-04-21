const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

$("nav").find("a").click(function(e) {
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$("a").find("button").click(function(e) {
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});