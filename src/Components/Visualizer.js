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


let Visualizer = (props) => {
    let backgroundColor="";

    return (
        <Card style={{height: "100%", marginBottom: "0"}}>
            <CardHeader style={{backgroundColor: ""}}>
                {/*<h6 className="surtitle"></h6>*/}
                <h5 className="h3 mb-0">Mergesort Visualizer</h5>
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
                        justifyContent: "center",
                        alignItems: "flex-end",
                        maxWidth: "100%",
                        margin: "0",
                        height: "100%"
                    }}>
                                {
                                    props.array.currentArray.map((item, index) =>{
                                            if (JSON.stringify(props.array.currentArray)==JSON.stringify( props.array.sortedArray)) {
                                                console.log("Hello");
                                                backgroundColor = "#2dce89";
                                            }
                                            else {
                                                backgroundColor = props.array.currentFocus[0] <= index && index <= props.array.currentFocus[1]? "#5e72e4": "lightgrey";
                                                backgroundColor = props.array.selected.some((item) => index === item)? "#fb6340": backgroundColor;
                                            }
                                            console.log(backgroundColor);

                                            let isSplit = false;
                                            if(props.array.splitEnds){
                                                isSplit = props.array.splitEnds.includes(index)?true:false;
                                            }

                                            // let marginRight = isSplit ? "15px":"1px";
                                            let divider = isSplit? <div style={{width: "5px", height: "100%", backgroundColor: "red", margin: "0 10px"}}></div>: "";
                                            return (
                                                <React.Fragment>
                                            <div key={index} style={{
                                                    backgroundColor: `${backgroundColor}`,
                                                    height: `${item/4}px`,
                                                    width: `${props.array.currentArray.length*.50}%`,
                                                    marginRight: "1px",
                                                    minWidth: ".1px",
                                                    borderTopRightRadius: "5px",
                                                    borderTopLeftRadius: "5px",
                                                }}>

                                            </div>
                                                {divider}
                                            </React.Fragment>

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
