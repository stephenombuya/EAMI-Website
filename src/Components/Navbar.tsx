import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Mountain, Truck, LineChart, Shield } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', label: 'Overview', icon: Map },
    { to: '/minerals', label: 'Minerals', icon: Mountain },
    { to: '/logistics', label: 'Logistics', icon: Truck },
    { to: '/market', label: 'Market Insights', icon: LineChart },
    { to: '/governance', label: 'Governance', icon: Shield },
  ];

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">EAMI</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
