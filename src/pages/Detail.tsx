import https from "@/dataservices/api/https";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {

    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState({
        name: '',
        cuisine: [],
        rating: 0,
        description: '',
        photo: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await https().get('get-details', {
                    params: {
                        location_id: id,
                    }
                });
                setData({
                    name: response.data.name,
                    rating: response.data.rating,
                    cuisine: response.data.cuisine,
                    description: response.data.description,
                    photo: response.data.photo.images.large.url,
                })
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <header className="relative overflow-hidden" style={{ maxHeight: '100vh' }}>
            <div className="position-absolute top-0 left-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-center">
                <div className="container text-white">
                    <h1 className="text-white">{data?.name}</h1>
                    <h5 className="text-white">{data?.cuisine?.map((item: any) => item.name).join(" | ")}</h5>
                    <p className="d-flex align-items-center gap-2">
                        <i className="bi bi-star-fill text-warning"></i>
                        {data.rating}
                    </p>
                    <p>{data.description}</p>
                </div>
            </div>
            <img src={data?.photo} alt="Gambar Restaurant" className="w-100 h-100 object-fit-cover" />
        </header>
    )
}

export default Detail