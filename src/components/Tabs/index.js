import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onCLickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onCLickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
