import '../styles/Portfolio.css'
import {portfolioList} from '../data/DataPortfolio'
function Portfolio() {
  return (
    <section id="latestProject">
        <div className="wrapper">
            <h3>Latest Project</h3>
            <div className="grid">
                {
                    portfolioList.map((item) => {
                        return (
                            <div className="item" key={item.id}>
                                <a href=""><img src={item.img} /></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Portfolio