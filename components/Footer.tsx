"use client";

import Icon from "./Icon";

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-slate-200 bg-slate-50 text-center py-10 text-slate-500 text-xs">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-4 opacity-70">
                    <div className="flex items-center gap-1"><Icon name="Lock" size={12} /> Secure SSL</div>
                    <div>Privacy Protected</div>
                    <a href="https://t.me/Rezaakhmadg" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors font-medium">Contact Support</a>
                </div>
                <p>&copy; 2026 OXO Talks. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
