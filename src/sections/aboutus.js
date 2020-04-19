import { renderToNode, templateHtml } from '../utils/renderer'
import sectionImg from '../assets/images/about_1.jpg';


function HeaderComponent() {

    const sectionTitle = 'About Us';
    const sectionSubtitle = 'Create Amazing interactive Props'
    const aboutUsDescription = 'Ultricies mi eget mauris pharetra et. Ultrices dui sapien eget mi proin sed. A scelerisque purus semper eget. Faucibus in ornare quam viverra orci. Eget arcu dictum varius duis at consectetur lorem. Tristique senectus et netus et malesuada fames ac turpis. Et molestie ac feugiat sed lectus vestibulum. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci.';
    const headerCallToAction = 'Learn More';

    return templateHtml`<div class="about-container">
    <h1 class="title">
        ${sectionTitle}
    </h1>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 left-section">
                <img src="${sectionImg}" class="rounded img-fluid" alt="About Us">
            </div>
            <div class="col-sm-12 col-md-6 right-section">
                <h3>
                    ${sectionSubtitle}
                </h3>
                <h5>
                    ${aboutUsDescription}
                </h5>
                <button type="button" class="button-call-to-action btn btn-primary btn-lg aria-pressed=" true">
                    ${headerCallToAction}
                </button>
            </div>
        </div>
    </div>
</div>`;
}

const node = document.querySelector('#aboutus')
renderToNode(HeaderComponent(), node);
