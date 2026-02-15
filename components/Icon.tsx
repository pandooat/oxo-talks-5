"use client";

import {
    TrendingUp,
    CheckCircle,
    AlertTriangle,
    Calendar,
    Clock,
    ShieldCheck,
    Lock,
    X,
    Mic,
    Zap,
    Users,
    ChevronRight
} from "lucide-react";

interface IconProps {
    name: string;
    size?: number;
    className?: string;
}

const Icon = ({ name, size = 24, className }: IconProps) => {
    const icons: { [key: string]: React.ElementType } = {
        TrendingUp,
        CheckCircle,
        AlertTriangle,
        Calendar,
        Clock,
        ShieldCheck,
        Lock,
        X,
        Mic,
        Zap,
        Users,
        ChevronRight
    };

    const LucideIcon = icons[name];

    if (!LucideIcon) return null;

    return <LucideIcon size={size} className={className} />;
};

export default Icon;
