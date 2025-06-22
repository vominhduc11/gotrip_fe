import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold text-blue-600">
                        VietTravel
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-6">
                        <a href="#" className="text-blue-600 font-medium">
                            Trang chủ
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Tour du lịch
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Điểm đến
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Khuyến mãi
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Liên hệ
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                            Đăng nhập
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                            Đăng ký
                        </button>
                    </div>
                </div>

                <button
                    className="md:hidden text-gray-700"
                    onClick={toggleMenu}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col px-4 py-2">
                        <a href="#" className="py-2 text-blue-600 font-medium">
                            Trang chủ
                        </a>
                        <a href="#" className="py-2 text-gray-700">
                            Tour du lịch
                        </a>
                        <a href="#" className="py-2 text-gray-700">
                            Điểm đến
                        </a>
                        <a href="#" className="py-2 text-gray-700">
                            Khuyến mãi
                        </a>
                        <a href="#" className="py-2 text-gray-700">
                            Liên hệ
                        </a>
                        <div className="flex flex-col space-y-2 mt-2 pt-2 border-t">
                            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-button whitespace-nowrap cursor-pointer">
                                Đăng nhập
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-button whitespace-nowrap cursor-pointer">
                                Đăng ký
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
