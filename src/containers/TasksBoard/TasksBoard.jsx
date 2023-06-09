import * as React from 'react';
import TaskCard from '../../components/TaskCard';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-hot-toast';
import jira from '$apis/jira';

export default function TasksBoard(props) {
  const [tasks, setTasks] = React.useState(props.tasks);

  const addToJiraHandler = async () => {
    console.log('Button clicked');

    props.setLoading(true);

    try {
      await Promise.all(
        tasks.map((task) =>
          jira.pushIssue({
            title: task.title,
            label: task.label,
            storyPoints: task.storyPoints,
          })
        )
      );

      toast.success('Tasks added!');
    } catch (_) {
      toast.error('Something went wrong!');
    }

    props.onTasksFinished();
  };

  function handleDelete(elemId) {
    setTasks((tasks) => tasks.filter((a) => a.id != elemId));
  }

  function handleChange(elemId, text) {
    var _tasks = [...tasks];
    _tasks.forEach((elem) => {
      if (elem.id == elemId) {
        elem.title = text;
      }
    });

    setTasks(_tasks);
  }

  return (
    <div
      style={{
        position: 'relative',
        height: 'fit-content',
        flex: 1,
        paddingBottom: '70px',
      }}
    >
      <div style={{ height: 'calc(100vh - 182px)', overflowY: 'scroll' }}>
        {tasks.length > 0 &&
          tasks.map((elem) => (
            <TaskCard
              key={elem.id}
              title={elem.title}
              label={elem.label}
              storyPoints={elem.storyPoints}
              onDelete={() => handleDelete(elem.id)}
              onChange={(value) => handleChange(elem.id, value)}
            />
          ))}
      </div>
      <CustomButton
        color="primary"
        text="Upload to Jira"
        onClick={addToJiraHandler}
        backgroundColor="#EA5254"
        sx={{
          position: 'fixed',
          bottom: '70px',
          left: 0,
          right: 0,
          margin: 'auto',
          width: 'fit-content',
        }}
      />
    </div>
  );
}
