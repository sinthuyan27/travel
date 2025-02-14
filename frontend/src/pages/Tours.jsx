import React, { useEffect, useState } from 'react'
import CommonSection from "../shared/commonSection";

import "../styles/tour.css";
import tourData from "../assets/data/tours";
import TourCard from "../shared/TourCard";
import SearchBar from "./../shared/searchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from 'reactstrap';

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`)
  const { data: toursCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(() => {
    const pages = Math.ceil(5 / 4); //later we will use backend data count
    setPageCount(pages);
  }, [page, ]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {
            !loading && !error &&
            <Row>
              {
                tours?.map(tour => (
                  <Col lg="3" className="mb-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))
              }

              <Col lg="12">
                <div className="pagination d-flex align-items-center 
             justify-content-center mt-4 gap-3 ">
                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)}
                      className={number === page ? 'active__page' : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          }
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Tours