import React from "react"
import { Wrapper, Email, SocialLink } from "./styled"
import FacebookSrc from "../../img/facebook.png"
import InstagramSrc from "../../img/instagram.png"

const Footer = () => {
  return (
    <Wrapper id="footer">
      <SocialLink
        imgSrc={FacebookSrc}
        src="https://www.facebook.com/"
        text="Facebook"
        id="footer-facebook"
      />
      <SocialLink
        imgSrc={InstagramSrc}
        src="https://www.instagram.com/"
        text="Instagram"
        id="footer-instagram"
      />
      <Email id="footer-contact-email">
        <span>
          Have a question? <br /> Write to{" "}
        </span>
        <span>goldwish@wish.com</span>
      </Email>
    </Wrapper>
  )
}

export default Footer
