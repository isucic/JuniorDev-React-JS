function ProgressBar({skill, done}) {
    return (
        <div className="pb">
            <h4>{ skill }</h4>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${done}%`,
                    backgroundColor: "#b64b4b",
                }}></div>
                <span className="progressPercent">{ done }%</span>
            </div>
        </div>
    )
}

export default ProgressBar;