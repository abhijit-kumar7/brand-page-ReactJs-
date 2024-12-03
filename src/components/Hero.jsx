const HeroSection=()=>{
    return (
        <div className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE T HELP YOU WITH 
                    OUR SHOES. 
                </p>
                <div className="hero-btn">
                      <button>Shop Now</button>
                      <button class="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brand-icons">
                    <img src="/images/amazon.png"></img>
                    <img src="/images/flipkart.png"></img>
                </div>
            </div>
             <div className="hero-image">
             <img src="/images/hero-image.png"></img>
                </div>   
        </div>
    );
};

export default HeroSection;