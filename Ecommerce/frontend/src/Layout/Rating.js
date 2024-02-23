import "../Assets/styles/Layout/Rating.css";
import { Button } from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../Assets/Images/men-fashion.jpg'

export default function Rating() {
    return (
        <>
            <div>
                <table className="rating-cntr">
                    <tbody className="border">
                        <tr>
                            <td >
                                <h4>
                                    Ratings & Reviews
                                </h4>
                                <Button className="">
                                    Rate Product
                                </Button>
                            </td>
                            <td >
                                <div className="total-rating">
                                    <h3>4.5<StarIcon fontSize="x-small" /></h3>
                                    <span>1450 ratings & 1255 reviews</span>
                                </div>
                                <div className="rating-bar">
                                    <div className="rating-bar-cntr">
                                        <span>5<StarIcon fontSize="x-small" /></span>
                                        <ProgressBar variant="success" now={100} className="progress-bar" />
                                        <span className="rate-count">140</span>
                                    </div>
                                    <div className="rating-bar-cntr">
                                        <span>4<StarIcon fontSize="x-small" /></span>
                                        <ProgressBar variant="info" now={80} className="progress-bar" />
                                        <span className="rate-count">140</span>
                                    </div>
                                    <div className="rating-bar-cntr">
                                        <span>3<StarIcon fontSize="x-small" /></span>
                                        <ProgressBar variant="warning" now={60} className="progress-bar" />
                                        <span className="rate-count">140</span>
                                    </div>
                                    <div className="rating-bar-cntr">
                                        <span>2<StarIcon fontSize="x-small" /></span>
                                        <ProgressBar variant="warning" now={50} className="progress-bar" />
                                        <span className="rate-count">140</span>
                                    </div>
                                    <div className="rating-bar-cntr">
                                        <span>1<StarIcon fontSize="x-small" /></span>
                                        <ProgressBar variant="danger" now={20} className="progress-bar" />
                                        <span className="rate-count">140</span>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div className="rate-product-img">
                                    <img src={img1} />
                                    <img src={img1} />
                                    <img src={img1} />
                                    <img src={img1} />
                                    <img src={img1} />
                                    <img src={img1} />
                                    <img src={img1} />

                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-rating">
                                    <div className="rating-title">
                                        <span className="rating-badge">5<StarIcon fontSize="x-small" /></span>
                                        <span>Pretty Good</span>
                                    </div>
                                    <span>
                                        Too good
                                    </span>
                                    <div className="rated-product-img">
                                        <img src={img1} />
                                        <img src={img1} />
                                        <img src={img1} />

                                    </div>
                                    <div className="user-rate">
                                        <span className="rated-user">Prodyumna Chatterjee 1 month ago</span>
                                        <div className="rate-like-dislike">
                                            <span><i class="fa fa-solid fa-thumbs-up"></i>15</span>
                                            <span><i class="fa fa-solid fa-thumbs-down"></i>15</span>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-rating">
                                    <div className="rating-title">
                                        <span className="rating-badge">5<StarIcon fontSize="x-small" /></span>
                                        <span>Pretty Good</span>
                                    </div>
                                    <span>
                                        Too good
                                    </span>
                                    <div className="rated-product-img">
                                        <img src={img1} />
                                        <img src={img1} />
                                        <img src={img1} />

                                    </div>
                                    <div className="user-rate">
                                        <span className="rated-user">Prodyumna Chatterjee 1 month ago</span>
                                        <div className="rate-like-dislike">
                                            <span><i class="fa fa-solid fa-thumbs-up"></i>15</span>
                                            <span><i class="fa fa-solid fa-thumbs-down"></i>15</span>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-rating">
                                    <div className="rating-title">
                                        <span className="rating-badge">5<StarIcon fontSize="x-small" /></span>
                                        <span>Pretty Good</span>
                                    </div>
                                    <span>
                                        Too good
                                    </span>
                                    <div className="rated-product-img">
                                        <img src={img1} />
                                        <img src={img1} />
                                        <img src={img1} />

                                    </div>
                                    <div className="user-rate">
                                        <span className="rated-user">Prodyumna Chatterjee 1 month ago</span>
                                        <div className="rate-like-dislike">
                                            <span><i class="fa fa-solid fa-thumbs-up"></i>15</span>
                                            <span><i class="fa fa-solid fa-thumbs-down"></i>15</span>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </>
    )
}