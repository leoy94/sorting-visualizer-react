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

let ArrayOptions = (props) => {
    const [slider1Value, setSlider1Value] = React.useState("100.00");
    const slider1Ref = React.useRef(null);

    React.useEffect(() => {
        try {
            Slider.create(slider1Ref.current, {
                start: [6],
                connect: [true, false],
                step: 1,
                range: { min: 5.0, max: 100.0 },
            }).on("update", function (values, handle) {
                setSlider1Value(parseInt(values[0]));
            });
        } catch (e) {}

    }, []);

    return (
        <Card style={{maxHeight: "800px", height: "100%"}}>
            <CardHeader style={{backgroundColor: ""}}>
                {/*<h6 className="surtitle">Sorting Visualizer</h6>*/}
                <h5 className="h3 mb-0">Array Options</h5>
            </CardHeader>
            <CardBody>

                {/*<Row> <h4>Number of Items</h4> </Row>*/}
                <Row style={{justifyContent: "center", alignItems: "center"}}>

                    {/*<div className="input-slider-container">*/}
                    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span className="range-slider-value" style={{maxHeight: "25px", marginRight: "15px"}}>
                        {`Size: ${slider1Value}`}
                                            </span>
                    <div className="input-slider" color="info" ref={slider1Ref} style={{display: "flex", width: "auto", minWidth: "60%", marginRight: "10px"}} />
                    </div>
                    {/*</div>*/}
                </Row>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "15px"}}>
                    <Button size="lg" color={"success"} onClick={() => props.dispatch({type: "randomize", payload: {size: slider1Value}})}>Randomize</Button>
                    <Button size="lg" color={"danger"} onClick={() => props.dispatch({type: "reset"})}>Reset</Button>
                </div>
            </CardBody>
        </Card>
    );
}

function mapStateToProps(state) {
    return ({
        settings: state.settings
    });
}

export default connect(mapStateToProps)(ArrayOptions);
