/* eslint-disable */
import React from 'react';

const RightSidebar = () => {
  return (
    <div className="p-6 bg-slate-400 rounded-lg mx-4 space-y-4">
      <h2 className="font-bold text-black">TRENDING RIGHT NOW!!!</h2>
      <p className="font-bold text-black">#Batman</p>
      <p className="font-bold text-black">#CodeFellows</p>
      <p className="font-bold text-black">#HowToBeAPlayboy</p>
      <p className="font-bold text-black">#ILoveTomCruise</p>
      <p className="font-bold text-black">#HowToBecomeTheBatman</p>

      <div className="p-2 bg-red-400 rounded-lg mx-4 space-y-4">
        <div className="mt-6 flex-col space-y-4">
          <h2 className="font-bold text-black">FREE GAMES BABY!</h2>
        </div>
        <p className="text-black">
          <a href='https://ryanb021.github.io/space-monkey/' target='_blank'>
          --SpaceMonkeys--
          </a>
        </p>
        <p className="text-black">
          <a href='https://www.lutanho.net/play/tictac3d.html' target='_blank'>
          --TicTAc3D--
          </a>
        </p>
        <p className="text-black">
          <a href='https://www.lutanho.net/play/hangman.html' target='_blank'>
          --Hangman--
          </a>
        </p>
        <p className="text-black">
          <a href='https://www.lutanho.net/play/spider.html' target='_blank'>
          --Spider Solitaire--
          </a>
        </p>
        <p className="text-black">
          <a href='https://www.lutanho.net/play/sudoku.html' target='_blank'>
          --Sudoku--
          </a>
        </p>
        <p className="text-black">
          <a href='https://www.lutanho.net/play/tetris.html' target='_blank'>
          --Tetris--
          </a>
        </p>
      </div>
    </div>


  )
};



export default RightSidebar;
