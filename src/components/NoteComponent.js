import React from 'react'

const NoteComponent = (props) => {
    

    return (
        <>
            <div className="col-12 col-md-5 col-lg-4 mt-4">
                <div className="note-card">
                    <div className="note-head">{props.title}</div>
                    <div className="note-body"><label htmlFor="">{props.content}</label></div>
                </div>
            </div>
        </>
    )
}

export default NoteComponent
