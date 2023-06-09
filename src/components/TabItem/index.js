// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTab = () => {
    onClickTab(tabId)
  }

  const activeTab = isActive ? 'activeT' : ''
  return (
    <li className="tabCont" type="none">
      <button className={`tabHead ${activeTab}`} type="button" onClick={onTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
