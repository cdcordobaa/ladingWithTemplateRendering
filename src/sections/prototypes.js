import { renderToNode, templateHtml } from '../utils/renderer'
import prototypeImg from '../assets/images/do_ui_kit_download_cta_floating_devices-2x.png';
import person from '../assets/images/person_1.jpg';



function HeaderComponent() {

    const sectionTitle = 'Create interactive prototypes';
    const sectionDescription = 'Eleifend quam adipiscing vitae proin sagittis nisl. Cursus turpis massa tincidunt dui ut ornare lectus sit.';

    const item1 = "Nulla facilisi morbi tempus iaculis ";
    const item2 = "Tellus integer feugiat scelerisque";
    const user = {
        photo: person,
        name: "Amalia G.",
        position: 'Co-founder, XYZ Inc.',
        comment: sectionDescription,
    }

    return templateHtml`
        <div class="container prototype-container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-7 left-section">
                    <img src="${prototypeImg}" alt="Create Prototypes">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-5 right-section">
                    <h1 class="title">
                        ${sectionTitle}
                    </h1>
                    <h5>
                        ${sectionDescription}
                    </h5>

                    <div class="line-block">
                        <span class="icon-check">
                        </span>
                        <h5>
                            ${item1}
                        </h5>
                    </div>

                    <div class="line-block">
                        <span class="icon-check">
                        </span>
                        <h5>
                            ${item2}
                        </h5>
                    </div>

                    <div class="user-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="line-block">
                                    <img src="${user.photo}" class="user-photo rounded-circle" alt="user Photo">
                                    <div>
                                        <h5 class="card-title">${user.name}</h5>
                                        <h5>${user.position}</h5>
                                    </div>
                                </div>
                                <h5 class="card-text">"${user.comment}"</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`;
}

const node = document.querySelector('#prototypes')
renderToNode(HeaderComponent(), node);
