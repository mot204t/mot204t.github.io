function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}



const nav = document.getElementById("nav");

            let lastScrollTop = 0;
            addEventListener("scroll", () => {
                // Current scroll position
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;

                // check scroll direction
                const distance = scrollTop - lastScrollTop;
                const currentTop = parseInt(
                    getComputedStyle(navbar).top.split("px")
                );

                // Clamp value between -80 and 0
                let amount = Math.max(
                    Math.min(
                        currentTop +
                            (distance < 0
                                ? Math.abs(distance) // scrolling up
                                : -Math.abs(distance)// scrolling down
                                ) * 40, // (1)
                        0
                    ),
                    -80
                );

                console.log(amount, currentTop, Math.abs(distance));

                navbar.style.top = `${amount}px`;

                lastScrollTop = scrollTop;
            });