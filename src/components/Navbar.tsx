import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Partners", href: "#partners" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(147, 51, 234, 0.2)',
        boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
        zIndex: 50
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            height: '2rem',
            width: '2rem',
            background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
          }}>
            E
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }}>
            ElitePay
          </div>
        </div>
        <div 
          className="nav-links"
          style={{
            display: 'none',
            gap: '2rem'
          }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              whileHover={{ 
                scale: 1.1,
                color: '#ffffff'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #9333ea, #3b82f6)',
                transition: 'width 0.3s ease',
                boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
              }} />
            </motion.a>
          ))}
        </div>
        <motion.button
          style={{
            background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(147, 51, 234, 0.3)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 30px rgba(147, 51, 234, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.5s ease'
          }} />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
