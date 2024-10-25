"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Home, Wallet, PlusCircle, MinusCircle, BarChart3, Settings } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Wallet className="h-6 w-6" />
              <span className="font-bold">Fund Manager</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Button variant={isActive('/') ? "default" : "ghost"} size="sm">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/add-fund">
              <Button variant={isActive('/add-fund') ? "default" : "ghost"} size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Fund
              </Button>
            </Link>
            <Link href="/add-expense">
              <Button variant={isActive('/add-expense') ? "default" : "ghost"} size="sm">
                <MinusCircle className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
            </Link>
            <Link href="/reports">
              <Button variant={isActive('/reports') ? "default" : "ghost"} size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant={isActive('/settings') ? "default" : "ghost"} size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}