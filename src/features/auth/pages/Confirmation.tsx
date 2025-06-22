interface BookingInfo {
    startDate: string;
    adults: number;
    children: number;
    fullName: string;
    phone: string;
    email: string;
    specialRequests: string;
}

interface Tour {
    id: number;
    name: string;
    location: string;
    duration: string;
    rating: number;
    reviews: number;
    originalPrice: string;
    price: string;
    image: string;
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
    startDates: string[];
}

const selectedTourData: Tour = {
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
    },
    startDates: [
        '2025-07-01',
        '2025-07-05',
        '2025-07-10',
        '2025-07-15',
        '2025-07-20',
        '2025-07-25',
        '2025-08-01',
        '2025-08-05',
        '2025-08-10',
        '2025-08-15',
        '2025-08-20',
        '2025-08-25',
        '2025-09-01',
        '2025-09-05',
        '2025-09-10',
        '2025-09-15'
    ]
};

const Confirmation = () => {
    // Mock booking data - in a real app, this would come from props or state management
    const bookingInfo: BookingInfo = {
        startDate: '2025-07-01',
        adults: 2,
        children: 1,
        fullName: 'Nguyễn Văn A',
        phone: '0912345678',
        email: 'nguyenvana@gmail.com',
        specialRequests: 'Yêu cầu phòng view biển'
    };

    const bookingId = 'VT' + Date.now().toString().slice(-8);
    const bookingDate = new Date().toLocaleDateString('vi-VN');
    const departureDate = new Date(bookingInfo.startDate).toLocaleDateString(
        'vi-VN',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );

    const calculateTotal = () => {
        const basePrice = parseInt(
            selectedTourData.price.replace(/[^\d]/g, '')
        );
        const adultTotal = basePrice * bookingInfo.adults;
        const childTotal =
            bookingInfo.children > 0
                ? basePrice * 0.7 * bookingInfo.children
                : 0;
        const singleRoomFee = bookingInfo.adults === 1 ? 900000 : 0;
        return adultTotal + childTotal + singleRoomFee;
    };

    const totalPrice = calculateTotal();

    const backToHome = () => {
        window.location.href = '/';
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Success Message */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-check text-green-600 text-4xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            Đặt tour thành công!
                        </h1>
                        <p className="text-gray-600">
                            Cảm ơn bạn đã đặt tour du lịch với VietTravel. Chúng
                            tôi đã gửi thông tin xác nhận đến email của bạn.
                        </p>
                    </div>

                    {/* Booking Details */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                        <div className="bg-blue-600 text-white p-6">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <h2 className="text-xl font-bold mb-2 md:mb-0">
                                    Chi tiết đơn đặt tour
                                </h2>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <span className="text-white">
                                        Mã đơn hàng:{' '}
                                    </span>
                                    <span className="font-bold text-white">
                                        {bookingId}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-start md:items-center mb-6 pb-6 border-b border-gray-200">
                                <img
                                    src={selectedTourData.image}
                                    alt={selectedTourData.name}
                                    className="w-full md:w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {selectedTourData.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-gray-600">
                                        <div className="flex items-center">
                                            <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                                            <span>
                                                {selectedTourData.location}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-clock text-blue-600 mr-2"></i>
                                            <span>
                                                {selectedTourData.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-users text-blue-600 mr-2"></i>
                                            <span>
                                                {bookingInfo.adults} người lớn
                                                {bookingInfo.children > 0
                                                    ? `, ${bookingInfo.children} trẻ em`
                                                    : ''}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-3">
                                        Thông tin đặt tour
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Ngày đặt tour:
                                            </span>
                                            <span className="font-medium">
                                                {bookingDate}
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Ngày khởi hành:
                                            </span>
                                            <span className="font-medium">
                                                {departureDate}
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Số lượng khách:
                                            </span>
                                            <span className="font-medium">
                                                {bookingInfo.adults} người lớn
                                                {bookingInfo.children > 0
                                                    ? `, ${bookingInfo.children} trẻ em`
                                                    : ''}
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Trạng thái:
                                            </span>
                                            <span className="font-medium text-orange-600">
                                                Chờ thanh toán
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-800 mb-3">
                                        Thông tin liên hệ
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Họ và tên:
                                            </span>
                                            <span className="font-medium">
                                                {bookingInfo.fullName}
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Số điện thoại:
                                            </span>
                                            <span className="font-medium">
                                                {bookingInfo.phone}
                                            </span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-gray-600 w-40">
                                                Email:
                                            </span>
                                            <span className="font-medium">
                                                {bookingInfo.email}
                                            </span>
                                        </li>
                                        {bookingInfo.specialRequests && (
                                            <li className="flex">
                                                <span className="text-gray-600 w-40">
                                                    Yêu cầu đặc biệt:
                                                </span>
                                                <span className="font-medium">
                                                    {
                                                        bookingInfo.specialRequests
                                                    }
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h4 className="font-bold text-gray-800 mb-3">
                                    Chi tiết thanh toán
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Người lớn (x{bookingInfo.adults})
                                        </span>
                                        <span className="font-medium">
                                            {(
                                                parseInt(
                                                    selectedTourData.price.replace(
                                                        /[^\d]/g,
                                                        ''
                                                    )
                                                ) * bookingInfo.adults
                                            ).toLocaleString()}
                                            đ
                                        </span>
                                    </div>
                                    {bookingInfo.children > 0 && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                Trẻ em (x{bookingInfo.children})
                                            </span>
                                            <span className="font-medium">
                                                {(
                                                    parseInt(
                                                        selectedTourData.price.replace(
                                                            /[^\d]/g,
                                                            ''
                                                        )
                                                    ) *
                                                    0.7 *
                                                    bookingInfo.children
                                                ).toLocaleString()}
                                                đ
                                            </span>
                                        </div>
                                    )}
                                    {bookingInfo.adults === 1 && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                Phụ thu phòng đơn
                                            </span>
                                            <span className="font-medium">
                                                900,000đ
                                            </span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-300 pt-2 mt-2">
                                        <div className="flex justify-between font-bold">
                                            <span>Tổng cộng</span>
                                            <span className="text-blue-600">
                                                {totalPrice.toLocaleString()}đ
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-1">
                                            <span className="text-gray-600">
                                                Số tiền cần thanh toán ngay
                                                (50%)
                                            </span>
                                            <span className="font-medium text-red-600">
                                                {(
                                                    totalPrice * 0.5
                                                ).toLocaleString()}
                                                đ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                <div className="flex items-start">
                                    <i className="fas fa-info-circle text-yellow-500 mt-1 mr-3"></i>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-1">
                                            Hướng dẫn thanh toán
                                        </h4>
                                        <p className="text-gray-600 mb-3">
                                            Vui lòng thanh toán đặt cọc 50%
                                            trong vòng 24 giờ để xác nhận đơn
                                            đặt tour của bạn. Phần còn lại sẽ
                                            được thanh toán trước ngày khởi hành
                                            7 ngày.
                                        </p>
                                        <div className="bg-white rounded-lg p-3">
                                            <h5 className="font-bold text-gray-800 mb-2">
                                                Thông tin chuyển khoản
                                            </h5>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>
                                                    <span className="font-medium">
                                                        Ngân hàng:
                                                    </span>{' '}
                                                    Vietcombank
                                                </li>
                                                <li>
                                                    <span className="font-medium">
                                                        Số tài khoản:
                                                    </span>{' '}
                                                    1234567890
                                                </li>
                                                <li>
                                                    <span className="font-medium">
                                                        Chủ tài khoản:
                                                    </span>{' '}
                                                    CÔNG TY DU LỊCH VIETTRAVEL
                                                </li>
                                                <li>
                                                    <span className="font-medium">
                                                        Nội dung:
                                                    </span>{' '}
                                                    {bookingId} -{' '}
                                                    {bookingInfo.fullName}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <button
                                    onClick={backToHome}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer flex-1"
                                >
                                    Quay lại trang chủ
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer flex-1"
                                >
                                    <i className="fas fa-print mr-2"></i>
                                    In thông tin đặt tour
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Support */}
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                            Bạn cần hỗ trợ?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Nếu bạn có bất kỳ câu hỏi nào về đơn đặt tour, vui
                            lòng liên hệ với chúng tôi qua:
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <a
                                href="tel:+842838228898"
                                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                            >
                                <i className="fas fa-phone-alt text-blue-600 mr-2"></i>
                                +84 28 3822 8898
                            </a>
                            <a
                                href="mailto:info@viettravel.com.vn"
                                className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                            >
                                <i className="fas fa-envelope text-blue-600 mr-2"></i>
                                info@viettravel.com.vn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Confirmation;
