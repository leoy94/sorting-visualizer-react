import {connect} from "react-redux";
import ArrayOptions from "../Components/ArrayOptions";
import VisualizerOptions from "../Components/VisualizerOptions";
import Visualizer from "../Components/Visualizer";

import {
    Container,
    Row,
    Col,
} from "reactstrap";


let VisualizerCore = (props) => {
    if (props.array.unsortedArray.length===0){
        props.dispatch({type: "randomize", payload: {size: 6}});
    }
    return (
        <>
            {/*{use grid system, with rows and columns}*/}
            <Container style={{padding: "20px 0 0 0", maxWidth: "90%"}}>
                <Row >
                    <Col xs={12} style={{padding: "0"}}>
                    <Visualizer></Visualizer>
                    </Col>
                </Row>
                <Row style={{margin: "", display: "flex", justifyContent: "space-around"}}>
                    <Col md={5} sm={12} xs={12} style={{marginTop: "15px", padding: "0"}}>
                        <ArrayOptions></ArrayOptions>
                    </Col>
                    <Col  md={5} sm={12} xs={12} style={{marginTop: "15px", padding: "0"}}>
                        <VisualizerOptions></VisualizerOptions>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function mapStateToProps(state) {
    return ({
      ...state
    });

}

export default connect(mapStateToProps)(VisualizerCore);