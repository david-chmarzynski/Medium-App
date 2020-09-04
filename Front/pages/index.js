import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link href="/creation">
        <a>Les Créations</a>
      </Link>
    </div>
  )
}

export default Home;