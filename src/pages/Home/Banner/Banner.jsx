import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
// import '../../App.css'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ type: 'progressbar' }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
            >
                <SwiperSlide>
                <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/front-view-businessman-spilling-shopping-cart-coins_23-2148569081.jpg?t=st=1718011575~exp=1718015175~hmac=a50daa50df2d6b94f49005f87aab5d7b22391509cf309005a3f5ea34e3330cfc&w=1380' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">You are one step away from earning
                                </h1>
                                <p className="mb-5">{''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['Lets explore our website and start earning...']}
                                                loop={Infinity}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={30}
                                                delaySpeed={1000}
                                            />
                                    </span>
                                </p>
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/credit-cards-loans-through-smartphones_1268032-60752.jpg?w=1380' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Get your payment by {''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Debit card', 'Master card','Bkash','Nagad', 'Rocket']}
                                            loop={Infinity}
                                            cursor
                                            cursorStyle='.'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">We are offering wide range of payment system that will help to make flawless payment experiences </p>
                                <button className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg?t=st=1718013240~exp=1718016840~hmac=6108cda4c452330d62c6d2e525c30954b0abc9120f98613f988b3f3aed10c145&w=1380' }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Easy to manage your {''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Task', 'Reward']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">Create you account added task and manage everything very easily.</p>
                                <button className="btn btn-primary">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;