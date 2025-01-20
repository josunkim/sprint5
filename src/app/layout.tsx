"use client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { PageLayout } from "./shared/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <ChakraProvider value={defaultSystem}>
          <PageLayout>{children}</PageLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
