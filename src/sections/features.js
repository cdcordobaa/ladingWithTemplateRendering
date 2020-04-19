import { renderToNode, templateHtml } from '../utils/renderer'

function FeatureComponent() {

    const featureSectionTitle = 'Features';
    const cardDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut';

    const cardsArray = [
        {
            icon: 'icon-refresh',
            title: 'Business Consulting',
            description: cardDescription,
            textLink: 'Learn More',
        },
        {
            icon: 'icon-shopping_basket',
            title: 'Market Analysis',
            description: cardDescription,
            textLink: 'Learn More',
        },
        {
            icon: 'icon-home',
            title: 'User Monitoring',
            description: cardDescription,
            textLink: 'Learn More',
        },
        {
            icon: 'icon-replay_5',
            title: 'Insurance Consulting',
            description: cardDescription,
            textLink: 'Learn More',
        },
        {
            icon: 'icon-smile-o',
            title: 'Customer Sastistified',
            description: cardDescription,
            textLink: 'Learn More',
        },
        {
            icon: 'icon-plug',
            title: 'Plug & Play',
            description: cardDescription,
            textLink: 'Just Try This',
        },
    ]

    const renderCards = () => {

        const cardsHtml = cardsArray.map((item, i) =>
            `
            <div class="col-md-6 col-lg-4 card-padded">
                <div class="card">
                    <div class="card-body">
                        <span class="icon card-icon ${item.icon}">
                        </span>
                        <h5 class="card-title">${item.title}</h5>
                        <h5 class="card-text">${item.description}</h5>
                        <a href="#" class="card-link">${item.textLink}</a>
                    </div>
                </div>
            </div>
            `
        );

        return cardsHtml.join('');
    };

    return templateHtml`
    <div class="feature-container">
        <h1 class="title">
            ${featureSectionTitle}
        </h1>
        <div class="container">
            <div class="row">
                ${renderCards()}
            </div>
        </div>
    </div>`;

}

const node = document.querySelector('#features')
renderToNode(FeatureComponent(), node);
