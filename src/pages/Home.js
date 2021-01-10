import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"
import GameDetail from "../components/GameDetail"
//components
import Game from "../components/Game"
//styling and animation
import styled from "styled-components"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useLocation } from "react-router-dom"
import { fadeIn } from "../animations"

const Home = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]
  //fetch data
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  //get data from store
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  )

  return (
    <GameList variants={fadeIn} initial="hiddne" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0 rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

export default Home
