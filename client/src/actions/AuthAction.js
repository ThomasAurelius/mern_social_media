import * as AuthApi from '../api/AuthRequest';

export const logIn = (formData) => async (dispatch) => {
   try {
      dispatch({ type: "AUTH_START" });
      const { data } = await AuthApi.logIn(formData)
      dispatch({ type: 'AUTH_SUCCESS', data })
      
   } catch (error) {
      console.log(error)
      dispatch({ type: 'AUTH_FAIL', error })
   }
}

export const signUp = (formData) => async (dispatch) => {
   try {
      dispatch({ type: "AUTH_START" });
      const { data } = await AuthApi.signUp(formData)
      dispatch({ type: 'AUTH_SUCCESS', data })
      
   } catch (error) {
      console.log(error)
      dispatch({ type: 'AUTH_FAIL', error })
   }
}