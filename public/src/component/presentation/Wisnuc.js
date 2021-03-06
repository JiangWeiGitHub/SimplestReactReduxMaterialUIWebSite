import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionBook from 'material-ui/svg-icons/action/book'
import Avatar from 'material-ui/Avatar'
import ListItem from 'material-ui/List/ListItem'

import PreIcon from 'material-ui/svg-icons/navigation/chevron-left'
import NextIcon from 'material-ui/svg-icons/navigation/chevron-right'
import CircularProgress from 'material-ui/CircularProgress'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Skin from '../containers/Skin.js'
import Update from '../containers/Update.js'

import {
  yellow200,
  amber200,
  orange200,
  deepOrange200,
  red200,
  pink200,
  purple200,
  deepPurple200,
  indigo200,
  blue200,
  lightBlue200,
  cyan200,
  teal200,
  green200,
  lightGreen200,
  lime200,
  grey50,
  grey700,
} from 'material-ui/styles/colors'

let colorArray = [
  yellow200,
  amber200,
  orange200,
  deepOrange200,
  red200,
  pink200,
  purple200,
  deepPurple200,
  indigo200,
  blue200,
  lightBlue200,
  cyan200,
  teal200,
  green200,
  lightGreen200,
  lime200, 
]

let randomColor = () => {
  return colorArray[Math.round(Math.random()*16)]
}

const wholeWisnuc = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '100%',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
}

const firstLine = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '20%',
}

const wisnucLogo = {
  'position': 'absolute',
  'left': '40',
  'width': '20%',
  'height': '100%',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
}

const login = {
  'position': 'absolute',
  'left': '170',
  'width': '10%',
  'height': '100%',
  'top': '42',
  'font-size': '21px',
  'color': '#616161',
}

const skin = {
  'position': 'absolute',
  'width': '10%',
  'height': '100%',
  'top': '30',
  'right': '60',
  'opacity': '0.5',
}

const update = {
  'position': 'absolute',
  'width': '10%',
  'height': '100%',
  'top': '30',
  'right': '15',
  'opacity': '0.5',
}

const secondLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '20%',
  'height': '10%',
  'text-align': 'middle',
  'font-size': '26px',
  'font-weight': 'bolder',
  'text-shadow': '#E0E0E0 0 1px 0',
}

const diff = {
  'font-weight': 'lighter',
  'color': '#616161',
}

const thirdLine = { 
  'position': 'absolute',
  'width': '100%',
  'top':'30%',
  'height': '30%',
  'text-align': 'middle',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
}

const preIcon = {
  'width': '35%',
  'left': '0',
  'text-align': 'right',
}

const nextIcon = {
  'width': '35%',
  'left': '65%',
  'text-align': 'left',
}

const middlePic = {
  'width': '30%',
  'left': '35%',
}

const fourthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '60%',
  'height': '8%',

  'font-size': '18px',
  'font-weight': 'bolder',
}

const fifthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '67%',
  'height': '10%',
}

const sixthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '77%',
  'height': '15%',
  'display': 'flex',
  'justify-content': 'center',
  'align-content': 'center',
  'align-items': 'flex-start',
}

const userWrapper = {
  'height': '100%',
  'width': '50%',
  'overflow': 'hidden',
}

const usersMoreFive = {
  'height': '100%',
  'width': '100%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'flex-start',
  'flex-direction':'row',
  'align-content': 'center',
  'flex-wrap': 'nowrap',
  'margin-left': '-200%',
}

const usersLessFive = {
  'height': '100%',
  'width': '50%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'row',
  'align-content': 'center',
  'flex-wrap': 'nowrap',
  'overflow': 'hidden',
}

