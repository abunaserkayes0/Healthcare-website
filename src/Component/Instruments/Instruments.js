import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Instrument from '../Instrument/Instrument';
import './Instruments.css';

const Instruments = () => {
    const [instruments, setInstruments] = useState([]);
    useEffect(() => {
        fetch('/instruments.json')
            .then(response => response.json())
            .then(data=>setInstruments(data))
    },[])
    return (
        <div className="my-5">
            <Container>
                <div className="text-center my-4">
                            <h2 className="fw-bold">Instrument</h2>
                            <p>Instrument is the most useful thing in hospital because it's short description below .</p>
                </div>
                <Row md={3} xs={1} className="g-4">
                    {instruments.map(instrument=><Instrument key={instrument.id} instrument={instrument}></Instrument>)}
                </Row>
            </Container>
        </div>
    );
};

export default Instruments;