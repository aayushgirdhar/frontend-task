export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-bg-primary text-white text-2xl">
      {children}
    </div>
  );
}
