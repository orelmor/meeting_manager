import axios from "axios";
import GroupModel from "../Models/GroupModel";
import appConfig from "../Utils/Config";
import MeetingModel from "../Models/MeetingModel";

class MeetingService {


    // Returning all the company's groups
    async getAllGroups(): Promise<GroupModel[]> {
        const response = await axios.get<GroupModel[]>(appConfig.groupsUrl)
        const groups = response.data
        return groups
    }

    // Returning all the scedueled meetings
    async getAllMeetings(): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsUrl)
        const meetings = response.data
        return meetings
    }

    // Select meetings by group's code
    async getAllMeetingsByGroupCode(groupCode: number): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsUrl + groupCode)
        const meetings = response.data
        return meetings
    }

    async addNewMeeting(meeting: MeetingModel): Promise<void> {

        const response = await axios.post<MeetingModel>(appConfig.meetingsUrl,meeting)
        const addedMeeting = response.data
    }



}

const meetingService = new MeetingService();

export default meetingService;