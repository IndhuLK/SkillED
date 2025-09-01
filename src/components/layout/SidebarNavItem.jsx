import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function SidebarNavItem({ 
  href, 
  icon: Icon, 
  children, 
  isActive = false,
  onClick 
}) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group',
        isActive
          ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
          : 'text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
      )}
    >
      <Icon className={cn(
        'h-5 w-5 mr-3 transition-colors',
        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
      )} />
      {children}
    </Link>
  );
}