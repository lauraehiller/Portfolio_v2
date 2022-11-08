import React from 'react';
import './Job.scss';

class Job extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: true
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    
    toggleVisibility() {
        this.state.visible ? this.setState({visible: false}) : this.setState({visible: true});
    }

    render() {
        const renderList = this.props.description.map(function (result) {
                    return (
                        <li id="result" key={result.line}>{result.line}</li>
                    );
                });
        return (
            <div className="job-wrapper">
                <div className="job" onClick={() => {this.toggleVisibility()}}>
                    <div className="job-header" >
                        <h3>{this.props.title}</h3>
                        <p>{this.props.dates}</p>
                    </div>
                    <div className={this.state.visible ? "hidden" : "job-body"}>
                        <p>{this.props.company}</p>
                        <br/> 
                        <div className="list-wrapper">
                            <ul>
                                {renderList}
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Job;
/*
import React from 'react';

class Job extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: "tab0",
            title: "Web Developer",
            company: "PV magazine",
            dates: "August 2022 - Present",
            description: [
                {line: "Collaborate with a team of writers and designers"}, 
                {line: "Design and send out weekly newsletters using MailChimp"}, 
                {line: "Update and maintain company website."}]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(job){
        switch(job){
            default: 
                this.setState({
                    activeTab: "tab0",
                    title: "Web Developer",
                    company: "PV magazine",
                    dates: "August 2022 - Present",
                    description: [
                        {line: "Collaborate with a team of writers and designers"}, 
                        {line: "Design and send out weekly newsletters using MailChimp"}, 
                        {line: "Update and maintain company website."}]
                });
                break;
            case 0:
                this.setState({
                    activeTab: "tab0",
                    title: "Web Developer",
                    company: "PV magazine",
                    dates: "August 2022 - Present",
                    description: [
                        {line: "Collaborate with a team of writers and designers"}, 
                        {line: "Design and send out weekly newsletters using MailChimp"}, 
                        {line: "Update and maintain company website."}]
                });
                break;
            case 1:
                this.setState({
                    activeTab: "tab1",
                    title: "Web Developer",
                    company: "EmpoweredU",
                    dates: "January 2021 - March 2021",
                    description: [
                        {line: "Worked directly witht he client to design the EmpoweredU Website using WordPress."}]
                });
                break;
            case 2:
                this.setState({
                    activeTab: "tab2",
                    title: "Tutor for Computer Systems and Assembly",
                    company: "Univ. of California",
                    dates: "September 2019 - December 2021",
                    description: [
                        {line: "Taught undergraduate students computer fundamentals e.g. logic, design, memory, debugging techniques and assembly language"}, 
                        {line: "Organized and conducted weekly tutoring sessions that focused on reviewing class concepts, explicating assignments, and assisting with debugging"}]
                });
                break;
            case 3:
                this.setState({
                    activeTab: "tab3",
                    title: "Grader for Tech Writing for Engineers",
                    company: "Univ. of California",
                    dates: "September 2021 - March 2022",
                    description: [
                        {line: "Advised students on effective written communication and professional presentation"}, 
                        {line: "Graded student assignments including resumes, research essays, and LaTeX documents"}]
                });
                break;
            case 4:
                this.setState({
                    activeTab: "tab4",
                    title: "Tutor for Introduction to 3D Animation",
                    company: "Univ. of California",
                    dates: "September 2020 - December 2020",
                    description: [
                        {line: "Taught students how to use Blender to create assets, animations, textures, and effects"}, ]
                });
                break;
        }
    }
    
    render() {
        const renderList = this.state.description.map(function (result) {
                    return (
                        <li id="result" key={result.line}>{result.line}</li>
                    );
                });
        return (
            <div className="experience-panel">
                <div className="job-list">
                    <button className={this.state.activeTab === "tab0" ? "active" : ""} onClick={()=>{this.handleClick(0)}}>PV Magazine</button>
                    <button className={this.state.activeTab === "tab1" ? "active" : ""}  onClick={()=>{this.handleClick(1)}}>EmpoweredU</button>
                    <button className={this.state.activeTab === "tab2" ? "active" : ""}  onClick={()=>{this.handleClick(2)}}>UCSC</button>
                    <button className={this.state.activeTab === "tab3" ? "active" : ""}  onClick={()=>{this.handleClick(3)}}>UCSC</button>
                    <button className={this.state.activeTab === "tab4" ? "active" : ""}  onClick={()=>{this.handleClick(4)}}>UCSC</button>
                </div>
                <div className="job-wrapper">
                    <div className="job">
                        <h2>{this.state.title} at <span className="styled-text">{this.state.company}</span></h2>
                        <h4>{this.state.dates}</h4>
                        <br/> 
                        <div className="list-wrapper">
                            <ul>
                            {renderList}
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Job;*/