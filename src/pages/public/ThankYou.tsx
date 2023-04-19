import "bootstrap/dist/css/bootstrap.css"
import { LayoutUnauthenticated } from "layouts/LayoutUnauthenticated"

const ThankYou = () => {
  return (
    <LayoutUnauthenticated id="thankyou" title="Thank you!" message="We just sent you an email with a confirmation link.  You'll need to click that link before you can sign in." errorMessage="">
    </LayoutUnauthenticated>
  )
}

export default ThankYou