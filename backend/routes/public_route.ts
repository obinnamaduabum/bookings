import {Router} from 'express';
import {AttractionsController} from "../controllers/attrations_controller";

class AttractionsRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        // @ts-ignore
        this.router.get('/search', AttractionsController.search);
        this.router.get('/', AttractionsController.index);
    }
}

export default AttractionsRouter;
