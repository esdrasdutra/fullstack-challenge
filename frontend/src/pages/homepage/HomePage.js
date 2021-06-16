import './styles.css';

function HomePage() {
  return (
    <div>
      <input type="text" className="search-box" placeholder="Search Book" />

      <div className="greeting">
        <div className="hello">Hi,</div>
        <div className="user">Mehmed Al Faith</div>
      </div>
    </div>
  );
}

export default HomePage;