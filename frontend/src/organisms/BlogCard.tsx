import React from "react";
import { PRIMARY_TEXT_COLOR, FONT_STYLE_BOLD, TEXT_SIZE_LARGE } from "..";

interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, date, imageUrl }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center">
            {/* 左側：テキスト情報 */}
            <div className="flex-1">
                <h2 className={`${TEXT_SIZE_LARGE} ${FONT_STYLE_BOLD} ${PRIMARY_TEXT_COLOR} mb-2`}>{title}</h2>
                <p className="text-gray-600 text-sm mb-2">{date}</p>
                <p className="text-gray-800">{description}</p>
            </div>

            {/* 右側：画像 */}
            <img src={imageUrl} alt={title} className="w-30 h-30 object-cover rounded-lg ml-4" />
        </div>
    );
};

export default BlogCard;
