import { renderToNode, templateHtml } from '../utils/renderer'
import prototypeImg from '../assets/images/do_ui_kit_download_cta_floating_devices-2x.png';
import person1 from '../assets/images/person_1.jpg';
import person2 from '../assets/images/person_2.jpg';
import person3 from '../assets/images/person_3.jpg';
import person4 from '../assets/images/person_4.jpg';
import { usersMock, postsMock } from '../utils/api'


function TestimonialCarousel() {

    let photosArray = [person2, person3, person4, person1];
    let users = usersMock;
    let posts = postsMock;
    const slidersNumber = 6;

    //fill testimonials
    let testimonialData = [];
    for (let i = 0; i < slidersNumber; i++) {
        testimonialData.push({
            photo: photosArray[i % photosArray.length],
            name: users[i].name,
            company: users[i].company.name,
            comments: posts.filter(post => {
                return post.userId === users[i].id
            }).map(filteredpost => filteredpost.body).join(' ')
        })
    }
    console.log("testimonials", testimonialData);

    const carousel = `
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          ${testimonialData.map((testimonial, i) => `
          <li data-target="#carouselExampleIndicators" class="${i == 0 ? 'active' : ''}" data-slide-to="${i}"></li>
          `).join('')}
        </ol>
        <div class="carousel-inner">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-5 col-sm-9">
              ${testimonialData.map((testimonial, i) => `
              <div class="carousel-item ${i == 0 ? 'active' : ''}">
                <div class="testimonial-content">
                  <img src="${testimonial.photo}" class="user-photo rounded-circle" alt="User Photo" />
                  <h5 class="paragraph line-clamp">
                    "${testimonial.comments}"
                  </h5>
                  <h3 class="user-name">
                    ${testimonial.name}
                  </h3>
                  <h3 class="user-company">
                    ${testimonial.company}
                  </h3>
                </div>
              </div>
              `).join('')}
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="icon icon-navigate_before"> </span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="icon icon-navigate_next"> </span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;
    return carousel;
}

function TestimonialsComponent() {

    const sectionTitle = 'Testimonials';

    return templateHtml`
        <div class="container testimonials-container">
            <h1 class="title">
            ${sectionTitle}
            </h1>
            <div class="row">
                ${TestimonialCarousel()}
            </div>
        </div>`;
}

const node = document.querySelector('#testimonials')
renderToNode(TestimonialsComponent(), node);
