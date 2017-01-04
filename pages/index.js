import React from 'react';
import createPage from 'component/createPage';
import MainSection from 'component/MainSection';

function Index() {
  return (
    <article>
      <MainSection title="The Basics">
        <p>
          My name's Zeff Svoboda. I write in <a href="https://en.wikipedia.org/wiki/Computer_programming">formal languages</a>,
          I study <a href="https://en.wikipedia.org/wiki/Linguistics">natural languages</a>, and
          sometimes I make <a href="http://vimeo.com/alteredconstants">a fool of myself</a>.
        </p>
        <p>I decided I needed another website all to myself. This is that website.</p>
      </MainSection>
      <MainSection title="Incomplete">
        <p>
          Like all the great websites at the turn of the century, this site is "under construction"
          and will likely be so indefinitely. I hope for it to be a repository for my various
          personal projects (software, video, and whatever else) as well as a portfolio of my
          general work experience. I see two approaches to that goal: hide behind a non-descript
          splash page until I've finished my masterpiece, or put something (anything) out there for
          scrutiny. Let's see how the latter goes.
        </p>
      </MainSection>
    </article>
  );
}

export default createPage(Index);
