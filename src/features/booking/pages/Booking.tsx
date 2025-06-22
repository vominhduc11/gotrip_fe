import { useState } from 'react';

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

function Booking() {
    const [bookingInfo, setBookingInfo] = useState({
        startDate: '',
        adults: 2,
        children: 0,
        fullName: '',
        phone: '',
        email: '',
        specialRequests: ''
    });
    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setBookingInfo({
            ...bookingInfo,
            [name]: value
        });
    };
    const backToTourDetail = () => {
        window.scrollTo(0, 0);
    };
    const handleNumberChange = (
        field: 'adults' | 'children',
        increment: boolean
    ) => {
        setBookingInfo((prev) => {
            const currentValue = prev[field];
            let newValue = increment ? currentValue + 1 : currentValue - 1;

            if (field === 'adults') {
                newValue = Math.max(1, Math.min(20, newValue));
            } else {
                newValue = Math.max(0, Math.min(10, newValue));
            }

            return {
                ...prev,
                [field]: newValue
            };
        });
    };

    return (
        <main className="pt-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <button
                        onClick={backToTourDetail}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Quay lại thông tin tour
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-blue-600 text-white p-6">
                        <h1 className="text-2xl font-bold">Đặt tour du lịch</h1>
                        <p className="mt-2 text-blue-100">
                            {selectedTour.name}
                        </p>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Booking Form */}
                            <div className="lg:col-span-2">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">
                                    Thông tin đặt tour
                                </h2>

                                <form className="space-y-6">
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <h3 className="font-bold text-gray-800 mb-3">
                                            Thông tin tour
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Ngày khởi hành
                                                </label>
                                                <div className="relative">
                                                    <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                                    <select
                                                        name="startDate"
                                                        value={
                                                            bookingInfo.startDate
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm"
                                                    >
                                                        <option value="">
                                                            Chọn ngày khởi hành
                                                        </option>
                                                        {selectedTour.startDates.map(
                                                            (date, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={date}
                                                                >
                                                                    {new Date(
                                                                        date
                                                                    ).toLocaleDateString(
                                                                        'vi-VN',
                                                                        {
                                                                            weekday:
                                                                                'long',
                                                                            year: 'numeric',
                                                                            month: 'long',
                                                                            day: 'numeric'
                                                                        }
                                                                    )}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
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
                                                                onClick={() =>
                                                                    handleNumberChange(
                                                                        'adults',
                                                                        false
                                                                    )
                                                                }
                                                                className="bg-gray-200 px-3 py-2 rounded-l-lg border border-gray-300 cursor-pointer"
                                                            >
                                                                <i className="fas fa-minus text-gray-600"></i>
                                                            </button>
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                max="20"
                                                                value={
                                                                    bookingInfo.adults
                                                                }
                                                                onChange={(e) =>
                                                                    setBookingInfo(
                                                                        {
                                                                            ...bookingInfo,
                                                                            adults:
                                                                                parseInt(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                ) ||
                                                                                1
                                                                        }
                                                                    )
                                                                }
                                                                className="w-full text-center border-t border-b border-gray-300 py-2 focus:outline-none text-sm"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleNumberChange(
                                                                        'adults',
                                                                        true
                                                                    )
                                                                }
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
                                                                onClick={() =>
                                                                    handleNumberChange(
                                                                        'children',
                                                                        false
                                                                    )
                                                                }
                                                                className="bg-gray-200 px-3 py-2 rounded-l-lg border border-gray-300 cursor-pointer"
                                                            >
                                                                <i className="fas fa-minus text-gray-600"></i>
                                                            </button>
                                                            <input
                                                                type="number"
                                                                min="0"
                                                                value={
                                                                    bookingInfo.children
                                                                }
                                                                onChange={(e) =>
                                                                    setBookingInfo(
                                                                        {
                                                                            ...bookingInfo,
                                                                            children:
                                                                                parseInt(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                ) ||
                                                                                0
                                                                        }
                                                                    )
                                                                }
                                                                className="w-full text-center border-t border-b border-gray-300 py-2 focus:outline-none text-sm"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleNumberChange(
                                                                        'children',
                                                                        true
                                                                    )
                                                                }
                                                                className="bg-gray-200 px-3 py-2 rounded-r-lg border border-gray-300 cursor-pointer"
                                                            >
                                                                <i className="fas fa-plus text-gray-600"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-3">
                                            Thông tin liên hệ
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Họ và tên{' '}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={bookingInfo.fullName}
                                                    onChange={handleInputChange}
                                                    placeholder="Nhập họ và tên"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Số điện thoại{' '}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={bookingInfo.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Nhập số điện thoại"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                    required
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email{' '}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={bookingInfo.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Nhập địa chỉ email"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Yêu cầu đặc biệt
                                        </label>
                                        <textarea
                                            name="specialRequests"
                                            value={bookingInfo.specialRequests}
                                            onChange={handleInputChange}
                                            placeholder="Nhập yêu cầu đặc biệt của bạn (nếu có)"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        ></textarea>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h3 className="font-bold text-gray-800 mb-3">
                                            Phương thức thanh toán
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="payment-bank"
                                                    name="payment"
                                                    value="bank"
                                                    className="mr-2"
                                                    defaultChecked
                                                />
                                                <label
                                                    htmlFor="payment-bank"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <i className="fas fa-university text-blue-600 mr-2"></i>
                                                    Chuyển khoản ngân hàng
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="payment-card"
                                                    name="payment"
                                                    value="card"
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="payment-card"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <i className="fas fa-credit-card text-blue-600 mr-2"></i>
                                                    Thanh toán thẻ tín dụng/ghi
                                                    nợ
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="payment-cash"
                                                    name="payment"
                                                    value="cash"
                                                    className="mr-2"
                                                />
                                                <label
                                                    htmlFor="payment-cash"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <i className="fas fa-money-bill-wave text-blue-600 mr-2"></i>
                                                    Thanh toán tiền mặt tại văn
                                                    phòng
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="mt-1 mr-2"
                                            required
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm text-gray-700"
                                        >
                                            Tôi đã đọc và đồng ý với{' '}
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:underline"
                                            >
                                                điều khoản & điều kiện
                                            </a>{' '}
                                            và{' '}
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:underline"
                                            >
                                                chính sách bảo mật
                                            </a>{' '}
                                            của VietTravel
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                                    >
                                        Hoàn tất đặt tour
                                    </button>
                                </form>
                            </div>

                            {/* Order Summary */}
                            <div>
                                <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                                        Tóm tắt đơn hàng
                                    </h3>

                                    <div className="flex items-center mb-4">
                                        <img
                                            src={selectedTour.image}
                                            alt={selectedTour.name}
                                            className="w-20 h-20 object-cover rounded-lg mr-4"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-800">
                                                {selectedTour.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {selectedTour.duration}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-b border-gray-200 py-4 mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">
                                                Người lớn (x{bookingInfo.adults}
                                                )
                                            </span>
                                            <span className="text-gray-800 font-medium">
                                                {(
                                                    parseInt(
                                                        selectedTour.price.replace(
                                                            /[^\d]/g,
                                                            ''
                                                        )
                                                    ) * bookingInfo.adults
                                                ).toLocaleString()}
                                                đ
                                            </span>
                                        </div>
                                        {bookingInfo.children > 0 && (
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">
                                                    Trẻ em (x
                                                    {bookingInfo.children})
                                                </span>
                                                <span className="text-gray-800 font-medium">
                                                    {(
                                                        parseInt(
                                                            selectedTour.price.replace(
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
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">
                                                Phụ thu phòng đơn
                                            </span>
                                            <span className="text-gray-800 font-medium">
                                                {bookingInfo.adults === 1
                                                    ? '900,000đ'
                                                    : '0đ'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-lg font-bold text-gray-800">
                                            Tổng cộng
                                        </span>
                                        <span className="text-xl font-bold text-blue-600">
                                            {(
                                                parseInt(
                                                    selectedTour.price.replace(
                                                        /[^\d]/g,
                                                        ''
                                                    )
                                                ) *
                                                    bookingInfo.adults +
                                                (bookingInfo.children > 0
                                                    ? parseInt(
                                                          selectedTour.price.replace(
                                                              /[^\d]/g,
                                                              ''
                                                          )
                                                      ) *
                                                      0.7 *
                                                      bookingInfo.children
                                                    : 0) +
                                                (bookingInfo.adults === 1
                                                    ? 900000
                                                    : 0)
                                            ).toLocaleString()}
                                            đ
                                        </span>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                                        <div className="flex items-start">
                                            <i className="fas fa-info-circle text-yellow-500 mt-1 mr-3"></i>
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-1">
                                                    Chính sách hủy tour
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>
                                                        Hủy trước 15 ngày: Hoàn
                                                        100% tiền cọc
                                                    </li>
                                                    <li>
                                                        Hủy trước 10 ngày: Hoàn
                                                        70% tổng giá trị tour
                                                    </li>
                                                    <li>
                                                        Hủy trước 5 ngày: Hoàn
                                                        50% tổng giá trị tour
                                                    </li>
                                                    <li>
                                                        Hủy trong vòng 5 ngày:
                                                        Không hoàn tiền
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center space-x-2">
                                        <i className="fas fa-shield-alt text-green-600"></i>
                                        <span className="text-sm text-gray-600">
                                            Thanh toán an toàn & bảo mật
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Booking;
