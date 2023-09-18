import React from 'react'

import { Link, useSearchParams } from 'react-router-dom'

const swCharacters =  [
    {name: 'steven', type: 'Jedi'},
    {name: 'clinton', type: 'Sith'},
    {name: 'erine', type: 'Jedi'},
    {name: 'sydney', type: 'Sith'},
] 

const Marketing = () => {

    const [searchParam, setSearchParam] = useSearchParams()

    const typeFilter = searchParam.get('type')

    const displayedCharacters = typeFilter ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter ) : swCharacters

    const afterFilter = displayedCharacters.map(char => {
        return (
            <div key={char.name}>
                <h2 style={{color: 'red'}}>{char.name}</h2>
                <h3>Type:<span style={{color: 'green'}}>{char.type}</span></h3>
                <hr />
            </div>
        )
    })

    const handleFilterChange = (key, value) => {
        setSearchParam(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

  return (
    <div className='marketing'>
        <h1>Marketing Component</h1>

        {/* choose any */}
        {/* use Link (searchparam) */}
        <Link to='?type=sith'>Sith</Link>
        <Link to='?type=jedi'>Jedi</Link>
        <Link to='.'>Clear</Link>

        <br />
        <hr />

        {/* use Button (setSearchParam) */}
        {/* 'type=sith' YOU CAN ALSO USE IT THIS WAY */}
        <button onClick={() => setSearchParam({type: 'sith'})}>Sith</button> 
        <button onClick={() => setSearchParam({type: 'jedi'})}>Jedi</button>
        <button onClick={() => setSearchParam({})}>Clear</button>

        <br />
        <hr />

        {/* When you need to have more than one search params */}
        <button 
            onClick={() => handleFilterChange('type', 'sith') }
            className={`${typeFilter === 'sith' ? 'active-Link' : null}`}
        >
            Sith
        </button>
        
        <button 
            onClick={() => handleFilterChange('type', 'jedi')}
            className={`${typeFilter === 'jedi' ? 'active-Link' : null}`}
        >
            Jedi
        </button>

        {
            typeFilter && <button onClick={() => handleFilterChange('type', null)}>Clear Filter</button>
        }

        <hr />

        {afterFilter}
    </div>
  )
}

export default Marketing