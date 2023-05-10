import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import MeetingModel from "../4-models/meeting-model";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/_____
router.get("/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groups = await logic.getAllGroups()
        response.status(200).json(groups)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meetings/:groupCode", async (request: Request, response: Response, next: NextFunction) => {
    try {
       const groupCode = +request.params.groupCode
       const meetings = await logic.getAllMeetingsByGroupCode(groupCode)
       response.status(200).json(meetings)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
       
       const meetings = await logic.getAllMeetings()
       response.status(200).json(meetings)
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
       
       const meeting =  new MeetingModel(request.body)
        const addedMeeting = await logic.addNewMeeting(meeting)
        response.status(201).json(addedMeeting)

    }
    catch (err: any) {
        next(err);
    }
});





export default router;