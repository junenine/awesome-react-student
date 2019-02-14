import React,{Component} from "react"
import Note from './Note';
import Writing from './Writing';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id:"0", title:'title1', content: "default1", content2: 'content1'},
        {id:"1", title:'title2', content: "default2", content2: 'content2'},
        {id:"2", title:'title3', content: "default3", content2:'content3'}
      ]
    }
  }

  save = (writingState) => {
    const savedNotes = this.state.savedNotes
    const lastNoteId = savedNotes[savedNotes.length -1].id
    this.setState({
      savedNotes: [
        ...savedNotes, 
        { id:lastNoteId+1,
          title:writingState.title, 
          content: writingState.content, 
          content2: writingState.content2}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (
            <Note 
              key={note.id} 
              title={note.title} 
              content={note.content} 
              content2={note.content2} />
          ))}
        </div>
      </div>
    )
  }
}


export default App