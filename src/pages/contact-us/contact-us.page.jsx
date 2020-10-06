import React, { Component } from 'react'
import axios from 'axios'
import cloudinary from 'cloudinary-core'

import CustomButton from '../../components/custom-button/custom-button.component'
import FeedbackModal from '../../components/feedback-modal/feedback-modal.component'
import FormInput from '../../components/form-input/form-input.component'
import Hero from '../../components/hero/hero.component'
import Loader from '../../components/loader/loader.component'

import './contact-us.styles.scss'

const cl = cloudinary.Cloudinary.new({ cloud_name: 'dynamicjson' }),
      API_PATH = '../../api/contact/index.php';

export default class ContactUsPage extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        responseMsg: '',
        responseFlag: false,
        feedbackIsOpen: false,
        loading: false
    }

    clearEmailInputs = () => {
        this.setState({ 
            name: '',
            email: '',
            subject: '',
            message: '' 
        })
    }

    closeFeedback = () => {
        this.setState({ feedbackIsOpen: false })
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ loading: true })

        let inputValues = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

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

                this.clearEmailInputs()
            })
            .catch(error => {
                this.setState({ 
                    feedbackIsOpen: true,
                    responseMsg: error.message,
                    loading: false 
                })
            })
    } 

    render() {
        cl.responsive()

        return (
            <div className="contact-us-container">
                <main className="contact-form-wrapper">
                    <h1 className="contact-page-title">Contact Us</h1>

                    <p>If you would like to request a service or find out more about the services we provide, please leave a message below and we will respond to you as soon as possible.</p>
                    <form onSubmit={this.handleSubmit}>
                       <FormInput
                            name="name"
                            id="name"
                            label="Full Name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                        />
                        
                        <FormInput
                            name="email"
                            id="email"
                            label="Email Address"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                        />

                        <FormInput
                            name="subject"
                            id="subject"
                            label="Subject"
                            onChange={this.handleChange}
                            value={this.state.subject}
                        />

                        <FormInput
                            name="message"
                            id="message"
                            label="Message"
                            type="textarea"
                            onChange={this.handleChange}
                            value={this.state.message}
                            rows={5}
                        />

                        <CustomButton primary>Send</CustomButton>
                    </form>
                </main>

                <Hero 
                    page="contact-us"
                    imageUrl="https://res.cloudinary.com/dynamicjson/image/upload/w_auto,c_scale/v1594500388/contact-us-hero_ximzgg.jpg"
                />

                <Loader loading={this.state.loading} />

                {
                    this.state.feedbackIsOpen ?
                    <FeedbackModal 
                        flag={this.state.responseFlag} 
                        message={this.state.responseMsg}
                        handleClick={this.closeFeedback}
                    /> :
                    ''
                }
            </div>
        )
    }
}