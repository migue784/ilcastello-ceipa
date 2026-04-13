import React from 'react';
import ScrollReveal from './ScrollReveal';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '4rem' }}>
      <ScrollReveal direction="up">
        {subtitle && (
          <span style={{
            display: 'block',
            color: 'var(--color-tomato)',
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            {subtitle}
          </span>
        )}
        <h2 style={{
          fontSize: '3rem',
          color: 'var(--color-charcoal)',
          lineHeight: 1.2
        }}>
          {title}
        </h2>
        <div style={{
          height: '2px',
          width: '60px',
          backgroundColor: 'var(--color-wheat)',
          margin: centered ? '1.5rem auto 0' : '1.5rem 0 0'
        }} />
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
