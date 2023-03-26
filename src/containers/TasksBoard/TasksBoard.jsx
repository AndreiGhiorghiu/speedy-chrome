import * as React from 'react';
import TaskCard from "../../components/TaskCard";
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-hot-toast';

export default function TasksBoard(props) {

    const addToJiraHandler = () => {
        toast.success("Hello World")
        console.log('Button clicked');
    };

    const [tasks, setTasks] = React.useState(props.tasks);

    function handleDelete(elemId) {
        setTasks(tasks => tasks.filter(a => a.id != elemId))
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
                {tasks.length > 0 && tasks.map((elem) => (<TaskCard
                    key={elem.id}
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