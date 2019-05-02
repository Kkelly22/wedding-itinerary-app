
export const fetchPlans = (user) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`user/${user}/plans`, data)
      .then(response => response.json())
      .then(plans => dispatch({
          type: 'FETCH_PLANS',
          payload: plans
      }))
      .catch(err => err)
  }
}

export const createPlan = plan => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ plan })
  }
  
  return dispatch => {
    fetch(`plans`, data)
      .then(response => response.json())
      .then(plan => dispatch({
        type: 'CREATE_PLAN',
        payload: plan
      }))
      .catch(err => err)
  }
}

export const deletePlan = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`plans/${ id }`, data)
      .then(response => response.json())
      .then(plan => dispatch({
        type: 'DELETE_PLAN',
        payload: plan
      }))
      .catch(err => err)
  }
}