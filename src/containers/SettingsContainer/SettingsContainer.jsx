import React, { useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";

const projectOptions = ["Current Jira Project", "Project Test 1", "Project Test 2", "Project Test 3"];

const SettingsContainer = () => {
    const [selectedProject, setSelectedProject] = useState(projectOptions[0]);

    const handleChange = (event) => {
        setSelectedProject(event.target.value);
    };

    const handleButtonClick = () => {
        // Do something when the button is clicked
        console.log("Button clicked!");
    };

    return (
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, margin: '1rem', paddingBottom: '70px'}}>
            <Select
                value={selectedProject}
                onChange={handleChange}
                variant="standard"
                sx={{
                    position: 'relative',
                    maxWidth: '256px',
                    width: '100%',
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: '10px',
                    color: "white",
                    "&:focus": {
                        backgroundColor: "transparent",
                        borderColor: "white",
                    },
                    marginBottom: '1rem'
                }}
            >
                {projectOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>

            <Button variant="contained" onClick={handleButtonClick} sx={{ backgroundColor: '#EA5254', color: 'white', maxWidth: '256px', width: '100%' }}>
                Change Project
            </Button>
            <div style={{ position: 'absolute', bottom: '70px'}}>
                <a href="/logout" style={{color: 'white'}}>Logout</a>
            </div>
        </div>
    );
};

export default SettingsContainer;
