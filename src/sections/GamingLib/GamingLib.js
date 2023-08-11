import './GamingLib.css'
import { GamingLibraryCard, SectionHeader ,SectionWrapper} from '../../components/index'
import GamingLibraryData from '../../data/GamingLibraryData'
const GamingLib = () => {
  const cards=GamingLibraryData.map(card=>{
      return <GamingLibraryCard key={card.id} image={card.image} title={card.title} catrgory={card.catrgory} date_added={card.date_added} hours_played={card.hours_played} download={card.download}/>
  })
  return (
    <>
      <SectionWrapper>
          <SectionHeader>Gaming Library</SectionHeader>
          <div className="gaming-cards">
            {cards}
          </div>
      </SectionWrapper>
    
    </>
  )
}

export default GamingLib