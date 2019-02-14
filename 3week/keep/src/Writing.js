import React,{Component} from "react"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "title",
      content: "content",
      content2: "content2",
      showContent:false
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    this.props.save(this.state)
    e.preventDefault();
  }

  handleChange = (event) => {
    console.log('userInput is ' + this.state.userInput)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e) => {
  this.setState({
    showContent:true
  })
  }


  render() {
      let {showContent}=this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              name="content"
              type='text'
              value={this.state.content}
              onChange={this.handleChange}
              onClick={this.handleClick}
            />
            {showContent ? (
            <input
              name="content2"
              type='text'
              value={this.state.content2}
              onChange={this.handleChange}
            />
            ) : (
                "false"
            )}
            <input
              name="title"
              type='text'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

export default Writing