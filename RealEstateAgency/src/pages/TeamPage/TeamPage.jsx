import React from 'react'
import ListingCards from '../../components/listingcards/listingCards'
import './TeamPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'


const TeamPage = ({propertyData}) => {
  console.log(propertyData.sys)

  return (
    <>
    <Navbar />
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
    <Footer />
    </>
  )
}

export default TeamPage