import React from "react";


class StatisticsCounter extends React.Component {


    render () {
        return (
            <div className="wrapper">
                <div className="counter col_fourth">
                    <i className="fa fa-code fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="300" data-speed="1500"></h2>
                    <p className="count-text ">SomeText GoesHere</p>
                </div>

                <div className="counter col_fourth">
                    <i className="fa fa-coffee fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                    <p className="count-text ">SomeText GoesHere</p>
                </div>

                <div className="counter col_fourth">
                    <i className="fa fa-lightbulb-o fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                    <p className="count-text ">SomeText GoesHere</p>
                </div>

                <div className="counter col_fourth end">
                    <i className="fa fa-bug fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="157" data-speed="1500"></h2>
                    <p className="count-text ">SomeText GoesHere</p>
                </div>
            </div>
        )


    }
}
export default StatisticsCounter

