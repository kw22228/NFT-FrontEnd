import React from 'react';

export interface IGsapProps {
    [key: string]: React.RefObject<HTMLDivElement>;
}

export interface IGsapRevealProps {
    [key: string]: React.MutableRefObject<HTMLDivElement[]>;
}

export interface IGsapRefRevealProps {
    ref: React.RefObject<HTMLDivElement>;
    revealRef: React.MutableRefObject<HTMLDivElement[]>;
}
