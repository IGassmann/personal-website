import React from 'react';

const Analytics: React.VFC = () => (
  <>
    <iframe plausible-embed
            src="https://plausible.io/share/igassmann.me?auth=d1GNfDh72M25z1HHp8vqF&amp;embed=true&amp;theme=dark&amp;background=transparent"
            loading="lazy"
            className="border-none w-[1px] min-w-full h-[1600px]"/>
    <script async src="https://stats.igassmann.me/js/embed.host.js"/>
  </>
);

export default Analytics;
