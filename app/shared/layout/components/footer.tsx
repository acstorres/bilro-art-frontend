import Hidden from '@components/ui/hidden'
import MobileFooter from './mobile/mobile-footer'
import DesktopFooter from './desktop/desktop-footer'

export default function Footer() {
  return (
    <footer>
      <Hidden above="small-tablet">
        <MobileFooter />
      </Hidden>
      <Hidden bellow="tablet">
        <DesktopFooter />
      </Hidden>
    </footer>
  )
}
