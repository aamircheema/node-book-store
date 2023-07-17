import { colors } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <>

            <div className='heading'>
                <h1 style={{ textAlign: 'center', color: "green" }}>welcome to our book store</h1>
            </div>
            <div style={{
                fontFamily: 'sans-serif'
            }}>
                Step into "Fiction Fables," a cozy bookstore dedicated to the enchanting world of fiction.
                Explore shelves filled with captivating novels, from fantasy and mystery to romance and
                historical tales. Find your next adventure among carefully curated books, surrounded by the
                comforting scent of coffee. Relax in cozy reading corners, where sunlight dances on pages,
                inviting you to lose yourself in captivating stories. Knowledgeable staff are ready to
                guide you and share their passion for literature. Immerse yourself in "Fiction Fables" and
                let your imagination soar.
            </div>
        </>
    )
}

export default Home
