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
                <hr />
                <ul>
                    <li>From: {props.meeting.startTime}</li>
                    <li>To: {props.meeting.endTime}</li>
                    <br />
                    <li>{props.meeting.meetingRoom}</li>
                </ul>
            </div>
        </div>


    );
}

export default MeetingCard;
