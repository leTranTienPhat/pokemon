'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const FilterLink = ({ name }: { name: string }) => {
  const searchParams = useSearchParams();

  const filteredType = searchParams.get('type');
  const isActive = filteredType === name;

  const updatedSearchParams = (() => {
    const params = new URLSearchParams(searchParams.toString());
    if (name === filteredType) {
      params.delete('type');
    } else {
      params.set('type', name);
    }
    params.set('page', '1');

    return `/pokemon?${params.toString()}`;
  })();

  return (
    <Link
      href={updatedSearchParams}
      className={cn('border border-gray-300 p-4', {
        'bg-blue-500 text-white': isActive,
      })}
    >
      {name}
    </Link>
  );
};
