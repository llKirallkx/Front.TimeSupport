import './styles/App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import CreateAfdFormRows from './components/CreateAfdFormRows.jsx'
import DivButtons from './components/DivButtons.jsx'

function App() {

  return (
    <>
      <HeaderComponent />
      <div className="container">
        {/* Incluir um onSubmit no formulário */}
        <form id="afdForm" method="POST" action="https://afd-generator.onrender.com/download671">

          <CreateAfdFormRows />
          <DivButtons />

        </form>
      </div>
    </>
  )
}

export default App
