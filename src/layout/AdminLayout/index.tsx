import { WithChildren } from '../../models/IGeneral'
import Header from './components/Header'

const AdminLayout = ({ children }: WithChildren) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

export default AdminLayout
