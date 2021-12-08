import React from 'react'
import NoteComponent from '../components/NoteComponent'

let dummy="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti ullam quaerat sint. Aut quibusdam incidunt deserunt in porro. Omnis quisquam exercitationem amet quis dicta commodi beatae at laboriosam dolorem odit optio natus modi praesentium aliquid, tempora error illum harum reiciendis aperiam impedit? Debitis doloribus aliquid, numquam ipsam laborum est hic ea veritatis! Qui debitis doloribus ullam perspiciatis possimus quaerat repellat omnis rerum deserunt asperiores et labore enim porro libero dolorem voluptate est nam odio eligendi praesentium at veniam repellendus, provident quae. Explicabo, fugit nesciunt eos eaque, expedita accusantium odit qui et numquam magnam voluptates unde deserunt tempore odio tenetur?"

const Homepage = () => {
    return (
        <div className="container">
             <div className="display-5 text-center mt-5 mb-5">Home Page</div>
             <div className="d-flex row justify-content-between">
             <NoteComponent title="First Note" content={dummy}/>
             <NoteComponent title="Second Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             <NoteComponent title="Third Note" content={dummy}/>
             </div>
        </div>
    )
}

export default Homepage
