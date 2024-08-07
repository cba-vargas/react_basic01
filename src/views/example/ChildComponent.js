import React from "react";
import "./demo.scss";
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
        showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true? 'showJobs = true' : 'showJobs = false'; // Nếu showJobs là true thì lấy True, ngược lại lấy false
        console.log('>>> Check showJobs: ', check)
        return (
            <>
                {showJobs === false?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    : // else
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;