import React from "react"
import PDF from "../component/image/Isaias Resume 792020.pdf"

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
                    <i className="fas fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50"><a href="#!">idelmundo68@gmail.com</a></div>
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
                    <div className = "App"> <a href = {PDF} target = "_blank">Here's my resume feel free to check it out.</a> </div>
                </div>
            </div>
        </div>
    </div>
    <div className="social d-flex justify-content-center">
        <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
        <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
        <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
    </div>
</div>
</section>
    )}

    export default contactMe;