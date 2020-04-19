import { renderToNode, templateHtml } from '../utils/renderer'
import headerImg from '../assets/images/landing_1.png';


function HeaderComponent() {

    let headerTitle = 'Grow Your Business Faster';
    let headerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut';
    let headerCallToAction = 'Get Started';

    return templateHtml`        
        <div class="container-fluid header-container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-5 header-left-section">
                    <h1>
                        ${headerTitle}
                    </h1>
                    <h5>
                        ${headerDescription}
                    </h5>
                    <button type="button" class="button-call-to-action btn btn-primary btn-lg aria-pressed="true">
                        ${headerCallToAction}
                    </button>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-7 header-rigth-section">
                    <img src="${headerImg}" alt="Landerz Header">
                </div>
            </div>
        </div>
    `;
}

const node = document.querySelector('#header')
renderToNode(HeaderComponent(), node);
