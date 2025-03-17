import React from "react";

const WhatsNew: React.FC = () => {
  return (
    <section className="border p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4">What's New</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>最新記事のタイトル 1</li>
        <li>最新記事のタイトル 2</li>
        <li>最新記事のタイトル 3</li>
      </ul>
    </section>
  );
};

export default WhatsNew;
