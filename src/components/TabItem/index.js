// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTabId, isActive} = props

  const {tabId, displayText} = tabDetails
  const tabClassName = isActive ? 'active-btn' : 'button'

  const hrLineColor = isActive ? '#2563eb' : '#dfe2e5'

  const onClick = () => {
    selectedTabId(tabId)
  }

  return (
    <li className="list-item" key={tabId}>
      <button type="button" onClick={onClick} className={tabClassName}>
        {displayText}
      </button>
      <hr color={hrLineColor} size="0px" />
    </li>
  )
}

export default TabItem
