function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">VietTravel</h3>
                        <p className="text-gray-400 mb-6">
                            Công ty du lịch hàng đầu Việt Nam, chuyên cung cấp
                            các dịch vụ du lịch chất lượng cao với giá cả hợp
                            lý.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Liên hệ</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                                <span className="text-gray-400">
                                    123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt mr-3 text-blue-500"></i>
                                <span className="text-gray-400">
                                    +84 28 3822 8898
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-blue-500"></i>
                                <span className="text-gray-400">
                                    info@viettravel.com.vn
                                </span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-clock mr-3 text-blue-500"></i>
                                <span className="text-gray-400">
                                    8:00 - 17:30, Thứ 2 - Thứ 7
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Thông tin</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Điều khoản & Điều kiện
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Chính sách thanh toán
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Chính sách hoàn hủy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Thanh toán</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fab fa-cc-visa text-2xl"></i>
                            </div>
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fab fa-cc-mastercard text-2xl"></i>
                            </div>
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fab fa-cc-jcb text-2xl"></i>
                            </div>
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fab fa-cc-paypal text-2xl"></i>
                            </div>
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fas fa-money-bill-wave text-2xl"></i>
                            </div>
                            <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                                <i className="fas fa-university text-2xl"></i>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mt-8 mb-4">Đối tác</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-800 p-2 rounded">
                                <i className="fas fa-plane text-xl mr-2"></i>
                                <span className="text-sm">
                                    Vietnam Airlines
                                </span>
                            </div>
                            <div className="bg-gray-800 p-2 rounded">
                                <i className="fas fa-hotel text-xl mr-2"></i>
                                <span className="text-sm">Vinpearl</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © 2025 VietTravel. Tất cả các quyền được bảo lưu.
                        </p>
                        <div className="flex items-center">
                            <span className="text-gray-500 text-sm mr-2">
                                Phát triển bởi
                            </span>
                            <span className="text-blue-500">
                                VietTravel Tech
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
