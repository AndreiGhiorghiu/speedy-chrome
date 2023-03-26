import React, { useEffect, useState } from 'react';
import { Button, MenuItem, Select } from '@mui/material';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import store from '$store';
import { emit, on } from '$events';
import jira from '$apis/jira';
import { toast } from 'react-hot-toast';

const projectOptions = [
  'Current Jira Project',
  'Project Test 1',
  'Project Test 2',
  'Project Test 3',
];

const SettingsContainer = () => {
  const [selectedProject, setSelectedProject] = useState(projectOptions[0]);
  const [projects, setProjects] = useState([]);

  on('SET_PROJECTS', (data) => {
    setProjects(data);
  });

  on('SET_PROJECT', (data) => {
    console.log('data', data);
    setSelectedProject(data);
  });

  useEffect(() => {
    setProjects(store.get('projects'));
    setSelectedProject(store.get('project'));
  }, [store.value('project'), store.value('projects')]);

  const handleChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleButtonClick = () => {
    store.set('project', selectedProject);
    emit('SET_PROJECT', selectedProject);
    toast.success('Project changed.');
  };

  const handleLogout = () => {
    chrome?.storage?.local?.clear();
    store.set('url', null);
    store.set('user', null);

    emit('LOGOUT');
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: '1rem',
        paddingBottom: '70px',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '256px',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '5px',
            pointerEvents: 'none',
            top: '5px',
            zIndex: 9,
          }}
        >
          <ExpandMoreSharpIcon />
        </div>
        <Select
          value={selectedProject}
          onChange={handleChange}
          variant="standard"
          disableUnderline={true}
          sx={{
            position: 'relative',
            maxWidth: '256px',
            width: '100%',
            backgroundColor: 'transparent',
            border: '1px solid white',
            borderRadius: '10px',
            color: 'white',
            '&:focus': {
              backgroundColor: 'transparent',
              borderColor: 'white',
            },
            marginBottom: '1rem',
          }}
        >
          {projects.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          '&:hover': { backgroundColor: '#EA5254' },
          backgroundColor: '#EA5254',
          color: 'white',
          maxWidth: '256px',
          width: '100%',
        }}
      >
        Change Project
      </Button>
      <div style={{ position: 'absolute', bottom: '70px' }}>
        <a
          href="#"
          style={{ color: 'white', fontSize: '14px' }}
          onClick={() => handleLogout()}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default SettingsContainer;
