import React, { Component } from "react";
import styled from "styled-components";

const Span = styled.span`
    display: block;
    margin-top: 20px;
`;

const Wrapper = styled.div`
    margin-top: 20px;
    width: 100px;
    margin: 20px auto;
    box-shadow: 0 6px 5px -4px #000000b5;
`;

const DurationTime = styled.div`
    background-color: #e6e6e6;
    padding: 10px 0;
    font-size: 3rem;
    border-radius: 5px 5px 0 0;
`;

const Days = styled.div`
    background-color: #ff5050;
    padding: 5px 0;
    color: #fff;
    border-radius: 0 0 5px 5px;
`;

const Error = styled.span`
    color: red;
`;

class Duration extends Component {
    render() {
        const { startDate, endDate } = this.props;

        if (!startDate || !endDate) return null;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = end.getTime() - start.getTime();
        const duration = Math.ceil(diff / (1000 * 3600 * 24));

        if (duration < 0) return <Error>{ `${ endDate } comes before ${ startDate }.` }</Error>;

        return (
            <Wrapper>
                <DurationTime>{duration}</DurationTime>
                <Days>Days</Days>
            </Wrapper>
        );
    }
}
 
export default Duration;