import React from 'react'

import Frame from './Frame.js'
import Skin from './Skin.js'

const background = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items':'center',

  'width': '100%',
  'height': '100%',
}

const ContainerRoot = () => (
  <div style={background}>
    <Frame />
  </div>
)

export default ContainerRoot
