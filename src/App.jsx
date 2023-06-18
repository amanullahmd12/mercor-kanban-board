import './App.css'
import Body from './Components/Body/Body'
import Sidebar from './Components/Sidebar/Sidebar'



function App() {

  return (
    <>
      <div className="container-fluid d-flex ">
        <div className=" d-flex bd-highlight">
          <div className="p-2 flex-shrink-1 bd-highlight">
            <Sidebar />
            </div>
        <div className="p-2 w-100 bd-highlight">
          <Body />
          </div>
          </div>
      </div>
    </>
  )
}

export default App
