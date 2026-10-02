import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTask from './Components/AddTask'
import ListTask from './Components/ListTask'
function App() {


  return (
  <div className="min-h-screen bg-blue-50 px-4 py-12">
    <main className="mx-auto w-full max-w-xl space-y-6 rounded-2xl bg-white p-8 shadow-sm" >
    <header>
      <h1 className='text-2xl font-bold text-blue-700'>Ma ToDo List</h1>
      <p className='text-sm text-slate-500'>Ajoutez, Modifiez et Filtrez vos taches</p>
    </header>
     <AddTask />
      <ListTask />
    </main>

   
  </div>
  )
}

export default App
