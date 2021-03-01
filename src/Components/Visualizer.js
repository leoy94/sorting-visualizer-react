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

import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

import Slider from "nouislider";

import {
    chartOptions,
    parseOptions,
    chartExample2,
    chartExample3,
    chartExample4,
    chartExample5,
    chartExample6,
    chartExample7,
} from "../variables/charts.js";


let Visualizer = (props) => {
    return (
        <Card style={{height: "100%", marginBottom: "0"}}>
            <CardHeader style={{backgroundColor: ""}}>
                {/*<h6 className="surtitle"></h6>*/}
                <h5 className="h3 mb-0">Visualizer</h5>
            </CardHeader>
            <CardBody>
            {/*    default: "#172b4d",
                   primary: "#5e72e4",
                   secondary: "#f4f5f7",
                   info: "#11cdef",
                   success: "#2dce89",
                   danger: "#f5365c",
                    warning: "#fb6340",*/}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        maxWidth: "100%",
                        margin: "0"
                    }}>
                                {
                                    props.array.currentArray.map((item, index) =>{
                                            let backgroundColor = props.array.currentFocus[0] <= index && index <= props.array.currentFocus[1]? "#5e72e4": "lightgrey";
                                            console.log(backgroundColor);
                                            return (
                                            <div key={index}
                                                     style={{margin: "0 .5px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <div style={{
                                                    backgroundColor: `${backgroundColor}`,
                                                    height: `${item*10}px`,
                                                    width: "100%",
                                                    minWidth: ".1px",
                                                    borderTopRightRadius: "5px",
                                                    borderTopLeftRadius: "5px",
                                                }}>
                                                </div>
                                            </div>

                                        );
                                    }
                                    )}
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

export default connect(mapStateToProps)(Visualizer);
