function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20 flex gap-10 font-poppins text-gray-900">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold">
          <span className="text-[#EC730D]">A</span> propos de nous
        </h1>
        <p className="text-base font-light py-5 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliqu Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
          vel tincidunt luctus, nisl nisl aliquet nisl, eget aliqu Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
          tincidunt luctus, nisl nisl aliquet nisl, eget aliqu
        </p>
        <button className="bg-[#EC730D] text-white px-4 py-2 mt-5">
          Lire plus
        </button>
      </div>
      <div className="w-1/2">
        <img
          src="https://picsum.photos/1920/1080"
          alt="about"
          className="w-full h-full object-cover bg-center bg-no-repeat grayscale-[60%]"
        />
      </div>
    </div>
  );
}

export default About;
