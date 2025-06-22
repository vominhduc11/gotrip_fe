import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://readdy.ai/api/search-image?query=Beautiful%20beach%20landscape%20in%20Vietnam%20with%20crystal%20clear%20water%2C%20white%20sand%2C%20palm%20trees%2C%20and%20mountains%20in%20the%20background.%20Scenic%20tropical%20paradise%20vacation%20destination%20with%20stunning%20natural%20scenery%20and%20vibrant%20colors.%20Professional%20travel%20photography%20with%20dramatic%20lighting&width=1440&height=600&seq=slide1&orientation=landscape',
            title: 'Khám phá vẻ đẹp biển đảo Phú Quốc',
            description:
                'Trải nghiệm kỳ nghỉ tuyệt vời tại hòn đảo ngọc với bãi biển cát trắng mịn màng'
        },
        {
            id: 2,
            image: 'https://readdy.ai/api/search-image?query=Majestic%20Ha%20Long%20Bay%20in%20Vietnam%20with%20emerald%20waters%20and%20limestone%20karsts%20rising%20from%20the%20sea.%20Iconic%20UNESCO%20World%20Heritage%20site%20with%20traditional%20wooden%20boats%20sailing%20through%20the%20bay.%20Misty%20morning%20atmosphere%20with%20soft%20sunlight%20creating%20a%20dreamlike%20scene&width=1440&height=600&seq=slide2&orientation=landscape',
            title: 'Vịnh Hạ Long - Di sản thiên nhiên thế giới',
            description:
                'Chiêm ngưỡng kỳ quan thiên nhiên với hàng nghìn hòn đảo đá vôi giữa biển khơi'
        },
        {
            id: 3,
            image: 'https://readdy.ai/api/search-image?query=Ancient%20Hoi%20An%20town%20in%20Vietnam%20at%20night%20with%20colorful%20lanterns%20illuminating%20the%20streets.%20Traditional%20Vietnamese%20architecture%20with%20wooden%20buildings%20along%20the%20river.%20Romantic%20atmosphere%20with%20reflections%20in%20the%20water%20and%20people%20enjoying%20the%20evening&width=1440&height=600&seq=slide3&orientation=landscape',
            title: 'Hội An cổ kính - Thành phố đèn lồng',
            description:
                'Đắm chìm trong không gian cổ kính và lãng mạn của phố cổ Hội An về đêm'
        }
    ];

    const featuredTours = [
        {
            id: 1,
            image: 'https://readdy.ai/api/search-image?query=Luxury%20resort%20in%20Phu%20Quoc%20island%20Vietnam%20with%20infinity%20pool%20overlooking%20pristine%20beach%20and%20ocean.%20Palm%20trees%20and%20tropical%20garden%20surrounding%20modern%20bungalows.%20Sunset%20view%20with%20golden%20light%20reflecting%20on%20water%20surface.%20High-end%20vacation%20destination&width=400&height=250&seq=tour1&orientation=landscape',
            name: 'Khám phá Phú Quốc 3 ngày 2 đêm',
            duration: '3 ngày 2 đêm',
            price: '3,590,000đ',
            originalPrice: '4,290,000đ'
        },
        {
            id: 2,
            image: 'https://readdy.ai/api/search-image?query=Cruise%20ship%20sailing%20through%20Ha%20Long%20Bay%20Vietnam%20with%20limestone%20karsts%20and%20emerald%20waters.%20Luxury%20white%20boat%20with%20multiple%20decks%20and%20cabins.%20Scenic%20natural%20landscape%20with%20islands%20and%20blue%20sky.%20Professional%20travel%20photography%20with%20perfect%20composition&width=400&height=250&seq=tour2&orientation=landscape',
            name: 'Tour Hạ Long - Ninh Bình 4 ngày',
            duration: '4 ngày 3 đêm',
            price: '4,890,000đ',
            originalPrice: '5,590,000đ'
        },
        {
            id: 3,
            image: 'https://readdy.ai/api/search-image?query=Ancient%20Hoi%20An%20street%20with%20traditional%20yellow%20buildings%20and%20colorful%20lanterns.%20People%20walking%20along%20the%20historic%20town%20with%20shops%20and%20cafes.%20Daytime%20view%20of%20Vietnamese%20heritage%20site%20with%20traditional%20architecture.%20Cultural%20travel%20destination&width=400&height=250&seq=tour3&orientation=landscape',
            name: 'Đà Nẵng - Hội An - Huế 5 ngày',
            duration: '5 ngày 4 đêm',
            price: '6,290,000đ',
            originalPrice: '7,190,000đ'
        },
        {
            id: 4,
            image: 'https://readdy.ai/api/search-image?query=Terraced%20rice%20fields%20in%20Sapa%20Vietnam%20with%20mountains%20in%20background%20and%20ethnic%20minority%20villages.%20Green%20agricultural%20landscape%20with%20farmers%20working%20in%20traditional%20clothing.%20Misty%20morning%20atmosphere%20with%20beautiful%20lighting.%20Scenic%20rural%20countryside%20view&width=400&height=250&seq=tour4&orientation=landscape',
            name: 'Tour Sapa - Fansipan 3 ngày',
            duration: '3 ngày 2 đêm',
            price: '3,990,000đ',
            originalPrice: '4,590,000đ'
        },
        {
            id: 5,
            image: 'https://readdy.ai/api/search-image?query=Mekong%20Delta%20in%20Vietnam%20with%20traditional%20wooden%20boats%20navigating%20through%20narrow%20water%20canals%20surrounded%20by%20lush%20tropical%20vegetation.%20Local%20Vietnamese%20people%20selling%20fruits%20and%20goods%20at%20floating%20market.%20Authentic%20rural%20lifestyle%20scene%20with%20vibrant%20colors&width=400&height=250&seq=tour5&orientation=landscape',
            name: 'Khám phá Miền Tây 2 ngày',
            duration: '2 ngày 1 đêm',
            price: '2,190,000đ',
            originalPrice: '2,590,000đ'
        },
        {
            id: 6,
            image: 'https://readdy.ai/api/search-image?query=Nha%20Trang%20beach%20city%20in%20Vietnam%20with%20modern%20skyline%20and%20beautiful%20bay.%20White%20sand%20beach%20with%20palm%20trees%20and%20clear%20blue%20water.%20Aerial%20view%20of%20coastal%20urban%20landscape%20with%20mountains%20in%20background.%20Sunny%20day%20with%20perfect%20weather&width=400&height=250&seq=tour6&orientation=landscape',
            name: 'Tour Nha Trang - Đà Lạt 5 ngày',
            duration: '5 ngày 4 đêm',
            price: '5,890,000đ',
            originalPrice: '6,790,000đ'
        }
    ];

    const popularDestinations = [
        {
            id: 1,
            image: 'https://readdy.ai/api/search-image?query=Phu%20Quoc%20island%20in%20Vietnam%20with%20pristine%20white%20sand%20beach%20and%20crystal%20clear%20turquoise%20water.%20Tropical%20paradise%20with%20palm%20trees%20and%20luxury%20resorts.%20Aerial%20view%20of%20beautiful%20coastline%20with%20people%20relaxing%20on%20beach.%20Perfect%20vacation%20destination&width=300&height=400&seq=dest1&orientation=portrait',
            name: 'Phú Quốc',
            tourCount: '25 tour'
        },
        {
            id: 2,
            image: 'https://readdy.ai/api/search-image?query=Ha%20Long%20Bay%20Vietnam%20with%20emerald%20waters%20and%20towering%20limestone%20islands.%20UNESCO%20World%20Heritage%20site%20with%20traditional%20wooden%20boats.%20Dramatic%20sky%20with%20clouds%20and%20sunlight%20breaking%20through.%20Iconic%20natural%20landscape%20of%20Vietnam&width=300&height=400&seq=dest2&orientation=portrait',
            name: 'Hạ Long',
            tourCount: '18 tour'
        },
        {
            id: 3,
            image: 'https://readdy.ai/api/search-image?query=Da%20Nang%20city%20Vietnam%20with%20Dragon%20Bridge%20illuminated%20at%20night.%20Modern%20urban%20skyline%20with%20river%20and%20colorful%20lights.%20Iconic%20landmark%20with%20fire-breathing%20dragon%20design.%20Beautiful%20evening%20cityscape%20with%20reflections%20in%20water&width=300&height=400&seq=dest3&orientation=portrait',
            name: 'Đà Nẵng',
            tourCount: '32 tour'
        },
        {
            id: 4,
            image: 'https://readdy.ai/api/search-image?query=Ancient%20Hue%20Imperial%20City%20in%20Vietnam%20with%20traditional%20red%20and%20gold%20palace%20architecture.%20Historic%20UNESCO%20site%20with%20ornate%20gates%20and%20walls.%20Cultural%20heritage%20landmark%20with%20gardens%20and%20courtyards.%20Royal%20Vietnamese%20historical%20destination&width=300&height=400&seq=dest4&orientation=portrait',
            name: 'Huế',
            tourCount: '15 tour'
        },
        {
            id: 5,
            image: 'https://readdy.ai/api/search-image?query=Sapa%20Vietnam%20with%20terraced%20rice%20fields%20on%20steep%20mountain%20slopes.%20Hmong%20ethnic%20minority%20village%20with%20traditional%20houses.%20Misty%20landscape%20with%20dramatic%20valleys%20and%20peaks.%20Rural%20agricultural%20scene%20with%20farmers%20in%20traditional%20clothing&width=300&height=400&seq=dest5&orientation=portrait',
            name: 'Sapa',
            tourCount: '21 tour'
        },
        {
            id: 6,
            image: 'https://readdy.ai/api/search-image?query=Nha%20Trang%20Vietnam%20with%20curved%20bay%20and%20city%20skyline.%20Beautiful%20beach%20with%20palm%20trees%20and%20clear%20blue%20water.%20Mountain%20backdrop%20and%20island%20views.%20Popular%20coastal%20resort%20destination%20with%20beach%20umbrellas%20and%20tourists%20enjoying%20sunshine&width=300&height=400&seq=dest6&orientation=portrait',
            name: 'Nha Trang',
            tourCount: '27 tour'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    // Calculate remaining time for promotion (24 hours from now)
    const now = new Date();
    const endTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );
    const timeRemaining = endTime.getTime() - now.getTime();

    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return (
        <div className="font-sans min-h-screen">
            {/* Header */}
            <main className="pt-16">
                {/* Hero Banner */}
                <section className="relative h-[600px] overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 flex items-center z-20">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-lg text-white">
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg mb-8">
                                            {slide.description}
                                        </p>
                                        <button className="px-6 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                                            Đặt tour ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-3 rounded-full cursor-pointer"
                    >
                        <i className="fas fa-chevron-left text-white text-xl"></i>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-3 rounded-full cursor-pointer"
                    >
                        <i className="fas fa-chevron-right text-white text-xl"></i>
                    </button>
                </section>

                {/* Search Bar */}
                <section className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-lg shadow-lg p-6 -mt-20 relative z-30">
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                Tìm kiếm tour du lịch
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Điểm đến
                                    </label>
                                    <div className="relative">
                                        <i className="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input
                                            type="text"
                                            placeholder="Bạn muốn đi đâu?"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Ngày khởi hành
                                    </label>
                                    <div className="relative">
                                        <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input
                                            type="date"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Số người
                                    </label>
                                    <div className="relative">
                                        <i className="fas fa-users absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm">
                                            <option>1 người</option>
                                            <option>2 người</option>
                                            <option>3-5 người</option>
                                            <option>6-10 người</option>
                                            <option>Trên 10 người</option>
                                        </select>
                                        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Ngân sách
                                    </label>
                                    <div className="relative">
                                        <i className="fas fa-money-bill-wave absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm">
                                            <option>Tất cả mức giá</option>
                                            <option>Dưới 3 triệu</option>
                                            <option>3 - 5 triệu</option>
                                            <option>5 - 10 triệu</option>
                                            <option>Trên 10 triệu</option>
                                        </select>
                                        <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button className="px-8 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-search mr-2"></i>
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Tours */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Tour du lịch nổi bật
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Khám phá những tour du lịch hấp dẫn nhất với mức
                                giá ưu đãi. Trải nghiệm kỳ nghỉ tuyệt vời cùng
                                VietTravel!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredTours.map((tour) => (
                                <div
                                    key={tour.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative h-[250px] overflow-hidden">
                                        <img
                                            src={tour.image}
                                            alt={tour.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            Giảm giá
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                                            {tour.name}
                                        </h3>

                                        <div className="flex items-center mb-3">
                                            <i className="fas fa-clock text-blue-600 mr-2"></i>
                                            <span className="text-gray-600">
                                                {tour.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div>
                                                <span className="text-gray-500 line-through text-sm mr-2">
                                                    {tour.originalPrice}
                                                </span>
                                                <span className="text-red-600 font-bold text-xl">
                                                    {tour.price}
                                                </span>
                                            </div>

                                            <Link
                                                to="/product"
                                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                                Xem thêm tour
                                <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Popular Destinations */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Điểm đến phổ biến
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Khám phá những điểm đến hấp dẫn nhất Việt Nam
                                với nhiều tour du lịch đa dạng phù hợp với mọi
                                nhu cầu
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {popularDestinations.map((destination) => (
                                <div
                                    key={destination.id}
                                    className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer"
                                >
                                    <div className="h-[400px] sm:h-[300px] md:h-[400px] overflow-hidden">
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                                        <h3 className="text-white text-xl font-bold mb-1">
                                            {destination.name}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {destination.tourCount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promotion Banner */}
                <section className="py-16 bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://readdy.ai/api/search-image?query=Abstract%20background%20with%20travel%20elements%20like%20airplanes%2C%20maps%2C%20compasses%2C%20and%20luggage%20in%20a%20modern%20minimalist%20style.%20Light%20blue%20background%20with%20white%20pattern%20elements.%20Clean%20and%20professional%20design%20suitable%20for%20travel%20website%20promotion%20banner&width=1440&height=400&seq=promo&orientation=landscape"
                            alt="Promotion background"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="text-white mb-8 md:mb-0 md:max-w-xl">
                                <h2 className="text-3xl font-bold mb-4">
                                    Ưu đãi mùa hè - Giảm đến 30%
                                </h2>
                                <p className="text-white/80 mb-6">
                                    Đặt tour du lịch ngay hôm nay để nhận ưu đãi
                                    đặc biệt cho kỳ nghỉ hè của bạn. Áp dụng cho
                                    tất cả các tour khởi hành từ tháng 6 đến
                                    tháng 8.
                                </p>
                                <button className="px-6 py-3 bg-white text-blue-600 rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                                    Đặt ngay
                                </button>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                                <p className="text-white text-lg mb-3">
                                    Ưu đãi kết thúc sau
                                </p>
                                <div className="flex space-x-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20">
                                        <div className="text-white text-3xl font-bold">
                                            {hours}
                                        </div>
                                        <div className="text-white/80 text-sm">
                                            Giờ
                                        </div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20">
                                        <div className="text-white text-3xl font-bold">
                                            {minutes}
                                        </div>
                                        <div className="text-white/80 text-sm">
                                            Phút
                                        </div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20">
                                        <div className="text-white text-3xl font-bold">
                                            {seconds}
                                        </div>
                                        <div className="text-white/80 text-sm">
                                            Giây
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Tại sao chọn chúng tôi
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                VietTravel tự hào mang đến cho khách hàng những
                                trải nghiệm du lịch tuyệt vời với dịch vụ chất
                                lượng cao
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-tag text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Giá tốt nhất
                                </h3>
                                <p className="text-gray-600">
                                    Chúng tôi cam kết mang đến mức giá cạnh
                                    tranh nhất với nhiều ưu đãi hấp dẫn
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-headset text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Hỗ trợ 24/7
                                </h3>
                                <p className="text-gray-600">
                                    Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn
                                    mọi lúc, mọi nơi khi cần thiết
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Thanh toán an toàn
                                </h3>
                                <p className="text-gray-600">
                                    Hệ thống thanh toán bảo mật, đa dạng phương
                                    thức với nhiều ưu đãi hấp dẫn
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-users text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Đội ngũ chuyên nghiệp
                                </h3>
                                <p className="text-gray-600">
                                    Hướng dẫn viên giàu kinh nghiệm, am hiểu văn
                                    hóa địa phương tại mọi điểm đến
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Đăng ký nhận thông tin ưu đãi
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Nhận thông tin về các tour mới và ưu đãi đặc
                                biệt trực tiếp vào hộp thư của bạn
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Nhập địa chỉ email của bạn"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                                    Đăng ký ngay
                                </button>
                            </div>

                            <p className="text-sm text-gray-500 mt-4">
                                Chúng tôi tôn trọng quyền riêng tư của bạn và
                                không chia sẻ thông tin với bên thứ ba
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
        </div>
    );
}

export default Home;
