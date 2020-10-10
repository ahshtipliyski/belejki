import React, { useState } from 'react'

function CreateNote() {
  const [note, setNote] = useState({
    title: 'title',
    content: 'content',
    date: 'October 20 2020'
  })

  return (
    <div className="create-note">
      <h2>Create Note</h2>
      <form>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input type="text" value={note.title} id="title" name="title" required />
        </div>

        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea type="text" value={note.content} id="content" name="content" required row="10"/>
        </div>

        <label htmlFor="date">Date: {note.date}</label>
        <div className="row">
          <input type="date" id="date" name="date" required />
        </div>
      </form>
    </div>
  )
}

export default CreateNote