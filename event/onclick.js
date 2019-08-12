class CurrentTime extends React.Component {
    constructor(props) {
        super(props);

        var now = new Date();
        this.state = {
            currentTime: now.toString()
        };
        this.refreshCurrentTime3 = this.refreshCurrentTime3.bind(this);
    }

    // A method of CurrentTime component
    refreshCurrentTime1() {
        var now = new Date();
        this.setState({ currentTime: now.toString() });
    }
    refreshCurrentTime2() {
        var now = new Date();
        this.setState({ currentTime: now.toString() });
    }
    refreshCurrentTime3() {
        var now = new Date();
        this.setState({ currentTime: now.toString() });
    }
    render() {
        return (
            <div>
                <h4>Current Time:</h4>
                <p>{this.state.currentTime}</p>
                <button onClick={() => this.refreshCurrentTime1()}>
                    Refresh Current Time 1
                </button>
                <button onClick={this.refreshCurrentTime2.bind(this)}>
                    Refresh Current Time 2
                </button>
                <button onClick={this.refreshCurrentTime3}>
                    Refresh Current Time 3
                </button>
            </div>
        );
    }
}

// Render
ReactDOM.render(<CurrentTime />, document.getElementById("currenttime1"));