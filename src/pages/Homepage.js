import { React } from 'react'
import NoteComponent from '../components/NoteComponent'

const Homepage = (props) => {
    
let notes=props.notes
    const allNotesComponents = notes.map((ele) => {
        return <NoteComponent title={ele.title} content={ele.content} />
    })

    return (
        <div className="container">
            <div className="display-5 text-center mt-5 mb-5">Home Page</div>
            <div className="d-flex row justify-content-between">
                {allNotesComponents}
            </div>
        </div>
    )
}

export default Homepage
