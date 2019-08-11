
export const loginUser = (user, callback) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    
  }
  
  return dispatch => {
    fetch(`/login?user=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`, data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => alert("Incorrect Username/Password")) 
  }
}


export const FindUser = (user, callback) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    
  }
  
  return dispatch => {
    fetch(`find?wedding_code=${encodeURIComponent(user.wedding_code)}`, data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => alert("Incorrect Username/Password")) 
  }
}



export const createUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`signup`, data)
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => alert("Username/Password Already Exist!"))
  }
}
