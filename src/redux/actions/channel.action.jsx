import request from '../../api'
import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS, SUBSCRIBE_CHANNEL_FAIL, SUBSCRIBE_CHANNEL_SUCCESS, } from '../actionType'

export const getChannelDetails = id => async dispatch => {
   try {
      dispatch({
         type: CHANNEL_DETAILS_REQUEST,
      })

      const { data } = await request('/channels', {
         params: {
            part: 'snippet,statistics,contentDetails',
            id: id,
         },
      })
      dispatch({
         type: CHANNEL_DETAILS_SUCCESS,
         payload: data.items[0],
      })
   } catch (error) {
      console.log(error.response.data)
      dispatch({
         type: CHANNEL_DETAILS_FAIL,
         payload: error.response.data,
      })
   }
}

export const checkSubscriptionStatus = id => async (dispatch, getState) => {
   try {
      const { data } = await request('/subscriptions', {
         params: {
            part: 'snippet',
            forChannelId: id,
            mine: true,
         },
         headers: {
            Authorization: `Bearer ${getState().auth.accessToken}`,
         },
      })
      dispatch({
         type: SET_SUBSCRIPTION_STATUS,
         payload: data.items.length !== 0,
      })
   } catch (error) {
      console.log(error.response.data)
   }
}

export const subscriberChannel = (id, type) => async (dispatch, getState) => {
   try {
      await request.post('/videos/rate', null, {
         params: {
            id: id,
            rating: type,
         },
         headers: { Authorization: `Bearer ${getState()?.auth.accessToken}` },
      })
      dispatch({
         type: SUBSCRIBE_CHANNEL_SUCCESS,
      })
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: SUBSCRIBE_CHANNEL_FAIL,
         payload: error.message,
      })
   }
}