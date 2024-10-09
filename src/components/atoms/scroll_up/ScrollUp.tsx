
const ScrollUp = () => {

    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");  

        if (window.scrollY >= 560) {  
            scrollUp?.classList.add("show-scroll");
        } else {
            scrollUp?.classList.remove("show-scroll");
        }
    });

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <a  
            className="scrollup"
            onClick={scrollToTop}>
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}

export default ScrollUp