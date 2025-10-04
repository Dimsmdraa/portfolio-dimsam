import DataImage from './data';
import {listTools, listProyek, listSkills} from './data'
import CommentSection from './components/commentsection';

function App() {


  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Dimas D nya Damn kelas banget kingg🔥</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Dimas Samudra</h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am passionate about Programming, Design, and Video Editing, especially creating websites and graphic designs like posters, pamphlets, and banners. I've been exploring design for over 4 years, and I've started diving into programming in the past year. This experience allows me to combine creative and technical aspects to produce work that is both useful and visually appealing.
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="https://drive.google.com/file/d/1bcJ6dGz0t7yzB_3m6CS8SSWnJhhmRtGL/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 text-white inline-flex items-center gap-2">Check Out My CV<i className="ri-download-line ri-lg"></i>
              </a>
              <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">View Projects <i className="ri-arrow-down-line ri-lg"></i></a>
            </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto rounded-4xl animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>
      {/* about */}
      <div className="tentang mt-32 py-10" id="tentang" >
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="zoom-in" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            I'm a Computer Science student with a passion for Full Stack Web Development and UI/UX Design. I've been continuously exploring and improving my skills through a variety of digital projects, from building websites to creating other creative products. By combining my knowledge of design and programming, I strive to develop digital solutions that are both practical and enjoyable to use, offering users a smooth and engaging experience.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-17 rounded-md sm:block hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
            <h1 className="text-4xl mb-1">
              2<span className="text-violet-400"> yrs</span>
            </h1>
            <p>Experience</p>
            </div>
          </div>
          </div>
        </div>
        {/* Skills */}
        <div className="skills mt-32">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" >Skills</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" >Here are some skills I've developed through my projects.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listSkills.map((skill) => (
            <div className="flex flex-col items-center gap-4 p-6 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={skill.id} data-aos="fade-right" data-aos-duration="1000" data-aos-delay={skill.dad} >
              <img src={skill.gambar} alt={skill.nama} className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
              <h4 className="font-bold">{skill.nama}</h4>
            {/* Progress Bar */}
                <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                  <div className="bg-violet-700 h-2 rounded-full transition-all duration-500" style={{ width: `${(skill.level / 10) * 100}%` }}
                  ></div>
                </div>
                <p className="opacity-50 mt-1">{skill.level}/10</p>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4"data-aos="fade-up" data-aos-duration="1000" >My Tools</h1>
          <p className="xl:w2/5 lg:w-2/4 md:w2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >These are some of the tools I'm learning and usually use to create digital projects, from websites to design work.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay={tool.dad} >
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
        {/* Project */}
        <div className="proyek mt-32 py-10" id="proyek">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" >Project</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >Take a look at some of the projects I've worked on.</p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(proyek =>(
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md"  data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay={proyek.dad} >
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-500">Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >Contact</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" >Mau diskusi project atau sekedar say Hi? Feel free to contact me anytime!🤞</p>
          <form action="https://formsubmit.co/dimassamudraa5566@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Your Name</label>
                <input type="text" name="nama" placeholder="What's your name?" className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Your Email</label>
                <input type="email" name="email" placeholder="What's your email?" className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Your Massage</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="What do you want to say?" className="border border-zinc-500 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-500">Send Massage</button>
              </div>
            </div>
          </form>
        </div>
        {/* Komen */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <CommentSection />
        </div>


    </>
  )
}

export default App
