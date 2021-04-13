import addToMailchimp from "gatsby-plugin-mailchimp"
import Form from "../images/mailform.png"
import FormSuccess from "../images/mailformsuccess.png"
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
      <div><img className="mailform" src={FormSuccess} alt=""></img></div>
    ) : this.state.result === "error" ? (
      <div>ERROR</div>
    ) : (
      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="card py-3 px-4" style={{backgroundColor:'transparent', border:'none', backgroundRepeat:'no-repeat', backgroundImage:`url(${Form})`, backgroundSize:'contain', backgroundPosition:'center'}}>
            <form className="py-5 px-4" onSubmit={this._handleSubmit}>
              <div className="form-group mb-0 px-2">
                <label for="exampleInputEmail1">Receive the latest news in your inbox</label>
                <input className="form-control mb-4"
                  required
                  placeholder="YOUR EMAIL"
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize= "none"
                  variant="outlined"
                  onChange={this.handleChange}
                  />
                </div>
                <span className="item window1">
                  <button className="double-shadow highlighted mailbtn" type="submit">Subscribe</button>
                </span>
            </form>
          </div>
        </div>
      </div>

    )
  }
}