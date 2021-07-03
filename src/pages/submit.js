import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Form, FormGroup, Label, Input, CardSubtitle } from 'reactstrap';

const SubmitPage = () => (
  <Layout>
    <SEO title="Tell Us Your Story" />
    <h1>Tell us your story</h1>
    <div className="card-body px-0">
    <div className="window window-2">
        <header className="window-header">
            <CardSubtitle>
                <span className="card-subtitle">Share your story!</span>
            </CardSubtitle>
            <nav className="window-controls"></nav>
        </header>
            <h4 className="form-title"> We're eager to share as many inspiring stories as possible! </h4> <br/>
              <p className="form-subtitle">Got an interesting story about your acceptance journey? <br/>
        Want to share what you've been learning about transitioning to natural hair?<br/>
        Has some precious tips to share with the community? <br/><br/>
        We're all ears, drop your words of wisdom bellow 👇🏽<br/>
              </p>
        <div className='dragbar-right' id="resize-right"></div>
        <div className='dragbar-left' id="resize-left"></div>
        <div className='dragbar-bottom' id="resize-bottom"></div>
        <div  className="window-content p-4">
            <Form action="https://getform.io/f/7d222923-3c20-4aac-a180-ee59c392e32b" method="POST" encType="multipart/form-data">
            <FormGroup>
                <Label className="card-subtitle" for="Name">Name and Instagram handle</Label>
                <Input required type="name" name="name" id="Name" placeholder="Your Name / @Insta" />
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="Email">Email</Label>
                <Input required type="email" name="email" id="Email" placeholder="Your email" />
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="Select">Hair Type</Label>
                <Input type="select" name="select" id="Select">
                <option>Select an option</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="Text">In a few lines, write a bio to describe yourself</Label>
                <Input required type="textarea" name="text" id="Text" />
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="Text">Share your story</Label>
                <Input required type="textarea" name="text" id="Text" />
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="TitleText">What would be the title of it?</Label>
                <Input required type="textarea" name="title" id="TitleText" />
            </FormGroup>
            <FormGroup>
                <Label className="card-subtitle" for="File">Image (optional)</Label>
                <Input type="file" name="file" id="File" />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
    </div>
    </div>
    </div>
  </Layout>
)

export default SubmitPage
