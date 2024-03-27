'use client';

import { useEffect, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

import { Button } from '@/components/Button';

export default function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copyCount, setCopyCount] = useState(0);
  const copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyCount]);

  return (
    <Button
      type="button"
      className={twMerge('relative transition', className)}
      onClick={() => {
        window.navigator.clipboard.writeText(value).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}
    >
      <span
        aria-hidden={copied}
        className={twJoin(
          'pointer-events-none transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={twJoin(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-xs transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied!
      </span>
    </Button>
  );
}
