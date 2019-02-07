import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{content: "default1"}, {content: "default2"}]
    }
  }

  save = (content) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    const {savedNotes} = this.state
    this.setState({
      savedNotes : [...savedNotes, {content : content}]
    })
    console.log(content + "is saved")
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {this.state.savedNotes.map((note) => (
        <div>
          <Note content={note.content} />
        </div>
        ))}
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "기본값을 입력해 주세요"
    }
  }

  handleChange = (e) => {
    const event = {...e}
    console.log(event)
    this.setState({
      content: e.target.value
    })
    console.log("changed")
  }

  handleSubmit = (e) => {
    this.props.save(this.state.content)
    e.preventDefault()
  }

componentDidMount() {
  setTimeout(()=> {
    this.setState({
      content:''
    })
    },3000)
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  render() {
    const { content } = this.props

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default App
