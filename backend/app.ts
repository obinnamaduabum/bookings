import {Application} from 'express';

const express = require('express');
import * as bodyParser from "body-parser";
const cookieParser = require('cookie-parser');
import {CustomRouterInterface} from "./interfaces/custom_router_interface";

export class App {
    public app: Application;
    public port: number;
    public hostName: string;

    constructor(controllers: CustomRouterInterface[], port: number, hostName: string) {
        this.app = express();
        this.port = port;
        this.hostName = hostName;
        if (process.env.NODE_ENV === 'development') {
            // this.app.use(logger('dev')); // log requests to the console
        }
        this.initializeMiddleWares();
        this.initializeControllers(controllers);
    }

    private initializeMiddleWares() {
        this.app.use(bodyParser.json({limit: '1000mb'}));
        this.app.use(cookieParser());
    }

    private initializeControllers(controllers: CustomRouterInterface[]) {
        controllers.forEach((controller) => {
            if (controller) {
                console.log(controller);
                this.app.use(controller.url, controller.routerObj.router);
            }
        });
    }

    public listen() {
        this.app.listen(this.port, this.hostName, () => {
            console.log(`App listening on the host ${this.hostName}`);
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
