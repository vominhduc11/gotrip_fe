// import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Tour {
    id: number;
    name: string;
    image: string;
    duration: string;
    price: string;
    originalPrice: string;
    description: string;
    highlights: string[];
    schedule: {
        day: number;
        title: string;
        activities: string[];
    }[];
    services: {
        included: string[];
        notIncluded: string[];
    };
    location: string;
    rating: number;
    reviews: number;
}

const selectedTour: Tour = {
    id: 1,
    name: 'Khám phá Phú Quốc 3 ngày 2 đêm',
    location: 'Phú Quốc, Kiên Giang',
    duration: '3 ngày 2 đêm',
    rating: 4.8,
    reviews: 124,
    originalPrice: '4.290.000đ',
    price: '3.590.000đ',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description:
        'Khám phá đảo ngọc Phú Quốc với những bãi biển tuyệt đẹp, thưởng thức hải sản tươi ngon và trải nghiệm cáp treo Hòn Thơm dài nhất thế giới. Hành trình sẽ đưa bạn đến những điểm đến nổi tiếng nhất của Phú Quốc với dịch vụ chuyên nghiệp và giá cả hợp lý.',
    highlights: [
        'Tham quan Safari Phú Quốc - vườn thú mở lớn nhất Việt Nam',
        'Trải nghiệm cáp treo Hòn Thơm - dài nhất thế giới',
        'Khám phá Grand World - thành phố không ngủ',
        'Thưởng thức hải sản tươi sống tại chợ đêm Dinh Cậu',
        'Tắm biển tại bãi Sao - một trong những bãi biển đẹp nhất thế giới',
        'Tham quan làng chài Ham Ninh - trải nghiệm đời sống ngư dân',
        'Khám phá nhà thùng nước mắm truyền thống',
        'Shopping tại chợ đêm Phú Quốc với nhiều đặc sản địa phương'
    ],
    schedule: [
        {
            day: 1,
            title: 'TP.HCM - Phú Quốc - Safari Phú Quốc',
            activities: [
                '06:00: Xe đón khách tại khách sạn trong nội thành TP.HCM',
                '08:30: Bay từ TP.HCM đến Phú Quốc bằng máy bay Vietnam Airlines',
                '10:00: Đến sân bay Phú Quốc, xe đón đoàn về khách sạn nhận phòng',
                '12:00: Ăn trưa tại nhà hàng với món ăn đặc sản Phú Quốc',
                '14:00: Tham quan Safari Phú Quốc - vườn thú mở lớn nhất Việt Nam',
                '16:30: Tham quan làng chài Ham Ninh, trải nghiệm đời sống ngư dân',
                '18:00: Ăn tối tại nhà hàng hải sản, thưởng thức các món đặc sản',
                '20:00: Tự do khám phá chợ đêm Dinh Cậu, mua sắm đặc sản'
            ]
        },
        {
            day: 2,
            title: 'Grand World - Cáp treo Hòn Thơm - Bãi Sao',
            activities: [
                '08:00: Ăn sáng tại khách sạn',
                '09:00: Khởi hành đi Grand World - thành phố không ngủ',
                '10:00: Trải nghiệm cáp treo Hòn Thơm - dài nhất thế giới',
                '11:30: Tắm biển và thư giãn tại bãi biển Hòn Thơm',
                '12:30: Ăn trưa tại nhà hàng với view biển tuyệt đẹp',
                '14:00: Di chuyển đến bãi Sao - bãi biển đẹp nhất Phú Quốc',
                '15:30: Tắm biển, chụp ảnh và tham gia các hoạt động thể thao biển',
                '17:30: Về lại Grand World, tham quan và mua sắm',
                '19:00: Ăn tối và thưởng thức chương trình biểu diễn tại Grand World'
            ]
        },
        {
            day: 3,
            title: 'Nhà thùng nước mắm - Chợ Dương Đông - Bay về TP.HCM',
            activities: [
                '08:00: Ăn sáng tại khách sạn và làm thủ tục trả phòng',
                '09:00: Tham quan nhà thùng nước mắm truyền thống',
                '10:30: Khám phá chợ Dương Đông, mua sắm đặc sản Phú Quốc',
                '11:30: Ăn trưa với các món ăn đặc sản cuối cùng',
                '13:00: Di chuyển ra sân bay Phú Quốc',
                '14:30: Làm thủ tục check-in, bay về TP.HCM',
                '16:00: Đến sân bay Tân Sơn Nhất',
                '17:30: Xe đưa đoàn về khách sạn, kết thúc chương trình'
            ]
        }
    ],
    services: {
        included: [
            'Vé máy bay khứ hồi TP.HCM - Phú Quốc',
            'Khách sạn 4 sao tiêu chuẩn quốc tế (2 đêm)',
            'Ăn sáng buffet hàng ngày tại khách sạn',
            'Các bữa ăn theo chương trình (6 bữa)',
            'Xe du lịch đời mới có máy lạnh',
            'Hướng dẫn viên nhiệt tình, kinh nghiệm',
            'Vé tham quan Safari Phú Quốc',
            'Vé cáp treo Hòn Thơm khứ hồi',
            'Bảo hiểm du lịch theo quy định',
            'Nước suối phục vụ trên xe',
            'Khăn lạnh và kẹo ngọt trên xe'
        ],
        notIncluded: [
            'Chi phí cá nhân như: giặt ủi, điện thoại, minibar...',
            'Tiền tip cho hướng dẫn viên và tài xế',
            'Chi phí tham quan ngoài chương trình',
            'Phụ thu phòng đơn (nếu có)',
            'Chi phí phát sinh do thiên tai, đình công...',
            'Thuế VAT (nếu xuất hóa đơn đỏ)',
            'Các bữa ăn ngoài chương trình',
            'Chi phí vui chơi giải trí cá nhân',
            'Phí làm visa (nếu cần thiết)'
        ]
    }
};

