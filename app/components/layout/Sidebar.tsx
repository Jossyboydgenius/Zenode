import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Award, Code, BookOpen, Settings, History, Star, LayoutDashboard, Boxes, Users, ChevronRight, Menu } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  isChild?: boolean;
  isCollapsed?: boolean;
}

function NavItem({ icon, label, href, isActive, isChild, isCollapsed }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-green-400",
        isActive && "bg-black/40 text-green-400",
        isChild && "ml-4",
        isCollapsed && "justify-center"
      )}
      title={isCollapsed ? label : undefined}
    >
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-black/40 text-gray-300 hover:text-green-400"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-gray-800 bg-black/40 backdrop-blur-xl transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        "md:translate-x-0",
        !isCollapsed && "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex h-full flex-col">
          {/* Header/Logo */}
          <div className="border-b border-gray-800 p-6 flex justify-between items-center">
            <Link to="/dashboard" className="flex items-center gap-3">
              <Award className="h-8 w-8 text-green-400" />
              {!isCollapsed && <span className="text-xl font-bold gradient-text">Zenode</span>}
            </Link>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block text-gray-300 hover:text-green-400"
            >
              <ChevronRight className={cn("h-6 w-6 transition-transform", !isCollapsed && "rotate-180")} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <div className="py-2">
              <NavItem
                icon={<LayoutDashboard className="h-5 w-5" />}
                label="Dashboard"
                href="/dashboard"
                isActive={isActive('/dashboard')}
                isCollapsed={isCollapsed}
              />
            </div>

            <div className="py-2">
              {!isCollapsed && <h3 className="mb-2 px-3 text-sm font-medium text-gray-400">Platform</h3>}
              <div className="space-y-1">
                <NavItem
                  icon={<Code className="h-5 w-5" />}
                  label="Playground"
                  href="/playground"
                  isActive={isActive('/playground')}
                  isCollapsed={isCollapsed}
                />
                {!isCollapsed && (
                  <>
                    <NavItem
                      icon={<History className="h-5 w-5" />}
                      label="History"
                      href="/history"
                      isActive={isActive('/history')}
                      isChild
                      isCollapsed={isCollapsed}
                    />
                    <NavItem
                      icon={<Star className="h-5 w-5" />}
                      label="Starred"
                      href="/starred"
                      isActive={isActive('/starred')}
                      isChild
                      isCollapsed={isCollapsed}
                    />
                    <NavItem
                      icon={<Settings className="h-5 w-5" />}
                      label="Settings"
                      href="/playground/settings"
                      isActive={isActive('/playground/settings')}
                      isChild
                      isCollapsed={isCollapsed}
                    />
                  </>
                )}
              </div>
            </div>

            <div className="py-2">
              <NavItem
                icon={<Boxes className="h-5 w-5" />}
                label="Models"
                href="/models"
                isActive={isActive('/models')}
                isCollapsed={isCollapsed}
              />
            </div>

            <div className="py-2">
              <NavItem
                icon={<BookOpen className="h-5 w-5" />}
                label="Documentation"
                href="/docs"
                isActive={isActive('/docs')}
                isCollapsed={isCollapsed}
              />
            </div>

            <div className="py-2">
              <NavItem
                icon={<Settings className="h-5 w-5" />}
                label="Settings"
                href="/settings"
                isActive={isActive('/settings')}
                isCollapsed={isCollapsed}
              />
            </div>
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-800 p-4">
            <div className={cn(
              "flex items-center gap-3 rounded-lg bg-black/20 p-3",
              isCollapsed && "justify-center"
            )}>
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-green-400" />
              </div>
              {!isCollapsed && (
                <>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium text-gray-200 truncate">John Doe</p>
                    <p className="text-xs text-gray-400 truncate">john@example.com</p>
                  </div>
                  <button className="rounded-lg p-1 hover:bg-gray-800">
                    <Settings className="h-4 w-4 text-gray-400" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 