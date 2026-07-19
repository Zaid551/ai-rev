const HeroSection = () => {
  const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
  ];

  return (
    <section id="home" className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="gradient-text text-nowrap">Artificial Intelligence</span>
            <br />
            for a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">Discover how AI is transforming industries and improving lives worldwide. Our cutting-edge solutions harness the power of machine learning to solve complex problems.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="btn-primary" href="#">Explore AI Solutions</a>
            <a className="btn-outline" href="#">Learn More</a>
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {images.map((image,index)=>(
                <img  src={image} alt={`${index} + 1`}  className="avatar" key={index}/>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by{" "}
              <span className="text-primary font-bold">10,000+</span>{" "} 
              people worldwide</p>
          </div>
        </div>
        {/* right content */}
        <div className="relative w-full h-80 md:h-[600px] group">
          <div className="w-full h-full overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <img 
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="hero section" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl z-[-1] pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-primary/30"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl z-[-1] pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-accent/30"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection