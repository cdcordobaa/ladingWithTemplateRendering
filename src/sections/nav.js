import { renderToNode, templateHtml } from '../utils/renderer'

function onScrollListener() {
    let prevScrollpos = 0;
    let currentScrollPos = 0
    let iconHidePosition = 300;
    window.onscroll = function () {
        currentScrollPos = window.pageYOffset;
        console.log("object happen", currentScrollPos);

        if (currentScrollPos > prevScrollpos && currentScrollPos > iconHidePosition + 100) {
            document.getElementById("b-navbar").style.top = "-5rem";
        } else {
            document.getElementById("b-navbar").style.top = "0";
        }
        document.getElementsByClassName("navbar-brand")[0].style.bottom = currentScrollPos > iconHidePosition ?
            "10rem" : "-2.5rem";

        prevScrollpos = currentScrollPos;
    }
}

function NavComponent() {

    onScrollListener();
    const navTextLinks = {
        home: {
            text: 'Home',
            ref: 'header'
        },
        features: {
            text: 'Features',
            ref: 'features'
        },
        aboutUs: {
            text: 'About Us',
            ref: 'aboutus'
        },
        testimonials: {
            text: 'Testimonials',
            ref: 'testimonials'
        },
        blog: {
            text: 'Blog',
            ref: 'blog'
        },
        contact: {
            text: 'Contact',
            ref: 'contact'
        }
    }

    return templateHtml`
        <div class="nav-container">
            <nav id="b-navbar" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Landerz<span class="point">.</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="justify-content-center navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav-text-links" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        ${Object.keys(navTextLinks).map(elem => `
                            <a class="nav-item nav-link active" href="#${navTextLinks[elem].ref}">${navTextLinks[elem].text}<span class="sr-only"></span></a>
                        `).join('')}
                    </div>
                </div>
            </nav>
        </div>`;
}

const node = document.querySelector('#nav')
renderToNode(NavComponent(), node);
