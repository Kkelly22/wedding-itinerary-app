
export const fetchPlans = (user) => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`users/${user}/plans`, data)
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
    fetch(`users/${plan.user_id}/plans`, data)
      .then(response => response.json())
      .then(plan => {
        dispatch({
              type: 'CREATE_PLAN',
              payload: plan
            })})
      .catch(err => err)
  }
}

export const deletePlan = plan => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`users/${plan.user_id}/plans/${plan.id}`, data)
      .then(response => response.json())
      .then(plan => dispatch({
        type: 'DELETE_PLAN',
        payload: plan.id
      }))
      .catch(err => err)
  }
}