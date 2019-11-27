import React from 'react'

import withData from '../../with-data'

// Convert this functional component to a class component

// class UserProfile extends React.Component {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		posts: []
	// 	}
	// }

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			// console.log(data)
	// 			this.setState({ posts: data })
	// 		)
	// 	// console.log(this.state)
	// }

// 	render() {
// 		// console.log(this.state)
// 		return (
// 			<div className='container'>
// 				<h1>{this.props.name}</h1>
// 				<h2>{this.props.email}</h2>
// 				Posts:
// 				{this.state.posts.map(post => (
// 					<div className='post' key={post.id}>
// 						<h1>{post.title}</h1>
// 						<p> {post.body} </p>
// 					</div>
// 				))}
// 			</div>
// 		)
// 	}
// }

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile)
