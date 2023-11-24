import { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'Home',
};
export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
