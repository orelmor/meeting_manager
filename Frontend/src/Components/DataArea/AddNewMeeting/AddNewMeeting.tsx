import { useForm } from "react-hook-form";
import MeetingModel from "../../../Models/MeetingModel";
import "./AddNewMeeting.css";
import { useEffect, useState } from "react";
import meetingService from "../../../Services/MeetingService";
import GroupModel from "../../../Models/GroupModel";
import { useNavigate } from "react-router-dom";

function AddNewMeeting(): JSX.Element {

    const { register, handleSubmit } = useForm<MeetingModel>()
    const [groups, setGroups] = useState<GroupModel[]>([])
    const navigate = useNavigate()


    useEffect(() => {
        meetingService.getAllGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err))
    }, [])

    async function send(meeting: MeetingModel) {
        try {
            await meetingService.addNewMeeting(meeting)
            alert("Meeting successfully added")
            navigate("/home")
            
        } catch (err:any) {
            alert(err)
        }
    }


    return (
        <div className="AddNewMeeting">

            <form onSubmit={handleSubmit(send)}>
                <h3>Schedule new meeting</h3>
                <label htmlFor="">Choose meeting's destination group: </label>
                <select {...register("groupCode")} required>
                    <option disabled value="" ></option>
                    {groups.map(g => <option key={g.groupCode} value={g.groupCode}>{g.groupName}</option>)}
                </select>
                <label htmlFor="start">Meeting starts at:</label>
                <input type="datetime-local" name="" id="start" {...register("startTime")} required />

                <label htmlFor="end">Meeting ends at:</label>
                <input type="datetime-local" name="" id="end" {...register("endTime")} required/>

                <label htmlFor="des">Description</label>
                <textarea {...register("description")} id="des" required></textarea>

                <label htmlFor="meetingRoom">Meeting Room</label>
                <input type="text" id="meetingRoom" {...register("meetingRoom")} required/>

                <input type="submit" value="Schedule" id="sub"/>



            </form>
        </div>
    );
}

export default AddNewMeeting;
