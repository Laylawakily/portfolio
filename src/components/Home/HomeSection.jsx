export default function HomeSection() {
  return (
    <section>
      <div className="grid grid-cols-1 pt-10 sm:grid-cols-12 lg:px-0 md:px-4">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600  mr-4 to-pink-500">
              Hello i'm
            </span>
            Layla
            <br />
            <span className="text-white">Web Developer</span>
          </h1>
          <p className="text-lg mb-6 lg:text-xl">
            Programming is not just working alone or taking on projects;
            <br />
            it’s a world of creativity.
            <br /> I’m happy that this is my job and my world.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-white lg w-[250px] h-[250px] lg:w-[305px] lg:h-[300px] relative">
            <img
              src="/images/my-pro.jpg"
              alt="pro"
              className="absolute w-72 lg:left-2 md:left-0 top-1/2 rounded-full transform translatex-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
