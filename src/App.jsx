import FileExplorer from "./components/FileExplorer.jsx"

import "./App.css"
import data from "./data/index.json"


const App = () => {
  return (
    <div className="container">
      <FileExplorer data={data} />
    </div>
  )
}

export default App