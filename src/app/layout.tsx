import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { COLOR_COOKIE_THEME_NAME } from '@/constants'
import { cookies } from 'next/headers';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dylan LaRocque',
  description: 'a place for strong beliefs, loosely held.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const savedTheme = cookies().get(COLOR_COOKIE_THEME_NAME);
  const theme = savedTheme?.value || 'dark';
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        {/* <main>{children}</main> */}
      </body>
    </html>
  )
}



      