class MeetingModel{
    public meetingCode:number
    public groupCode: number
    public groupName: string

    public startTime:string
    public endTime:string
    public description:string
    public meetingRoom: string


    public constructor(meeting:MeetingModel){
        this.meetingCode = meeting.meetingCode
        this.groupCode = meeting.groupCode
        this.groupName = meeting.groupName
        this.startTime = meeting.startTime
        this.endTime = meeting.endTime
        this.description = meeting.description
        this.meetingRoom = meeting.meetingRoom
    }

    
}

export default MeetingModel