import * as React from 'react';
import TaskCard from "../../components/TaskCard";
import CustomButton from '../../components/CustomButton';

export default function SpeedyBoard() {
    const tasksArr = [
        {
            id: 1,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3P"
        },
        {
            id: 2,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3P"
        },
        {
            id: 3,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3P"
        },
        {
            id: 4,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3P"
        },
        {
            id:5,
            title: "Complete react project",
            label: "Urgent",
            storyPoints: "3P"
        }
    ];

    const addToJiraHandler = () => {
        console.log('Button clicked');
    };

    return (
        <div style={{position:'relative', height: 'fit-content', flex: 1, paddingBottom: '70px'}}>
            <div style={{height: 'calc(100vh - 182px)', overflowY: 'scroll'}}>
                {tasksArr.map((elem) => (<TaskCard
                    title={elem.title}
                    label={elem.label}
                    storyPoints={elem.storyPoints}
                    onDelete={() => console.log('Delete clicked')}
                />))}
            </div>
            <CustomButton
                color="primary"
                text="Upload to Jira"
                onClick={addToJiraHandler}
                backgroundColor="#EA5254"
                sx={{position: 'fixed', bottom: '70px', left: 0, right: 0, margin: 'auto', width: 'fit-content'}}
            />
        </div>
    );
}