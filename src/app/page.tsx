export default function Home() {
  return (
    <main>
      <div className=" flex flex-col items-center justify-between h-screen">
        <div className=" flex flex-col items-center justify-center">
          <div className="pt-8">
            <Image
              src={Illustration}
              alt="Illustration"
              width={312}
              height={312}
              priority={true}
            />
          </div>
          <div className="px-[49px] space-y-[17px]">
            <h1 className=" text-3xl font-bold text-center text-[#212325]">
              Gain total control of your money
            </h1>
            <p className=" text-base text-[#91919F] text-center">
              Become your own money manager and make every cent count
            </p>
          </div>
        </div>
        <div className=" space-y-4 mb-2">
          <Signup />
          <Login />
        </div>
      </div>
    </main>
  );
}
