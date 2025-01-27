import BaseBackgroundWrapper from "@/components/BaseBackgroundWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseBackgroundWrapper>
      <div className="pl-[125px] pr-[105px] pt-[59px] pb-[93px]">
        {children}
      </div>
    </BaseBackgroundWrapper>
  );
}
