import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Concrete facility"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/armorock-logo.svg"
              alt="Armorock Logo"
              width={300}
              height={100}
              className="mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-8 max-w-4xl">
            SUSTAINABLE IN DESIGN. PROVEN IN PERFORMANCE.
            <br />
            TRUSTED FOR THE FUTURE.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/quote" className="btn btn-primary">
              GET A QUOTE
            </Link>
            <Link href="/contact" className="btn btn-outline">
              CONNECT WITH US
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <Image 
                src="/armorock-icon.svg" 
                alt="Armorock Icon" 
                width={200} 
                height={200}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">WHO IS ARMOROCK?</h2>
              <p className="text-lg mb-6">
                We are an innovative polymer concrete company that provides corrosion-resistant, 
                sustainable, and long-lasting solutions to common issues within the waste water 
                industry. We are an innovative polymer concrete company that provides 
                corrosion-resistant, sustainable, and long-lasting solutions to common issues 
                within the waste water industry.
              </p>
              <p className="text-xl font-semibold">
                Sustainable in Design. Proven in Performance. Trusted for the Future.
              </p>
              <Link href="/contact" className="btn btn-primary mt-8 inline-block">
                CONNECT WITH US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Polymer Concrete Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">WHAT IS POLYMER CONCRETE?</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete. 
                Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete.
                Polymer concrete is a sustainable, corrosion-resistant alternative to traditional precast concrete.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gray-200 rounded-full w-64 h-64 mx-auto overflow-hidden">
                <Image 
                  src="/images/polymer-concrete.jpg" 
                  alt="Polymer Concrete Cross Section" 
                  width={300} 
                  height={300}
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[var(--primary)] text-white p-4 text-center font-bold">
                  RESIN
                </div>
                <div className="bg-[var(--primary)] text-white p-4 text-center font-bold">
                  SAND
                </div>
                <div className="bg-[var(--primary)] text-white p-4 text-center font-bold">
                  AGGREGATE
                </div>
                <div className="bg-[var(--primary)] text-white p-4 text-center font-bold">
                  FRP REBAR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2S Corrosion Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">H2S CORROSION</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Traditional precast concrete structures corrode when exposed to sulfuric acid, 
              a common issue in the waste water industry. Corrosion increases rehabilitation costs 
              of traditional concrete structures, costing municipalities (number for money) over time. 
              Armorock is the solution.
            </p>
            <p className="text-lg mb-6">
              Rather than using temporary treatments like admixtures, liners, and coatings, 
              Armorock polymer concrete is the long-lasting solution to corrosion.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom text-center">
          <div className="mb-8">
            <Image 
              src="/armorock-icon.svg" 
              alt="Armorock Icon" 
              width={120} 
              height={120}
              className="mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ARMOROCK IS THE SOLUTION</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Something inspirational about how amazing Armorock is and the product and all the things.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            SUSTAINABLE IN DESIGN. PROVEN IN PERFORMANCE.<br />
            TRUSTED FOR THE FUTURE.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/quote" className="btn btn-primary">
              GET A QUOTE
            </Link>
            <Link href="/contact" className="btn btn-outline">
              CONNECT WITH US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
