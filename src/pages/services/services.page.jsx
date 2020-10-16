import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cloudinary from 'cloudinary-core'

import CustomButton from '../../components/custom-button/custom-button.component'
import FeedbackModal from '../../components/feedback-modal/feedback-modal.component'
import FormInput from '../../components/form-input/form-input.component'
import Loader from '../../components/loader/loader.component'

import './services.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' }),
      API_PATH = '../../api/request/index.php';

class ServicesPage extends React.Component {
    state = {
        fullName: '',
        organizationName: '',
        email: '',
        phoneNum: '',
        service: '',
        request: '',
        responseFlag: false,
        responseMsg: '',
        feedbackIsOpen: false,
        loading: false
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    clearInputs = () => {
        this.setState({
            fullName: '',
            organizationName: '',
            email: '',
            phoneNum: '',
            service: '',
            request: ''
        })
    }

    closeFeedback = () => {
        this.setState({ feedbackIsOpen: false })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { fullName, organizationName, email, phoneNum, service, request } = this.state,
              inputValues = {
                  name: fullName,
                  organization: organizationName,
                  email,
                  phoneNum,
                  service,
                  request
              };

        this.setState({ loading: true })

        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: inputValues
        })
        .then(response => {
            this.setState({
                responseFlag: true,
                loading: false,
                feedbackIsOpen: true,
                responseMsg: 'Your message was sent successfully! We would respond as soon as possible. Thanks for your continued support.'
            })

            this.clearInputs()
        }).catch(error => {
            this.setState({ 
                feedbackIsOpen: true,
                responseMsg: error.message,
                loading: false 
            })
        })
    }
    
    render() {
        cl.responsive()

        const { fullName, organizationName, email, phoneNum, service, request, loading, responseMsg, responseFlag } = this.state,
              { handleInputChange, handleSubmit } = this;

        return (
            <div className="services-page-container">
                <h1 className="services-page-title">Our Services</h1>

                <h2>Spod Integrated Nigeria Limited offers three (3) main services:</h2>

                <div className="services-page-wrapper">
                    <main>
                        <div className="service">
                            <header className="service-header">
                                <img
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_15,c_scale/v1596126774/woman-cleaning_btgq44.jpg"
                                    alt="Afro woman cleaning"
                                />

                                <h3>Cleaning</h3>
                            </header>

                            <p className="service-text">We offer commercial and domestic cleaning, including event cleaning, fumigation/pest control, handyman services such as painting and more.</p>

                            <Link className="link-button" to="/cleaning-services">Learn More</Link>
                        </div>

                        <div className="service">
                            <header className="service-header">
                                <img
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_20,c_scale/v1596138512/fork-lift-truck_a4dkja.jpg"
                                    alt="Parked fork lift."
                                />

                                <h3>Equipment Rentals</h3>
                            </header>

                            <p className="service-text">We pride ourselves as the partner of choice in the area of equipment leasing &amp; supply. We meet
                            all our clients’ needs within the minimum time possible.</p>

                            <Link className="link-button" to="/equipment-rentals">Learn More</Link>
                        </div>

                        <div className="service">
                            <header className="service-header">
                                <img
                                    src="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,q_20,c_scale/v1596288594/oil-2339939_1280_fypjsw.jpg"
                                    alt="Machine Oil"
                                />

                                <h3>Chemical Sales</h3>
                            </header>

                            <p className="service-text">We supply various types of chemicals used in all stages of drilling, completing, and oil and gas well production.</p>

                            <Link className="link-button" to="/chemical-sales">Learn More</Link>
                        </div>
                    </main>
                </div>

                <div id="send-a-request" className="request-container">
                    <h2>Request a Service</h2>

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            name="organizationName"
                            id="organizationName"
                            label="Organization Name"
                            value={organizationName}
                            onChange={handleInputChange}
                        />

                        <div className="form-grouper">
                            <FormInput
                                name="fullName"
                                id="fullName"
                                label="Full Name"
                                value={fullName}
                                onChange={handleInputChange}
                                required
                            />

                            <FormInput
                                name="phoneNum"
                                id="phoneNum"
                                label="Phone Number"
                                value={phoneNum}
                                type="tel"
                                onChange={handleInputChange}
                            />
                        </div>

                        <FormInput
                            name="email"
                            id="email"
                            label="Email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />

                        <FormInput
                            name="service"
                            id="service"
                            label="Service"
                            value={service}
                            onChange={handleInputChange}
                            required
                        />

                        <FormInput
                            name="request"
                            id="request"
                            label="Request"
                            value={request}
                            type="textarea"
                            rows={7}
                            onChange={handleInputChange}
                            required
                        />

                        <CustomButton type="submit" secondary>Send Request</CustomButton>
                    </form>

                    <Loader loading={loading} />

                    {
                        this.state.feedbackIsOpen ?
                        <FeedbackModal 
                            flag={responseFlag} 
                            message={responseMsg}
                            handleClick={this.closeFeedback}
                        /> :
                        ''
                    }
                </div>
            </div>
        )
    }
}

export default ServicesPage
