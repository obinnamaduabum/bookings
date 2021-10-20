import {CustomRouterInterface} from "./interfaces/custom_router_interface";
import {App} from "./app";
import AttractionsRouter from "./routes/public_route";
let customRouters: CustomRouterInterface[] = [
    {
        url: '/v1/api/public/attractions',
        routerObj: new AttractionsRouter()
    }
];

let PORT;
let HOSTNAME ;

HOSTNAME = "localhost";
PORT = 3000;

console.log(PORT);
console.log(HOSTNAME);

const app = new App(
    customRouters,
    PORT,
    HOSTNAME
);

app.listen();
