import Footer from '@/components/Footer'
import Config from '@/components/Config'
import Box from '@mui/material/Box'
const Layout = ({ children, story }) => {
  return (
    <div>
      <Config blok={story?.content} />
      {/* AppBar height */}
      <Box sx={{ width: 1, height: { xs: 56, sm: 64 } }} /> 
      {children}
      <Footer />
    </div>
  )
}

export default Layout
