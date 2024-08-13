export default function OnboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body >{children}</body>
      </html>
    );
  }