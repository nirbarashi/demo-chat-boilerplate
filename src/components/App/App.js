
//This is your top level React component, you may change everything

import React from 'react'
// import logo from '../../assets/spotim-logo.jpg'
// import {Container, Image} from 'semantic-ui-react'
import Chat from '../Chat/Chat'


// class App extends React.PureComponent {
//   render() {
//     return <Container className={'spotim-header'}>
//       <div className={'spotim-title'}>
//         Welcome to the Spot.IM Chat app
//       </div>
//       <div>
//         <Logo>
//           <Image size={'tiny'} src={logo}/>
//         </Logo>
//
//       </div>
//     </Container>
//   }
// }

const App = () => {
	return (
	    <Chat/>
    )
}

export default App;