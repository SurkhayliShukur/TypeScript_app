import Navbar from './Navbar'
import { LayoutProps } from '../../interfaces/data'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout
