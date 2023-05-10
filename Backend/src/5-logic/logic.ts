import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import GroupModel from "../4-models/group-model";
import MeetingModel from "../4-models/meeting-model";

async function getAllGroups():Promise<GroupModel[]> {

    const sql = `SELECT * FROM groups`
    const groups = await dal.execute(sql)
    return groups
}

async function getAllMeetingsByGroupCode(groupCode:number):Promise<MeetingModel[]> {
    const sql =`SELECT M.*, G.groupName FROM
     groups AS G JOIN meetings AS M
     ON G.groupCode = M.groupCode
     WHERE M.groupCode = ?`

     const meetings = await dal.execute(sql,[groupCode])

     return meetings
}

async function getAllMeetings():Promise<MeetingModel[]> {

    const sql = `SELECT M.*, G.groupName FROM
    groups AS G JOIN meetings AS M
    ON G.groupCode = M.groupCode`
    const meetings = await dal.execute(sql)
    return meetings
}

async function addNewMeeting(meeting:MeetingModel):Promise<MeetingModel> {
    
    const sql =`INSERT INTO meetings VALUES(DEFAULT,?,?,?,?,?)`

    const info:OkPacket = await dal.execute(sql,[meeting.groupCode, meeting.startTime, meeting.endTime, meeting.description, meeting.meetingRoom])
   
    meeting.meetingCode = info.insertId

    return meeting
    
}


export default {
    getAllGroups,
    getAllMeetingsByGroupCode,
    getAllMeetings,
    addNewMeeting
};
