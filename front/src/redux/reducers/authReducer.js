const initialState = {
   token: '', 
 };
 
 
 const authReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'LOGIN': 
       return {
         ...state,
         token: action.payload.token, 
       };
     case 'LOGOUT': 
       return initialState; 
     default:
       return state; 
   }
 };
 
 export default authReducer;
 
 /* creation de reducer authentification co et deco */ 
 /* cest ce qui manquait pour la soutenance avec le inital */