import React from 'react'

import withData from '../../with-data'

// class UserList extends React.Component {
	// constructor(props) {
	// 	super(props)

  //   this.state = {
  //     users:[]
  //   }
  // }
  
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data =>
  //       // console.log(data)
  //       this.setState({ users: data })
  //     )
  //   // console.log(this.state)
  // }

// 	render() {
// 		return (
// 			<div className='container user-list'>
// 				<h1> Users List </h1>
// 				{this.state.users.map(user => (
// 					<div className='post' key={user.id}>
// 						<h1> {user.name} </h1>
// 						<h2> {user.email} </h2>
// 					</div>
// 				))}
// 			</div>
// 		)
// 	}
// }

const UserList = ({ data }) => (
  <div className='container user-list'>
    <h1> Users List </h1>
    {data.map(user => (
      <div className='post' key={user.id}>
        <h1> {user.name} </h1>
        <h2> {user.email} </h2>
      </div>
    ))}
  </div>
);

export default withData(UserList)
