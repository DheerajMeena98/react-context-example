import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1> Layout </h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input type="checkbox" id="content" onClick={onShowContent} />
                <label htmlFor="content"> Content </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="showLeftNavbar"
                  onClick={onShowLeftNavbar}
                />
                <label htmlFor="showLeftNavbar"> Left Navbar </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="showRightNavbar"
                  onClick={onShowRightNavbar}
                />
                <label htmlFor="showRightNavbar"> Right Navbar </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
