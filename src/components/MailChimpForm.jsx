import addToMailchimp from "gatsby-plugin-mailchimp"
import Form from "../images/mailform.png"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: {} }
  }

  _handleSubmit = async e => {
    console.log("handle sub")
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    console.log("result", result)
    this.setState({ result: result.result })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }
  render() {
    return this.state.result === "success" ? (
      <div>SUCCESS</div>
    ) : this.state.result === "error" ? (
      <div>ERROR</div>
    ) : (
        <div className="mailwrapper">
            <form onSubmit={this._handleSubmit}>
                <img className="mailform" src={Form} alt=""></img>
                <input className="item mailinput"
                required
                placeholder="YOUR EMAIL"
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                variant="outlined"
                onChange={this.handleChange}
                />
                <br />
                <span className="item window1">
                <button className="double-shadow highlighted mailbtn" type="submit">Subscribe</button>
                </span>
                
            </form>
        </div>
    )
  }
}