const featuredTours: Tour[] = [
    {
        id: 2,
        name: 'Tour Hạ Long - Ninh Bình 4 ngày',
        duration: '4 ngày 3 đêm',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        originalPrice: '5.590.000đ',
        price: '4.890.000đ',
        description:
            'Tour tham quan Hạ Long và Ninh Bình với nhiều trải nghiệm hấp dẫn.',
        highlights: ['Vịnh Hạ Long', 'Tràng An', 'Chùa Bái Đính'],
        schedule: [],
        services: { included: [], notIncluded: [] },
        location: 'Hạ Long, Ninh Bình',
        rating: 4.5,
        reviews: 98
    },
    {
        id: 3,
        name: 'Đà Nẵng - Hội An - Huế 5 ngày',
        duration: '5 ngày 4 đêm',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        originalPrice: '7.190.000đ',
        price: '6.290.000đ',
        description:
            'Khám phá các điểm đến nổi tiếng miền Trung: Đà Nẵng, Hội An, Huế.',
        highlights: ['Cầu Vàng', 'Phố cổ Hội An', 'Kinh thành Huế'],
        schedule: [],
        services: { included: [], notIncluded: [] },
        location: 'Đà Nẵng, Hội An, Huế',
        rating: 4.7,
        reviews: 120
    },
    {
        id: 4,
        name: 'Tour Sapa - Fansipan 3 ngày',
        duration: '3 ngày 2 đêm',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        originalPrice: '4.590.000đ',
        price: '3.990.000đ',
        description: 'Trải nghiệm Sapa và chinh phục đỉnh Fansipan.',
        highlights: ['Núi Fansipan', 'Bản Cát Cát', 'Thác Bạc'],
        schedule: [],
        services: { included: [], notIncluded: [] },
        location: 'Sapa, Lào Cai',
        rating: 4.6,
        reviews: 87
    }
];

