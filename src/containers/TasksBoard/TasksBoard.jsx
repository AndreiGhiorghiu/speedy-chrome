import * as React from 'react';
import TaskCard from "../../components/TaskCard";
import CustomButton from '../../components/CustomButton';

export default function SpeedyBoard() {
    const tasksArr = [
        {
            id: 1,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3p"
        },
        {
            id: 2,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3p"
        },
        {
            id: 3,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3p"
        },
        {
            id: 4,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3p"
        },
        {
            id:5,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3p"
        }
    ];

    const addToJiraHandler = () => {
        console.log('Button clicked');
    };

    return (
        <div style={{height: 'fit-content', flex: 1, paddingBottom: '70px'}}>
            <>
                {tasksArr.map((elem) => (<TaskCard
                    title={elem.title}
                    label={elem.label}
                    storyPoints={elem.storyPoints}
                    onDelete={() => console.log('Delete clicked')}
                />))}
            </>
            <CustomButton
                color="primary"
                text="Upload to Jira"
                onClick={addToJiraHandler}
                backgroundColor="#EA5254"
            />
        </div>
    );
}