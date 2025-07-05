import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  return (
    <motion.div
      style={{
        background: 'rgba(31, 41, 55, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(147, 51, 234, 0.2)',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)',
        border: '1px solid rgba(147, 51, 234, 0.4)'
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Question icon */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        width: '30px',
        height: '30px',
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: 'white',
        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
      }}>
        ?
      </div>
      
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '0.75rem',
        paddingRight: '3rem',
        textShadow: '0 0 10px rgba(147, 51, 234, 0.3)'
      }}>
        {question}
      </h3>
      <p style={{
        color: '#d1d5db',
        lineHeight: '1.6',
        fontSize: '0.875rem'
      }}>
        {answer}
      </p>
      
      {/* Hover glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is ElitePay?",
      answer: "ElitePay is a US-based payment platform that combines AI and Web 3 technologies for seamless crypto and fiat transactions.",
    },
    {
      question: "How secure are the payments?",
      answer: "Our platform uses advanced encryption and AI-driven fraud detection to ensure maximum security for all transactions.",
    },
    {
      question: "Can I use ElitePay on mobile?",
      answer: "Yes, ElitePay is fully responsive and accessible on desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <motion.section
      id="faq"
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
          radial-gradient(circle at 25% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
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
          Frequently Asked Questions
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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
