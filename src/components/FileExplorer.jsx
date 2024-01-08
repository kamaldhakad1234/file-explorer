/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react"
import DisplayContent from "./DisplayContent"


const FileExplorer = ({data}) => {
  const [fileOpened, setFileOpened] = useState("")
  const [isToggled, setIsToggled] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const renderContent = useCallback(() => {
    console.log(shouldRender)
    return <DisplayContent file={fileOpened}/>
  }, [fileOpened, shouldRender]) 

  useEffect(() => {
    if(shouldRender){
      renderContent()

    }
  }, [shouldRender, renderContent])

  const passContent =(data) => {
    console.log("DATA: ", data)
    setFileOpened(data.content)
    setShouldRender(() => true)
  }

  if(data.type === "file") {
    return <p onClick={() => passContent(data)}>{data.name}</p>
  }  

  return (
    <div className="file-explorer-container">
      <h4 onClick={() => setIsToggled(!isToggled)}>{data.name}</h4>
        {data.type === "folder" && isToggled && data.items.map((folder) => {
          return (
            <FileExplorer key={folder.name} data={folder} />
          )
        })}
        {shouldRender && <DisplayContent file={fileOpened} />}
    </div>
  )
}

export default FileExplorer
