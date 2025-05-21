import { useEffect } from 'react';
import './About.css';

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container">
      <header className="about-header fade-in-section">
        <h1>About Sangharsh Premier League 2025</h1>
        <p>The Sangharsh Premier League (SPL) 2025 is India’s premier amateur cricket tournament, uniting millions of cricket enthusiasts in a season of unparalleled competition and sportsmanship.</p>
      </header>

      <article className="about-section fade-in-section">
        <h2>Our Mission</h2>
        <p>To foster grassroots cricket excellence across India by providing a platform that champions fair play, teamwork, and community engagement.</p>
      </article>

      <article className="about-section fade-in-section">
        <h2>Key Highlights</h2>
        <ul>
          <li>2 crore+ registration goal</li>
          <li>1000+ regional matches leading to the grand finale</li>
          <li>Professional-grade venues and match officiating</li>
          <li>Live streaming and real-time analytics for fans</li>
        </ul>
      </article>

      <article className="about-section fade-in-section">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> Upholding the highest standards of fairness.</li>
          <li><strong>Excellence:</strong> Delivering world-class organization and performance.</li>
          <li><strong>Inclusion:</strong> Welcoming players from all regions and backgrounds.</li>
          <li><strong>Innovation:</strong> Leveraging technology for a seamless experience.</li>
        </ul>
      </article>

      <footer className="about-contact fade-in-section">
        <h2>Contact & Support</h2>
        <p>For inquiries, sponsorships, and media relations, reach us at <a href="mailto:contact@sangharshpremierleague.com">contact@sangharshpremierleague.com</a>.</p>
        <p>Follow us on social media for live updates and announcements.</p>
      </footer>
    </section>
  );
}