const user = {
  'height': '100%',
  'width': '20%',
  'margin': 'auto 9px',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userIcon = {
  'height': '60%',
  'align-items': 'center',
  'display': 'flex',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userName = {
  'height': '40%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userButton = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',

  'padding': '0',
  'margin': '0',
}

class Wisnuc extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: true,
      leftMachineButton: false,
      rightMachineButton: false,
      leftUserButton: false,
      rightUserButton: false,
      machineID: 0,
      userID: 0,
    }

    this.userColorList = {}

    this.userList = {}

    this.initalAllElements = this.initalAllElements.bind(this)
    this.machineIDSub = this.machineIDSub.bind(this)
    this.machineIDPlus = this.machineIDPlus.bind(this)
    this.userIDSub = this.userIDSub.bind(this)
    this.userIDPlus = this.userIDPlus.bind(this)

    this.showUserList = this.showUserList.bind(this)
    this.setCSS = this.setCSS.bind(this)
  }

  initalAllElements () {
    if(this.userList && Object.keys(this.userList).length <= 1) {
      this.state.leftMachineButton = false
      this.state.rightMachineButton = false
    }
    else if(this.userList && Object.keys(this.userList).length > 1 && this.state.machineID === 0) {
      this.state.leftMachineButton = false
      this.state.rightMachineButton = true
    }
    else if(this.userList && Object.keys(this.userList).length > 1 && this.state.machineID > 0 && this.state.machineID != Object.keys(this.userList).length - 1) {
      this.state.leftMachineButton = true
      this.state.rightMachineButton = true
    }
    else if(this.userList && Object.keys(this.userList).length > 1 && this.state.machineID === Object.keys(this.userList).length - 1) {
      this.state.leftMachineButton = true
      this.state.rightMachineButton = false
    }

    if(this.userList[this.state.machineID] && this.userList[this.state.machineID].users.length <= 5) {
      this.state.leftUserButton = false
      this.state.rightUserButton = false
    }
    else if(this.userList[this.state.machineID] && this.userList[this.state.machineID].users.length > 5 && this.state.userID === 0) {
      this.state.leftUserButton = false
      this.state.rightUserButton = true
    }
    else if(this.userList[this.state.machineID] && this.userList[this.state.machineID].users.length > 5 && this.state.userID < Math.floor(this.userList[this.state.machineID].users.length/5) ) {
      this.state.leftMachineButton = true
      this.state.rightMachineButton = true
    }
    else if(this.userList[this.state.machineID] && this.userList[this.state.machineID].users.length > 5 && this.state.userID >= Math.floor(this.userList[this.state.machineID].users.length/5) ) {
      this.state.leftUserButton = true
      this.state.rightUserButton = false        
    }
  }  

  machineIDSub () {
    setTimeout(() => {
      this.setState({machineID: this.state.machineID - 1, userID: 0})
    }, 400)
  }

  machineIDPlus () {

    fourthLine.opacity = 1
    fourthLine.transition = 'opacity 800ms ease-in-out'

    setTimeout(() => {
      this.setState({machineID: this.state.machineID + 1, userID: 0})
    }, 400)
  }

  userIDSub () {
    setTimeout(() => {
      this.setState({userID: this.state.userID - 1})
    }, 400)
  }

  userIDPlus () {
    setTimeout(() => {
      this.setState({userID: this.state.userID + 1})
    }, 400)
  }  

  componentWillMount () {
    let path = 'ws://localhost:8080/'
    let websocket = new WebSocket(path, 'jiangwei-protocol')
    websocket.onopen = () => { 
      websocket.send("getSystemInfor")
    }

    websocket.onmessage = (event) => {
      this.userList = Object.assign({}, JSON.parse(event.data))
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({delay: false})}, 2000) 
  }

  preMachineButton () {
    if( this.state.leftMachineButton === false && this.state.rightMachineButton === false ) {
      return (
        <div style={preIcon}></div>
      )   
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === false ) {
      return (
        <div style={preIcon}><IconButton onClick={this.machineIDSub}><PreIcon color={grey700} /></IconButton></div>
      )
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === true ) {
      return (
        <div style={preIcon}><IconButton onClick={this.machineIDSub}><PreIcon color={grey700} /></IconButton></div>    
      )
    }
    else if( this.state.leftMachineButton === false && this.state.rightMachineButton === true ) {
      return (
        <div style={preIcon}></div>       
      )
    }
  }

  nextMachineButton () {
    if( this.state.leftMachineButton === false && this.state.rightMachineButton === false ) {
      return (
        <div style={nextIcon}></div>
      )   
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === false ) {
      return (
        <div style={nextIcon}></div>
      )
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === true ) {
      return (
        <div style={nextIcon}><IconButton onClick={this.machineIDPlus}><NextIcon color={grey700} /></IconButton></div>
      )
    }
    else if( this.state.leftMachineButton === false && this.state.rightMachineButton === true ) {
      return (
        <div style={nextIcon}><IconButton onClick={this.machineIDPlus}><NextIcon color={grey700} /></IconButton></div>
      )
    }
  }

  preUserButton () {
    if( this.state.leftUserButton === false && this.state.rightUserButton === false ) {
      return (
        <div style={preIcon}></div>
      )   
    }
    else if( this.state.leftUserButton === true && this.state.rightUserButton === false ) {
      return (
        <div style={preIcon}><IconButton onClick={this.userIDSub}><PreIcon color={grey700} /></IconButton></div>
      )
    }
    else if( this.state.leftUserButton === true && this.state.rightUserButton === true ) {
      return (
        <div style={preIcon}><IconButton onClick={this.userIDSub}><PreIcon color={grey700} /></IconButton></div>    
      )
    }
    else if( this.state.leftUserButton === false && this.state.rightUserButton === true ) {
      return (
        <div style={preIcon}></div>       
      )
    }
  }

  nextUserButton () {
    if( this.state.leftUserButton === false && this.state.rightUserButton === false ) {
      return (
        <div style={nextIcon}></div>
      )   
    }
    else if( this.state.leftUserButton === true && this.state.rightUserButton === false ) {
      return (
        <div style={nextIcon}></div>
      )
    }
    else if( this.state.leftUserButton === true && this.state.rightUserButton === true ) {
      return (
        <div style={nextIcon}><IconButton onClick={this.userIDPlus}><NextIcon color={grey700} /></IconButton></div>
      )
    }
    else if( this.state.leftUserButton === false && this.state.rightUserButton === true ) {
      return (
        <div style={nextIcon}><IconButton onClick={this.userIDPlus}><NextIcon color={grey700} /></IconButton></div>
      )
    }
  }

  showUserList() {
    return this.userList[this.state.machineID].users.map( (currentValue, index) => {
      return (
        <div style={user}>
          <div style={userIcon}>
            <IconButton style={userButton}>
              <Avatar
                color={grey50}
                // backgroundColor={randomColor()}
                backgroundColor={colorArray[index + 2]}
                size={40}
              >
                {currentValue.username.slice(0,1).toLocaleUpperCase()}
              </Avatar>
            </IconButton>
          </div>
          <div style={userName}>{currentValue.username.length > 6 ? currentValue.username.slice(0, 5) + '...' : currentValue.username.slice(0, 6)}</div>
        </div>
      )
    })
  }

  setCSS() {
    if(this.userList[this.state.machineID].users.length < 5) {
      return {
        'height': '100%',
        'width': '100%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'align-content': 'center',
      }
    }
    else {
      return {
        'height': '100%',
        'width': '100%',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'flex-direction':'row',
        'align-content': 'center',
        'flex-wrap': 'nowrap',
        'margin-left': '-' + this.state.userID * 100 + '%',
        'transition': 'margin-left 800ms ease-in-out',
      }
    }
  }

  render() {

    {this.initalAllElements()}

    if ( this.state.delay === true ) {
      return (

        <div style={wholeWisnuc}>

            <div style={firstLine}>
              <div style={wisnucLogo}><img src="/images/wisnuc/logo.png" width="114" height="28" /></div>
              <div style={login}>Login</div>
              <div style={skin}><Skin /></div>
              <div style={update}><Update /></div>
            </div>
            <div style={secondLine}><span style={diff}>Welcome to use </span>WISNUC</div>
            <div style={thirdLine}>

              <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>

            </div>  
            <div style={fourthLine}>Retrieving data...</div>
            <div style={fifthLine}>Please wait a moment.</div>
            <div style={sixthLine}>
              <div style={wholeWisnuc}>
                <CircularProgress size={50} thickness={4} />
              </div>
            </div>

        </div>

      )    
    }
    else {

      return (

        <ReactCSSTransitionGroup
          transitionName="state-in"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>

          <div style={wholeWisnuc}>

            <div style={firstLine}>
              <div style={wisnucLogo}><img src="/images/wisnuc/logo.png" width="114" height="28" /></div>
              <div style={login}>Login</div>
              <div style={skin}><Skin /></div>
              <div style={update}><Update /></div>
            </div>
            <div style={secondLine}><span style={diff}>Welcome to use </span>WISNUC</div>
            <div style={thirdLine}>
              {this.preMachineButton()}
              <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
              {this.nextMachineButton()}
            </div>

            <ReactCSSTransitionGroup
              transitionName="host-in"
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionEnter={false}
              transitionLeave={false}
              style={fourthLine}>

              <div>{this.userList[this.state.machineID].host.toLocaleUpperCase()}</div>

            </ReactCSSTransitionGroup>

            <ReactCSSTransitionGroup
              transitionName="host-in"
              transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionEnter={false}
              transitionLeave={false}
              style={fifthLine}>            

            <div>{this.userList[this.state.machineID].ip}</div>

            </ReactCSSTransitionGroup>

            <div style={sixthLine}>
              {this.preUserButton()}

              <div style={userWrapper}>

                <div style={this.setCSS()}>
                  {
                    this.showUserList()
                  }                
                </div>

              </div>

              {this.nextUserButton()}
            </div>         

          </div>

        </ReactCSSTransitionGroup>

      )      
    }

  }
}

export default Wisnuc
