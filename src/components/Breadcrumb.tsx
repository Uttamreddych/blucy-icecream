import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-blucy-muted mb-6" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-blucy-blue transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-blucy-blue" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-blucy-sky/40" />
            {item.path && !isLast ? (
              <Link to={item.path} className="hover:text-blucy-blue transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="font-semibold text-blucy-navy">{item.name}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
