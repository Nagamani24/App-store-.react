// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails

  return (
    <li className="item-container" key={appId}>
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
