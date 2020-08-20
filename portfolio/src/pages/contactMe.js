import React from "react"
import PDF from "../component/image/Isaias Resume 792020.pdf"
import "./contactMeStyle.css"

function contactMe() {
    return (
<section className="contact-section bg-black">
<div className="container">
    <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
                <div className="card-body text-center">
                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">2882 jubilee dr, Hayward CA</div>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
                <div className="card-body text-center">
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <a className="btn btn-secondary btn-lg mr-1" href="mailto:idelmundo68@gmail.com"
                  type="button" role="button"><i className="fa fa-paper-plane"></i></a>
                    <a className="btn btn-secondary btn-lg mr-1" href="https://www.linkedin.com/in/isaiasdelmundo/ "
                  role="button"><i className="fa fa-linkedin-square"></i></a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
                <div className="card-body text-center">
                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">+1 (415) 567-2222</div>
                    <div className = "App"> Here's my resume </div>
                    <a className="btn btn-secondary btn-lg mr-1" href={PDF}
                  type="button" role="button"><i className="fa fa-file"></i></a>
                </div>
            </div>
        </div>
    </div>

</div>
</section>
    )}

    export default contactMe;