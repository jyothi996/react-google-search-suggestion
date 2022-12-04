import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearchInput} = props
  const {suggestion} = searchDetails

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-items">
      <p className="suggestion-text">{suggestion}</p>
      <button className="arrow-button" type="button" onClick={onClickArrow}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
