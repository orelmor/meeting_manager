import { ChangeEvent, useEffect, useState } from "react";
import "./MeetingList.css";
import MeetingModel from "../../../Models/MeetingModel";
import GroupModel from "../../../Models/GroupModel";
import meetingService from "../../../Services/MeetingService";
import MeetingCard from "../MeetingCard/MeetingCard";

function MeetingList(): JSX.Element {


    const [meetings, setMeetings] = useState<MeetingModel[]>([])
    const [groups, setGroups] = useState<GroupModel[]>([])

    useEffect(() => {
        meetingService.getAllGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err))

        meetingService.getAllMeetings()
            .then(mee => setMeetings(mee))
            .catch(err => alert(err))
    }, [])

    async function showMeetings(arg: ChangeEvent<HTMLSelectElement>) {



        const groupCode = +arg.target.value

        if (groupCode === 0) {
            meetingService.getAllMeetings()
                .then(mee => setMeetings(mee))
                .catch(err => alert(err))

        } else {
            meetingService.getAllMeetingsByGroupCode(groupCode)
                .then(mee => setMeetings(mee))
                .catch(err => alert(err))
        }



    }


    return (
        <div className="MeetingList">
            <h2>Meetings</h2>
            <hr />
            <label htmlFor="">Please select your group: </label>
            <select onChange={showMeetings}>
                <option value={0}>All company's meetings</option>
                {groups.map(g =>
                    <option key={g.groupCode} value={g.groupCode}>{g.groupName}</option>
                )}
            </select>
            <hr />
            <div className="card-container">
                {meetings.map(mee => <MeetingCard key={mee.meetingCode} meeting={mee} />)}
            </div>
        </div>
    );
}

export default MeetingList;
