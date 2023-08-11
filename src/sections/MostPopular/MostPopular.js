import './MostPopular.css'

import MostPopularData from '../../data/mostPopulerData'
import { Card, SectionHeader ,SectionWrapper} from '../../components/index'
const MostPopular = () => {
 
    const cards=MostPopularData.map(card=>{
        return <Card key={card.id} image={card.image} title={card.title} rate={card.rate} download={card.download}/>
    })
  return (
    <>
        <SectionWrapper>
            <SectionHeader>Most popular</SectionHeader>
            <div className="most-popular-items">
                {cards}  
             
            </div>
        
        </SectionWrapper>
       
    </>
    )
}

export default MostPopular