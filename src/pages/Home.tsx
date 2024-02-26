
import RestaurantItem from '@/components/RestaurantItem';
import Loading from '@/components/LoadingComp';
import https from '@/dataservices/api/https';
import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';

const Home = () => {
    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState<number>(8);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await https().get('list');
            setData(response.data.data);
            setVisible(response.data.data.slice(0, loadMore));
        };
        fetchData();
    }, [loadMore]);

    const handleLoadMore = () => {
        setLoadMore((prev) => prev + 4);
        setVisible(data?.slice(0, loadMore));
    };

    const handleOpenNow = (e: any) => {
        if (e.target.checked === true) {
            setVisible(data?.filter((restaurant: any) => restaurant?.open_now_text === "Open Now"));
        } else {
            setVisible(data);
        }
    };

    const handlePrice = (e: any) => {
        const price = e.target.value;
        if (price === "all") {
            setVisible(data);
        } else {
            setVisible(data?.filter((restaurant: any) => restaurant?.price_level === price));
        }
    };

    const handleCuisine = (e: any) => {
        const cuisine = e.target.value;
        if (cuisine === "all") {
            setVisible(data);
        } else {
            setVisible(data?.filter((restaurant: any) => restaurant?.cuisine?.[0]?.name.toLowerCase() === cuisine));
        }
    };

    return (
        <main className='min-vh-100'>
            <div className="container">
                <h1>Restaurant Apps</h1>
                <p>
                    Welcome to the restaurant app. This is a simple application that
                    demonstrates how to use React and TypeScript to build a web
                    application.
                </p>
            </div>

            <Navbar className="flex-xl-row flex-lg-row flex-md-row justify-content-between flex-column h-100 border-top border-bottom py-3 gap-xl-0 gap-lg-0 gap-md-0 gap-3">
                <div className="container">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="m-0">Filter by:</h6>
                        <div className="border-0 border-bottom w-100 d-flex align-items-center py-2 gap-2">
                            <input id='open-now' type="checkbox" onChange={handleOpenNow} />
                            <p className='p-0 m-0'>Open Now</p>
                        </div>
                        <select name='price' id="filter-price" className='form-select w-75 border-bottom border-0 rounded-0' onChange={handlePrice}>
                            <option value="all">Price</option>
                            <option value="$">$</option>
                            <option value="$$ - $$$">$$ - $$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                        <select name="cuisine" id="filter-cuisine" className='form-select w-75 border-bottom border-0 rounded-0'
                            onChange={handleCuisine}>
                            <option value="all">Cuisine</option>
                            <option value="swiss">Swiss</option>
                            <option value="cafe">Cafe</option>
                            <option value="europan">Europan</option>
                            <option value="italian">Italian</option>
                            <option value="thai">Thai</option>
                            <option value="bar">Bar</option>
                            <option value="seafood">Seafood</option>
                        </select>
                    </div>
                    <Button variant="outline-primary" className="rounded-0 px-5" onClick={() => {
                        setVisible(data);
                        const openNowCheckbox = document.getElementById('open-now') as HTMLInputElement | null;
                        if (openNowCheckbox) {
                            openNowCheckbox.checked = false;
                        }
                    }}>
                        Clear all
                    </Button>
                </div>
            </Navbar>

            {data.length === 0 ? (
                <Loading />
            ) : (
                <RestaurantItem data={visible} onClick={handleLoadMore} />
            )}
        </main>
    );
};

export default Home;