import React from 'react';
import Link from 'next/link';

export default function OptionCard({ optionData }) {
    const { title, description, link, linkTitle, enabled, icon: Icon } = optionData;

    return (
        <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
            <h2>{title}</h2>
            <div>
                <Icon strokeWidth={0.5} className="w-12 h-12" />
            </div>
            <p className="line-clamp-1">{description}</p>

            {enabled ? (
                <Link
                    href={link}
                    className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-slate-200 inline-flex items-center space-x-2"
                >
                    {linkTitle}
                </Link>
            ) : (
                <button className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-slate-200 flex items-center space-x-2">
                    Enable
                </button>
            )}
        </div>
    );
}
