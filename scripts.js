const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Blogger";
            }, 6000);
            setTimeout(() => {
                text.textContent = "YouTuber";
            }, 12000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);
