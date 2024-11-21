import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header Section */}
     

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/images/Heroheadersection.jpg" // Replace with your image URL
          alt="Hero Banner"
          className="hero-image"
        />
       
        
      </section>
       {/* Paragraph Section */}
       <section className="paragraph-section">
        <p className="info-paragraph">
         join 4,000+ companies already growing
        </p>
      </section>

      {/* Company Section */}
      <section className="company-section">
       
        <div className="companies">
          <p className="company-name">Boltshift</p>
          <p className="company-name">Lightbox</p>
          <p className="company-name">FeatherDev</p>
          <p className="company-name">Spherule</p>
          <p className="company-name">GlobalBank</p>
        </div>
      </section>
      <section className="new-heading-section">
        <h3 className="new-heading">Features</h3>
        <h1>Analytics that feels like it's from the future</h1>
        <p className="new-paragraph">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </section>
      
  

  

<section className="message-section">
        <div className="message-blocks-container">
          {/* Top row of message blocks */}
          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" 
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading">Share team inboxes</h3>
            <p className="message-paragraph">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop
            </p>
          </div>

          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" 
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading">Deliver instat answers </h3>
            <p className="message-paragraph">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy
            </p>
          </div>

          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" 
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading"> Manage your team with reports</h3>
            <p className="message-paragraph">
              Measure what matters with Untitled's easy-to-use reports.You can filter,export,and drilldown on the data in a couple clicks.
            </p>
          </div>
        </div>

        {/* Bottom row of message blocks */}
        <div className="message-blocks-container">
          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" // Replace with your message icon URL
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading">Connect the tools you already use</h3>
            <p className="message-paragraph">
              Explore 100+ integrations that make your day-to-day workflow more effient and familar.plus, our extensive developer toools.
            </p>
          </div>

          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" // Replace with your message icon URL
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading">connect with customers</h3>
            <p className="message-paragraph">
              solve a problem or close a sale in real-time with chat. if no one is available,customers are seamlessly routed to email without confusion.
            </p>
          </div>

          <div className="message-block">
            <img
              src="https://via.placeholder.com/30" 
              alt="Message Icon"
              className="message-icon"
            />
            <h3 className="message-heading">Our people make the difference</h3>
            <p className="message-paragraph">
              We are an extension of your customer service team,and all of our resourcses are free.Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
        <div className="image-after-message">
          <img
            src="/images/Testimonialsection.jpg" // Replace with your image URL
            alt="Image after Message Blocks"
            className="image-after-message-icon"
          />
        </div>

        <div className="bottom-image">
          <img
            src="/images/Featuressection.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="bottom-image-icon"
          />
        </div>
        <div className="bottom-image">
          <img
            src="/images/faqsection.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="bottom-image-icon"
          />
        </div>
        <div className="bottom-image">
          <img
            src="/images/Blogsection.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="bottom-image-icon"
          />
        </div>
        <div className="bottom-image">
          <img
            src="/images/ctasection.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="bottom-image-icon"
          />
        </div>
        <div className="bottom-image">
          <img
            src="/images/Footer.jpg" // Replace with your image URL
            alt="Bottom Image"
            className="bottom-image-icon"
          />
        </div>
      </section>
    </div>
  )
}
export default App;
