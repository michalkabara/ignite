import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"
//redux routes
import { fetchSearch } from "../actions/gamesAction"
import { useDispatch } from "react-redux"
import { fadeIn } from "../animations"

const Nav = () => {
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState("")
  const inputHandler = (e) => {
    setTextInput(e.target.value)
    console.log(textInput)
  }

  const submitSearch = (e) => {
    dispatch(fetchSearch(textInput))
    e.preventDefault()
    setTextInput("")
    console.log(textInput)
  }

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" })
  }

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input onChange={inputHandler} type="text" value={textInput} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5 rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 7px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #f38a00;
    color: white;
    border-radius: 0 7px 7px 0;
  }
`

const Logo = styled(motion.form)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`

export default Nav
