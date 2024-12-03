import './styles/App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import CreateAfdFormRows from './components/CreateAfdFormRows.jsx'
import DivButtons from './components/DivButtons.jsx'

function App() {

  return (
    <>
      <HeaderComponent />
      <div className='container p-4 my-4 bg-dark-subtle rounded shadow'>
        <form id="afdForm" method="POST" action="">

          <CreateAfdFormRows />
          <DivButtons />

        </form>
      </div>
    </>
  )
}

export default App