function DetailProduct() {
    const { id } = useParams<{ id: string }>();

    //   const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
    //   if (!selectedTour) return null;
    return (
        <main className="pt-16 min-h-screen">
            {/* Tour Header */}
            <section className="relative h-[500px] overflow-hidden">
                <img
                    src={selectedTour.image}
                    alt={selectedTour.name}
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-end">
                        <div className="text-white mb-4 md:mb-0">
                            <div className="flex items-center mb-2">
                                <button
                                    // onClick={backToHome}
                                    className="text-white/80 hover:text-white flex items-center mr-4 cursor-pointer"
                                >
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Quay lại {id}
                                </button>
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <span>{selectedTour.location}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                {selectedTour.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center">
                                    <i className="fas fa-clock mr-2"></i>
                                    <span>{selectedTour.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-star text-yellow-400 mr-2"></i>
                                    <span>
                                        {selectedTour.rating} (
                                        {selectedTour.reviews} đánh giá)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-gray-300 line-through text-lg">
                                {selectedTour.originalPrice}
                            </div>
                            <div className="text-white text-3xl font-bold">
                                {selectedTour.price}
                            </div>
                            <div className="text-yellow-400 text-sm mt-1">
                                Tiết kiệm 16%
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {/* Quick Info */}
                            <div className="bg-blue-50 rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <i className="fas fa-calendar-alt text-blue-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">
                                            Thời gian
                                        </h3>
                                        <p className="text-gray-600">
                                            {selectedTour.duration}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <i className="fas fa-users text-blue-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">
                                            Số người
                                        </h3>
                                        <p className="text-gray-600">
                                            2-20 người
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <i className="fas fa-language text-blue-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">
                                            Ngôn ngữ
                                        </h3>
                                        <p className="text-gray-600">
                                            Tiếng Việt
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                                    Giới thiệu tour
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {selectedTour.description}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Phú Quốc - hòn đảo du lịch lớn nhất Việt
                                    Nam, còn được mệnh danh là Đảo Ngọc với bờ
                                    biển dài và đẹp, cùng nhiều đặc sản nổi
                                    tiếng như nước mắm, hồ tiêu, rượu sim và
                                    ngọc trai. Đến với Phú Quốc, du khách sẽ
                                    được tham quan nhiều địa điểm nổi tiếng,
                                    trải nghiệm các hoạt động thú vị và thưởng
                                    thức ẩm thực đặc sắc của đảo ngọc.
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                                    Điểm nổi bật
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedTour.highlights.map(
                                        (highlight, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                                                    <i className="fas fa-check text-green-600"></i>
                                                </div>
                                                <span className="text-gray-700">
                                                    {highlight}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                    Lịch trình tour
                                </h2>
                                <div className="space-y-8">
                                    {selectedTour.schedule.map((day) => (
                                        <div
                                            key={day.day}
                                            className="border-l-4 border-blue-600 pl-6 pb-2"
                                        >
                                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                                Ngày {day.day}: {day.title}
                                            </h3>
                                            <ul className="space-y-3">
                                                {day.activities.map(
                                                    (activity, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600 flex items-start"
                                                        >
                                                            <i className="fas fa-circle text-xs text-blue-600 mt-2 mr-3"></i>
                                                            <span className="leading-relaxed">
                                                                {activity}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                    Dịch vụ tour
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="text-xl font-bold mb-4 text-green-700">
                                            Dịch vụ bao gồm
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedTour.services.included.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                                                            <i className="fas fa-check text-green-600"></i>
                                                        </div>
                                                        <span className="text-gray-700">
                                                            {item}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 rounded-lg p-6">
                                        <h3 className="text-xl font-bold mb-4 text-red-700">
                                            Dịch vụ không bao gồm
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedTour.services.notIncluded.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                                                            <i className="fas fa-times text-red-600"></i>
                                                        </div>
                                                        <span className="text-gray-700">
                                                            {item}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                                    Bản đồ
                                </h2>
                                <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
                                    <div className="text-center">
                                        <i className="fas fa-map-marked-alt text-4xl text-gray-400 mb-3"></i>
                                        <p className="text-gray-500">
                                            Bản đồ đang được tải...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Reviews */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Đánh giá từ khách hàng
                                    </h2>
                                    <div className="flex items-center">
                                        <div className="text-yellow-400 text-xl font-bold mr-2">
                                            {selectedTour.rating}
                                        </div>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`fas fa-star ${i < Math.floor(selectedTour.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                ></i>
                                            ))}
                                        </div>
                                        <div className="ml-2 text-gray-600">
                                            ({selectedTour.reviews} đánh giá)
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex justify-between mb-3">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    <i className="fas fa-user text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">
                                                        Nguyễn Văn A
                                                    </h4>
                                                    <div className="text-gray-500 text-sm">
                                                        12/06/2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            Tour rất tuyệt vời, hướng dẫn viên
                                            nhiệt tình, chu đáo. Cảnh đẹp, ăn
                                            ngon, nghỉ thoải mái. Sẽ quay lại
                                            lần sau!
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex justify-between mb-3">
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    <i className="fas fa-user text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">
                                                        Trần Thị B
                                                    </h4>
                                                    <div className="text-gray-500 text-sm">
                                                        05/06/2025
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            Phú Quốc đẹp quá, biển xanh cát
                                            trắng. Tour sắp xếp hợp lý, không
                                            quá vội vàng. Khách sạn 4 sao rất
                                            tốt. Chỉ tiếc là thời gian tự do hơi
                                            ít.
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                                            Xem thêm đánh giá
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                {/* Booking Form */}
                                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-6 text-gray-800">
                                        Đặt tour
                                    </h3>

                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-600">
                                                Giá gốc:
                                            </span>
                                            <span className="text-gray-500 line-through">
                                                {selectedTour.originalPrice}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-600">
                                                Giá khuyến mãi:
                                            </span>
                                            <span className="text-red-600 font-bold text-xl">
                                                {selectedTour.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">
                                                Tiết kiệm:
                                            </span>
                                            <span className="text-green-600 font-medium">
                                                700,000đ (16%)
                                            </span>
                                        </div>
                                    </div>

                                    <form className="space-y-4">
                                        <div>
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

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Số lượng khách
                                            </label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-1">
                                                        Người lớn
                                                    </label>
                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="bg-gray-200 px-3 py-2 rounded-l-lg border border-gray-300 cursor-pointer"
                                                        >
                                                            <i className="fas fa-minus text-gray-600"></i>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            value="2"
                                                            className="w-full text-center border-t border-b border-gray-300 py-2 focus:outline-none text-sm"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="bg-gray-200 px-3 py-2 rounded-r-lg border border-gray-300 cursor-pointer"
                                                        >
                                                            <i className="fas fa-plus text-gray-600"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-1">
                                                        Trẻ em
                                                    </label>
                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="bg-gray-200 px-3 py-2 rounded-l-lg border border-gray-300 cursor-pointer"
                                                        >
                                                            <i className="fas fa-minus text-gray-600"></i>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            min="0"
                                                            value="0"
                                                            className="w-full text-center border-t border-b border-gray-300 py-2 focus:outline-none text-sm"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="bg-gray-200 px-3 py-2 rounded-r-lg border border-gray-300 cursor-pointer"
                                                        >
                                                            <i className="fas fa-plus text-gray-600"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Họ và tên
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Nhập họ và tên"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Số điện thoại
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="Nhập số điện thoại"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Nhập địa chỉ email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                                        >
                                            Đặt tour ngay
                                        </button>
                                    </form>
                                </div>

                                {/* Contact */}
                                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                                        Bạn cần hỗ trợ?
                                    </h3>
                                    <div className="space-y-4">
                                        <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                                            <i className="fas fa-phone-alt mr-2"></i>
                                            Gọi tư vấn
                                        </button>

                                        <button className="w-full px-6 py-3 border border-green-600 text-green-600 rounded-button hover:bg-green-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                                            <i className="fab fa-whatsapp mr-2"></i>
                                            Chat với tư vấn viên
                                        </button>
                                    </div>
                                </div>

                                {/* Guarantee */}
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <h3 className="text-lg font-bold mb-4 text-blue-800">
                                        Cam kết dịch vụ
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <i className="fas fa-shield-alt mt-1 mr-3 text-blue-600"></i>
                                            <span className="text-gray-700">
                                                Đảm bảo giá tốt nhất thị trường
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-exchange-alt mt-1 mr-3 text-blue-600"></i>
                                            <span className="text-gray-700">
                                                Hoàn tiền nếu không hài lòng
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-headset mt-1 mr-3 text-blue-600"></i>
                                            <span className="text-gray-700">
                                                Hỗ trợ 24/7 trong suốt chuyến đi
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-certificate mt-1 mr-3 text-blue-600"></i>
                                            <span className="text-gray-700">
                                                Đơn vị lữ hành uy tín hàng đầu
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tours */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Tour liên quan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredTours.slice(1, 4).map((tour) => (
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
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DetailProduct;
