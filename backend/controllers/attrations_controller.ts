import {Request, Response} from "express";
import {AttractionsService} from "../services/attractions_service";


export class AttractionsController {

    static async search(req: Request, res: Response) {

        try {

            if(req.query.score) {
                const score = ''+req.query.score;
                console.log(score);
                const response = await AttractionsService.getAttractionsByReviewScore(parseInt(score));
                return res.status(200).send({
                    success: true,
                    message: 'Message sent',
                    data: response
                });
            } else  {
                return res.status(200).send({
                    success: false,
                    message: 'Score required'
                });
            }

        } catch (e) {
            console.log(e);

            return res.status(500).send({
                success: false,
                message: 'Internal server error',
            });
        }
    }

    static async index(req: Request, res: Response) {

        try {

            const response = await AttractionsService.getAttractions();
            return res.status(200).send({
                success: true,
                message: 'Message sent',
                data: response
            });

        } catch (e) {
            console.log(e);

            return res.status(500).send({
                success: false,
                message: 'Internal server error',
            });
        }
    }
}
