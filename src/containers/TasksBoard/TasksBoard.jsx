import * as React from 'react';
import TaskCard from "../../components/TaskCard";
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-hot-toast';

export default function TasksBoard() {

    const addToJiraHandler = () => {
        toast.success("Hello World")
        console.log('Button clicked');
    };

    const [tasks, setTasks] = React.useState([
        {
            id: 1,
            title: "Complete react project",
            label: "Strategy",
            storyPoints: "3P"
        },
        {
            id: 2,
            title: "Complete react project",
            label: "Product",
            storyPoints: "3P"
        },
        {
            id: 3,
            title: "Complete react project",
            label: "Experience",
            storyPoints: "3P"
        },
        {
            id: 4,
            title: "Complete react project",
            label: "Engineering",
            storyPoints: "3P"
        },
        {
            id:5,
            title: "Complete react project",
            label: "Data",
            storyPoints: "3P"
        }
    ]);

    function handleDelete(elemId) {
        setTasks(tasks.filter(a => a.id != elemId))
    }

    function handleChange(elemId, text) {
        var _tasks = [...tasks];
        _tasks.forEach(elem => {
            if(elem.id == elemId) {
                elem.title = text;
            }
        });

        setTasks(_tasks);
    }

    return (
        <div style={{position:'relative', height: 'fit-content', flex: 1, paddingBottom: '70px'}}>
            <div style={{height: 'calc(100vh - 182px)', overflowY: 'scroll'}}>
                {tasks.map((elem) => (<TaskCard
                    title={elem.title}
                    label={elem.label}
                    storyPoints={elem.storyPoints}
                    onDelete={() => handleDelete(elem.id)}
                    onChange={(value) => handleChange(elem.id, value)}
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