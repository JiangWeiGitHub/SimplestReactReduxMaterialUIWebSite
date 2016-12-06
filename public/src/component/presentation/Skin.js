import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

class Skin extends React.Component {
  constructor(props) {
    super(props)
    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground() {
    document.body.style.backgroundImage = "url('/images/backgrounds/bg_img01.jpg')"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundPosition = "left top"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
  }  

  render() {

    const { switchOpenSkin } = this.props

    return (
      <div>
        <IconButton onClick={ this.changeBackground }>
          <Menu />
        </IconButton>
      </div>
    )
  }
}

export default Skin
