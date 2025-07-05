import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `,
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
            position: 'relative'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, #9333ea, #3b82f6)',
            borderRadius: '2px',
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }} />
        </motion.h2>
        <motion.div
          style={{
            maxWidth: '32rem',
            margin: '0 auto'
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{
            background: 'rgba(31, 41, 55, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(147, 51, 234, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(17, 24, 39, 0.8)',
                color: 'white',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onFocus={(e) => {
                const target = e.target as HTMLInputElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.6)';
                target.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.3)';
              }}
              onBlur={(e) => {
                const target = e.target as HTMLInputElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.3)';
                target.style.boxShadow = 'none';
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(17, 24, 39, 0.8)',
                color: 'white',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onFocus={(e) => {
                const target = e.target as HTMLInputElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.6)';
                target.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.3)';
              }}
              onBlur={(e) => {
                const target = e.target as HTMLInputElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.3)';
                target.style.boxShadow = 'none';
              }}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(17, 24, 39, 0.8)',
                color: 'white',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                minHeight: '120px',
                backdropFilter: 'blur(10px)',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.6)';
                target.style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.3)';
              }}
              onBlur={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.border = '1px solid rgba(147, 51, 234, 0.3)';
                target.style.boxShadow = 'none';
              }}
            />
            <motion.button
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
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
              <span style={{ position: 'relative', zIndex: 1 }}>Send Message</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transition: 'left 0.5s ease'
              }} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
