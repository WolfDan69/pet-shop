import Header from './components/Header'
import CatalogPage from './pages/CatalogPage'
import './App.css'

function App() {
  return (
    <> {/* это фрагмент, для объединения элементов - */}
      <Header />
      <CatalogPage />
    </> // - без добавления лишнего блока на страницу
  )
}

export default App