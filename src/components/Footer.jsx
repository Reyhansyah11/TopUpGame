import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Clock,
} from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-white text-black">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Store Name</h3>
            <p className="mb-4 text-sm">
              Tempat top up game terpercaya dengan transaksi tercepat dan
              teraman. Dengan harga termurah, proses otomatis 24 jam non-stop.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-xs lg:mx-auto">
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  <img
                    src="https://i.pinimg.com/564x/8c/14/00/8c14002029a523a0cbaf65dd59306a43.jpg"
                    alt="Logo"
                    className="w-8 h-auto rounded-sm"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  <img
                    src="https://i.pinimg.com/564x/1c/1b/a1/1c1ba1ae367e5286b2a1f7f2e724a4d3.jpg"
                    alt="Logo"
                    className="w-8 h-auto rounded-sm"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  <img
                    src="https://i.pinimg.com/564x/02/8b/92/028b92bb43a9f6c80e26c3ea403cb698.jpg"
                    alt="Logo"
                    className="w-8 h-auto rounded-sm"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  <img
                    src="https://i.pinimg.com/564x/db/94/18/db94184ce4e7dd2b312730777af41d8d.jpg"
                    alt="Logo"
                    className="w-8 h-auto rounded-sm"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  <img
                    src="https://i.pinimg.com/736x/60/42/c3/6042c3148add711c946833bbc2b90f6d.jpg"
                    alt="Logo"
                    className="w-8 h-auto rounded-sm"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span>Jl. Contoh Alamat No. 123, Kota, Provinsi, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>support@example.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              Jam Operasional
            </h3>
            <div className="space-y-2 mb-6">
              <p className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span>09:00 - 22:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sabtu & Minggu:</span>
                <span>10:00 - 21:00</span>
              </p>
            </div>
            <p className="text-sm">
              Customer service available during business hours
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-black my-5">
      </div>


        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h5 className="text-black font-semibold">100% Aman</h5>
              <p className="text-sm">Transaksi aman & terpercaya</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="w-8 h-8 text-blue-400" />
            <div>
              <h5 className="text-black font-semibold">Pembayaran Mudah</h5>
              <p className="text-sm">Berbagai metode pembayaran</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <div>
              <h5 className="text-black font-semibold">Proses Otomatis</h5>
              <p className="text-sm">Layanan 24 jam non-stop</p>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Footer */}
      <div className="bg-gray-200 py-4 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Store Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
