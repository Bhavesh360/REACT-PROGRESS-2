// // var app = ducument.getElementById('app');
// // app.innerHTML ='Hello!';
var USER_DATA = {
  name: 'BhaveshGupta',
  username: 'Bhavesh360',
  image: 'https://avatars3.githubusercontent.com/u/12084807?v=3&u=d7e60d9ccddb6d975c2744af01a16155c9e802fe&s=400'
}

/*
Focused
Independent
Reusable
Small
Testables
*/


var React = require('react');
var ReactDOM = require('react-dom');

//https://avatars3.githubusercontent.com/u/12084807?v=3&u=d7e60d9ccddb6d975c2744af01a16155c9e802fe&s=400

// var HelloWorld = React.createClass({  // React object has create class which allows you to create a brand new react components
//   render: function(){         //render returns to you what the UI of the component looks like.
//     // console.log(this.props);
//     return(
//       <div> Hello {this.props.name}</div>
//     )
//   }
// });

var ProfilePic = React.createClass({
  render: function () {
      return <img src = {this.props.imageUrl} style = {{height: 100, width: 100}} />
  }
});

var Link = React.createClass({      //making custom method link.
  changeURL : function(){
    window.location.replace(this.props.href)
  },

  render:function(){
    return(
      <span style={{color: 'blue', cursor: 'pointer' }}
      onClick= {this.changeURL}>
      {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return(
      <Link href={'https://github.com/' + this.props.username}>
      {this.props.username}
      </Link>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return(
      <div>{this.props.name}</div>
    )

  }
});

var Avatar = React.createClass({
  render: function(){
    return(
      <div>
        <ProfilePic imageUrl = {this.props.user.image} />
        <ProfileName name = {this.props.user.name} />
        <ProfileLink username = {this.props.user.username} />
      </div>
    )
  }
})


ReactDOM.render(          //Now we need to tell the dom where to render the above react compnent to.
                          //for this we need ReactDOM.
  <Avatar user = {USER_DATA} />,
  document.getElementById('app')
);


// Pure FUNCTIONS: produces the same results given the same arguments.
//                doesnt depend on variables and doesnt modify variables outside of its scope.
//                no side effects (mutations, async req)
