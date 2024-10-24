import './styles/App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import CreateAfdFormRows from './components/CreateAfdFormRows.jsx'
import DivButtons from './components/DivButtons.jsx'

function App() {

  return (
    <>
      <HeaderComponent />
      <div className="container">
        teste
        <form id="afdForm" method="POST" action="https://afd-generator.onrender.com/download671"
          onsubmit="submitForm(event)">

          <CreateAfdFormRows />
          <DivButtons />

        </form>
      </div>
    </>
  )
}

export default App
