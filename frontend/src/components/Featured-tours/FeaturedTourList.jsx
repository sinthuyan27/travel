import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col, Row, Spinner, Alert } from 'reactstrap';

import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';

const FeaturedTourList = () => {
    const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/getFeaturedTours`);

    return (
        <Row>
            {loading && (
                <Col lg="12" className="text-center">
                    <Spinner color="primary" />
                    <h4>Loading featured tours...</h4>
                </Col>
            )}

            {error && (\
                <Col lg="12">
                    <Alert color="danger">
                        <h4>Error: {error}</h4>
                    </Alert>
                </Col>
            )}

            {!loading && !error && featuredTours?.length === 0 && (
                <Col lg="12" className="text-center">
                    <h4>No featured tours available.</h4>
                </Col>
            )}

            {!loading &&
                !error &&
                featuredTours?.map((tour) => (
                    <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={tour._id}>
                        <TourCard tour={tour} />
                    </Col>
                ))}
        </Row>
    );
};

export default FeaturedTourList;
