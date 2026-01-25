'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

type Props = React.ComponentProps<typeof NextThemeProvider> & {
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...rest }: Props) {
  return <NextThemeProvider {...rest}>{children}</NextThemeProvider>;
}
