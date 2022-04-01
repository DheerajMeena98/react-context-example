import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'

const Layout = () => (
  <div className="layout-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
