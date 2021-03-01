import {connect} from "react-redux";
import React from "react";
import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip, CardHeader, Form,
} from "reactstrap";

import Slider from "nouislider";



let VisualizerOptions = (props) => {
    const [slider1Value, setSlider1Value] = React.useState("100.00");
    const slider1Ref = React.useRef(null);

    React.useEffect(() => {
        try {
            Slider.create(slider1Ref.current, {
                start: [.05],
                connect: [true, false],
                step: .01,
                range: { min: 0.05, max: 1.0 },
            }).on("update", function (values, handle) {
                setSlider1Value(values[0]);
            });
        } catch (e) {}

    }, []);

    React.useEffect(() => {
        let currentAnimation = props.animations.currentAnimation;
        let length = props.animations.frames.length;
        if(!props.settings.isPaused && currentAnimation < length){
            setTimeout(()=>{props.dispatch({type: "processNextFrame"})},props.settings.delay*100);
        }

    }, [props.animations.currentAnimation, props.settings.isPaused]);

    return (
        <Card style={{maxHeight: "800px", height: "100%"}}>
            <CardHeader style={{backgroundColor: ""}}>
                {/*<h6 className="surtitle">Sorting Visualizer</h6>*/}
                <h5 className="h3 mb-0">Visualizer Options</h5>
            </CardHeader>
            <CardBody>

                {/*<Row> <h4>Number of Items</h4> </Row>*/}
                <Row style={{justifyContent: "center", alignItems: "center"}}>

                    {/*<div className="input-slider-container">*/}
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="range-slider-value" style={{maxHeight: "25px", marginRight: "15px"}}>
                        {`${slider1Value}s`}
                    </span>
                        <div className="input-slider" color="info" ref={slider1Ref} style={{display: "flex", width: "auto", minWidth: "60%", marginRight: "10px"}} />
                    </div>
                    {/*</div>*/}
                </Row>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "15px"}}>
                    {props.settings.isPaused ? <Button size="lg" color={"success"} onClick={
                        () => {
                            props.dispatch({type: "play",payload: { delay: slider1Value}});
                        }
                    }>Play</Button>: <Button size="lg" color={"info"} onClick={() => props.dispatch({type: "pause"})}>Pause</Button>}
                </div>
            </CardBody>
        </Card>
    );
}

function mapStateToProps(state) {
    return ({
        ...state
    });

}

export default connect(mapStateToProps)(VisualizerOptions);