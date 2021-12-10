import React from 'react'
import {useNavigate} from 'react-router-dom'
 
const Addnotepage = (props) => {
    
    const navigate = useNavigate();

   function addNoteHandeler(){
    let title=document.getElementById('title').value;
    let content=document.getElementById('content').value;
    let newNote={title: title, content:content}
    props.addnote(newNote)
    navigate('/')
}


    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12  col-md-8 offset-md-2 add-note-card ">
                    <form action="">
                        <div className="form-group">
                            <label for="formGroupExampleInput">Title</label>
                            <input type="text" className="form-control input-field" id="title" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Note</label>
                            <textarea className="form-control input-field" id="content" rows="7" required></textarea>
                        </div>
                        <button type="button" className="btn add-note-button mt-4" onClick={addNoteHandeler}>Add Note</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Addnotepage
