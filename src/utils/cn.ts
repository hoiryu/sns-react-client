import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * className 공통 유틸
 * tailwindcss merge 기능 추가
 */
export const cn = (...v: ClassValue[]) => twMerge(clsx(...v));
