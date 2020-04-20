import { renderToNode, templateHtml } from '../utils/renderer'


function FooterComponent() {

    const sectionTitle = 'Copyright ©2020 all rights reserved';

    return templateHtml`
    <div class="container-fluid footer-container">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7 col-sm-9 text-container">
            <h5>
                ${sectionTitle}
            </h5>
            </div>
        </div>
    </div>`;
}

const node = document.querySelector('#footer')
renderToNode(FooterComponent(), node);
