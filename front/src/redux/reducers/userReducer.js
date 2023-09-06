const initialState = {
   username: '', 
   firstname: '', 
   lastname: '', 
 };
 
 
 const userReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'SET_USER': 
       return {
         ...state,
         username: action.payload.username, 
         firstname: action.payload.firstname, 
         lastname: action.payload.lastname, 
       };
     case 'LOGOUT': 
       return initialState; 
     default:
       return state; 
   }
 };
 
 export default userReducer;
 
 /* modification + ajout apporter pour valider la soutenance */

 /* -mettre a jour les informations de l'utilisateur CEST FAIT*/

/* + ajout de logout pour reinitialiser letat de lutilisateur lors de la deconexion */ 