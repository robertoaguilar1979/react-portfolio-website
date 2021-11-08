import React from "react"
import styled from "styled-components"

function Button() {
  return (
    <div>
      <Button1 href="mailto:robertoaguilar1979@gmail.com">Email Me</Button1>
    </div>
  )
}

export default Button

const Button1 = styled.a`
  padding: 0.65em 2.85em;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  background: #4e62de;
  border-radius: 8px;
  margin-top: 1.15em;
  display: inline-block;
  margin-left: 0.3em;

  :hover {
    background: #6074f7;
  }
`
