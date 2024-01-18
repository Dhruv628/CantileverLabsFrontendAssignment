import { SidebarLayoutProps } from '../Types/Types';
import Sidebar from './Sidebar/Sidebar';

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="min-h-screen flex flex-row w-full bg-primary">
      <div className="max-w-[14%]">
        <Sidebar />
      </div>
      <div className="w-[93%]">
        {children}
      </div>
    </div>
  );
}