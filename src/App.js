import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
        <p>By: Jorge Castaño</p>
      </main>
    </div>
  );
}

export default App;
