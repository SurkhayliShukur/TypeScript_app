
import { LayoutProps } from '../../interfaces/data'

const Layout: React.FC<LayoutProps>  =({children}) => {
  return (
    <>
    <div>{children}</div>
    </>
  )
}

export default Layout
