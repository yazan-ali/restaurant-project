import Axios from 'axios';

function Logout(){
 Axios.get('/http://localhost:5000/logout')
}



export default Logout;