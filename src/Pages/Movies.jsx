import React from 'react'

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      {/* Display the movies */}
      {/* Example: <Movie title="The Shawshank Redemption" year="1994" /> */}

      <section className="mid_section mt-5">
        <h2>Top Movies for you</h2>
        <div className="row g-2">
          {mustWatchData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Romantic Hits</h2>
        <div className="row g-2">
          {romanticHitsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Thrilling Chills</h2>
        <div className="row g-2">
          {thrillingchillsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Cheerful Comedy</h2>
        <div className="row g-2">
          {cheerfulcomedyData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Top Picks For You</h2>
        <div className="row g-2 mb-5">
          {toppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Movies
