import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'/>
          <Route path='/register'/>
          <Route path='/login'/>
        </Routes>
      </Router>
    </>
  )
}

export default App