import React, { Component } from 'react';

export default class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
            <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
          </div>   		
        </div> {/* /section-intro*/} 
        <div className="row portfolio-content">
          <div className="col-twelve">
            {/* portfolio-wrapper */}
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/liberty.jpg" alt="Liberty" />
                  <a href="#modal-01" className="overlay">	                  	           
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Liberty</h3>	     					    
                        <span className="folio-types">
                          Graphic Design
                        </span>
                      </div>	                      	
                    </div>                    
                  </a>
                </div>	               
              </div> {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/shutterbug.jpg" alt="Shutterbug" />
                  <a href="#modal-02" className="overlay">              		                  
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Shutterbug</h3>	     					    
                        <span className="folio-types">
                          Web Design
                        </span>		     		
                      </div> 	                      	
                    </div>                    
                  </a>
                </div>
              </div> {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/clouds.jpg" alt="Clouds" />
                  <a href="#modal-03" className="overlay">             		                  
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Clouds</h3>	     					    
                        <span className="folio-types">
                          Web Design
                        </span>		     		
                      </div> 	                      	
                    </div>                    
                  </a>
                </div>
              </div> {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/beetle.jpg" alt="Beetle" />
                  <a href="#modal-04" className="overlay">                  	                 
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Beetle</h3>	     					    
                        <span className="folio-types">
                          Branding
                        </span>		     		
                      </div>  	                      	
                    </div>                    
                  </a>
                </div>
              </div> {/* /folio-item */}     
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/lighthouse.jpg" alt="Lighthouse" />
                  <a href="#modal-05" className="overlay">             		                  
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Lighthouse</h3>	     					    
                        <span className="folio-types">
                          Web Development
                        </span>		     		
                      </div> 	                      	
                    </div>                    
                  </a>
                </div>
              </div> {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/salad.jpg" alt="Salad" />
                  <a href="#modal-06" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Salad</h3>	     					    
                        <span className="folio-types">
                          Branding
                        </span>		     		
                      </div>	                      	
                    </div>                    
                  </a>
                </div>
              </div>
            </div></div></div></section>
    );
  }
};