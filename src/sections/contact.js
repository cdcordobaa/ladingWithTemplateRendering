import { renderToNode, templateHtml } from '../utils/renderer'


function ContactComponent() {

  const sectionTitle = 'Get In Touch';
  const contactTitle = 'Contact Form'

  return templateHtml`
    <div class="container-fluid contact-container">
        <h1 class="title">
            ${sectionTitle}
        </h1>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7 col-sm-9 form-container">
                <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="contactFirstName">First Name</label>
                        <input type="text" class="form-control" id="contactFirstName">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="contactLastName">Last Name</label>
                        <input type="text" class="form-control" id="contactLastName">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="contactEmail">Email</label>
                        <input type="email" placeholder="name@example.com" class="form-control" id="contactEmail">
                    </div>
                    <div class="form-group">
                      <label for="contactSubject">Subject</label>
                      <input type="text" class="form-control" id="contactSubject" placeholder="PQR's">
                    </div>
                    <div class="form-group">
                        <label for="contactMessages">Message</label>
                        <textarea rows="10" type="text" class="form-control" id="contactMessages" placeholder="Write your notes or questions here..."></textarea>
                    </div>
                    <button type="submit" class="button-call-to-action btn btn-primary">Send Message</button>
                  </form>
            </div>
        </div>
    </div>
    `;
}

const node = document.querySelector('#contact')
renderToNode(ContactComponent(), node);
