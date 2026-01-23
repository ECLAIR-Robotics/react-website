import React from 'react';
import '../../styles/projects/projects.css';

interface ProjectFilterProps {
  curFilter: string;
  setCurFilter: (filters: string) => void;
  handleResize: () => void;
}

function ProjectFilter(props: ProjectFilterProps) {
    //@ts-ignore
    const handleFilterChange = (newFilters: string ) => {
        props.handleResize();
        props.setCurFilter(newFilters);
        console.log("Filter changed to: ", newFilters);
    };


    return (
    <div className='filterContainer'>
        <ul className='filterOptions'>
        <li className={`filterOption  ${props.curFilter === "inprogress"? 'currentSetFilter' : ""}`} onClick={() => handleFilterChange("inprogress")}>In-Progress</li>
        <li className={`filterOption  ${props.curFilter === "completed"? 'currentSetFilter' : ""}`} onClick={() => handleFilterChange("completed")}>Completed</li>
        <li className={`filterOption ${props.curFilter ==="all" ? 'currentSetFilter' : ""}`} onClick={() => handleFilterChange("all")}>All</li>
        </ul>
    </div>
    )
}

export default ProjectFilter