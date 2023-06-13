import React from 'react'
import ListingCards from '../../components/listingcards/listingCards'
import './TeamPage.css'

const TeamPage = ({propertyData}) => {
  console.log(propertyData.sys)

  return (
    <>
    <h1>Team Page</h1>

    <div className='agentBigContainer'>
      
      
      {propertyData?.map((agent) => (
        <div className='agentContainer'>
        <ListingCards
        key={agent.sys.id}
        id={agent.sys.id}
        image={agent?.fields?.profilepic.fields.file.url}
        propertyName={agent?.fields?.title}
        
      />

      <p>{agent?.fields?.description}</p>
      </div>
      ))}
      
      
    </div>
    </>
  )
}

export default TeamPage