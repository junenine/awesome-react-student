import React,{Component} from "react"

class Note extends Component {
  render() {
    const {content, content2, title} = this.props
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          {title}
          <div className='card-content black-text'>
            {content}{content2}
          </div>
        </div>
      </div>
    )
  }

}

export default Note