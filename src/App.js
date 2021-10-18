import './App.css';
import { useEffect } from 'react';
import { connect } from "react-redux"
import { fetchUsers, AddLike, DeleteUser } from './redux/actions';

function App({dispatchUsers, users, dispatchLike, dispatchDelete}) {
  // handleClick (id){
  //   console.log(id)
  // };

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data);
      dispatchUsers(data.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [dispatchUsers]);

  // handleClick(id, isLiked){
  //   if (!isLiked) {
  //     this.props.likePhoto(id, "POST");
  //   } else {
  //     this.props.likePhoto(id, "DELETE");
  //   }
  // }



  return (
    <div className="App">
      <ul>
      {users.map(i => (
        <li key={i.id}>
          <img src={i.avatar} alt="avatar"></img>
          <p>{i.first_name}</p>
          <p>{i.last_name}</p>
          <div onClick={() =>
              dispatchLike(i.id, i.like)
            }>
          {i.like
        ? <p>'лайк'</p>
        : <p>"нет_лайка"</p>
          }</div>
          <p onClick={() =>
              dispatchDelete(i.id)
            }>удалить</p>
        </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.reducer.users,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchUsers: (data) => dispatch(fetchUsers(data)),
    dispatchLike: (id, like) => dispatch(AddLike(id, like)),
    dispatchDelete: (id) => dispatch(DeleteUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
