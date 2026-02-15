"use client";

import Icon from "./Icon";

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-slate-900 bg-[#020617] text-center py-10 text-slate-600 text-xs">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-4 opacity-50">
                    <div className="flex items-center gap-1"><Icon name="Lock" size={12} /> Secure SSL</div>
                    <div>Privacy Protected</div>
                    <div>Support: +62 812-XXXX-XXXX</div>
                </div>
                <p>&copy; 2026 OXO Talks. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
