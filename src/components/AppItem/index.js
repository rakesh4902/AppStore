// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="appCont1" type="none">
        <img src={imageUrl} className="i1" alt={appName} />

        <p className="name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
