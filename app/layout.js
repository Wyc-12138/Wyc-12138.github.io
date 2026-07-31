import "./globals.css";

export const metadata = {
  title: "Wyc-12138",
  description: "Personal homepage for Wyc-12138"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
