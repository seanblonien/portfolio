'use client';

import {ThemeProvider as NextThemeProvider} from 'next-themes';

type Props = React.ComponentProps<typeof NextThemeProvider> & {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({children, ...rest}) => {
  return <NextThemeProvider {...rest}>{children}</NextThemeProvider>;
};
