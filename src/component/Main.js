

function Main() {
  return (
    <main>
      <section className="specials">
        <h2>This Week’s Specials</h2>
        <div className="specials-grid">
          <div className="card">Salad</div>
          <div className="card">Bruschetta</div>
          <div className="card">Dessert</div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          <div className="card">“Amazing!”</div>
          <div className="card">“Loved it!”</div>
          <div className="card">“Great taste!”</div>
          <div className="card">“Perfect!”</div>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>We’re a family-owned restaurant...</p>
        </div>
        <div className="about-images">
          <img src="/images/team1.jpg" alt="Team" />
          <img src="/images/team2.jpg" alt="Kitchen" />
        </div>
      </section>
    </main>
  );
}

export default Main;
