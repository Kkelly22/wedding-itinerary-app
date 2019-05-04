
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
      .catch(err => err)
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
      .catch(err => err)
  }
}
