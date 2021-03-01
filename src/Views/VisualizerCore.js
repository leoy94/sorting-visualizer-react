import {connect} from "react-redux";
import ArrayOptions from "../Components/ArrayOptions";
import VisualizerOptions from "../Components/VisualizerOptions";
import Visualizer from "../Components/Visualizer";

import {
    Container,
    Row,
    Col,
} from "reactstrap";


let VisualizerCore = () => {
    return (
        <>
            {/*{use grid system, with rows and columns}*/}
            <Container style={{paddingTop: "20px"}}>
                <Row >
                    <Col xs={12}>
                    <Visualizer></Visualizer>
                    </Col>
                </Row>
                <Row style={{margin: "", display: "flex", justifyContent: "center"}}>
                    <Col md={6} sm={12} xs={12} style={{marginTop: "15px"}}>
                        <ArrayOptions></ArrayOptions>
                    </Col>
                    <Col  md={6} sm={12} xs={12} style={{marginTop: "15px"}}>
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