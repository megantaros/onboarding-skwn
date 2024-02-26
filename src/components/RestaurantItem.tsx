import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'

export default function RestaurantItem(props: any) {
    const { data, onClick } = props;

    return (
        <section className='container'>
            <h4 className="fw-medium my-4 w-100">All Restaurants</h4>
            <Row xs={"1"} sm={"2"} md={"3"} lg={"4"} className="w-100">
                {data?.map((restaurant: any, index: number) => (
                    <Col className="mb-4 p-0" key={index}>
                        <Card className="rounded-0 border-0 bg-transparent px-2">
                            <CardBody className="d-flex flex-column gap-1 p-0">
                                <div
                                    className="mb-2 overflow-hidden"
                                    style={{ width: "100%", height: "250px" }}
                                >
                                    <img
                                        src={restaurant?.photo?.images.large.url}
                                        alt={`Gambar ${restaurant?.name}`}
                                        className='w-100 h-100 object-fit-cover rounded-0'
                                    />
                                </div>
                                <h5
                                    className="fw-medium m-0 text-primary"
                                    style={{ fontSize: "1.2rem" }}
                                >
                                    {restaurant?.name}
                                </h5>
                                <div className="d-flex gap-2 text-primary justify-content-between">
                                    <span className="m-0">
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                                <div className="d-flex gap-2 text-secondary text-uppercase justify-content-between">
                                    <span className="m-0">
                                        {restaurant?.cuisine?.[0]?.name} &middot; {restaurant?.price_level}
                                    </span>
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className={`rounded ${restaurant?.open_now_text === 'Open Now' ? 'bg-success' : 'bg-danger'}`} style={{ height: '10px', width: '10px' }}>
                                        </div>
                                        <span>
                                            {restaurant?.open_now_text}
                                        </span>
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-0 text-uppercase py-2 mt-2" href={restaurant?.location_id + "/detail-restaurant"}>
                                    Learn More
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-center my-5">
                <Button
                    className="rounded-0 w-50 py-2 m-auto"
                    onClick={onClick}
                    variant="outline-primary"
                >
                    Load More
                </Button>
            </div>
        </section>
    )
}
