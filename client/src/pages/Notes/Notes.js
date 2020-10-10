import React from 'react'
import Header from '../../components/notes/Nav'
import Home from '../../components/notes/Home'
import CreateNote from '../../components/notes/CreateNote'
import EditNote from '../../components/notes/EditNote'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Notes({setIsLogin}) {
  return (
    <Router> 
      <div className="notes-page">
        <Header setIsLogin={setIsLogin} />
        <section>
          <Route path="/" component={Home} exact />
          <Route path="/create" component={CreateNote} exact />
          <Route path="/edit/:id" component={EditNote} exact />
        </section>
      </div>
    </Router>
  )
}

export default Notes
