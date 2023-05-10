import MeetingModel from "../../../Models/MeetingModel";
import "./MeetingCard.css";

interface MeetingCardProps {
    meeting: MeetingModel
}

function MeetingCard(props: MeetingCardProps): JSX.Element {
    return (


        <div className="MeetingCard">
            <div className="card-header">
                <h2>Meeting number {props.meeting.meetingCode}</h2>
                <p>{props.meeting.groupName}</p>
            </div>
            <div className="card-body">
                <p>{props.meeting.description}</p>
                <ul>
                    <li>starts: {props.meeting.startTime}</li>
                    <li>Ends: {props.meeting.endTime}</li>
                    <li>{props.meeting.meetingRoom}</li>
                </ul>
            </div>
        </div>


    );
}

export default MeetingCard;
