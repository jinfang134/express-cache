import {initCache} from '../src/public-api'
import { UserService } from './UserService';


const service = new UserService();

initCache({
        type: 'memory',
})

function main(){
    service.getUser(23);
    service.getUser(23);
    service.deleteUser(23)
    service.getUser(23)
}

main();