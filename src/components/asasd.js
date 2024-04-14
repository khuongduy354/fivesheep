import * as React from "react";

function LanguageSelector() {
  return (
    <div className="flex gap-5 justify-between self-start mt-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d41483e0536f78c8d711abb060c74be52f6a6a8ca2821f08a1b01848ba83af?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <div>English</div>
    </div>
  );
}

function Button({ children, className }) {
  return (
    <div
      className={`justify-center items-center px-16 py-4 max-w-full text-center rounded-[30px] w-[462px] max-md:px-5 ${className}`}
    >
      {children}
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col pt-3 pr-14 pb-12 bg-white max-md:pr-5">
      <header className="flex gap-5 justify-between self-center w-full text-xl font-bold text-center text-lime-300 whitespace-nowrap max-w-[1130px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/709ec0bfd3deab7d0a8f67bffc79803f2684efc74474f17af70732001145b3b3?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt=""
          className="shrink-0 max-w-full aspect-[2.38] w-[103px]"
        />
        <LanguageSelector />
      </header>
      <main className="mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4244ce0fc3c0c785a14b362fecfa4f157fc8b44af3e464b08a5ebca590a12a25?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt=""
              className="grow w-full aspect-[1.03] max-md:max-w-full"
            />
          </div>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-24 text-2xl font-bold text-lime-300 max-md:mt-10 max-md:max-w-full">
              <h1 className="self-stretch text-6xl font-black max-md:max-w-full max-md:text-4xl">
                DIGITAL SECURITY
              </h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0893bf1b02a639f1c203aaf46af6c2211c57cc835b05d0893d93a40f83d1ea7b?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
                alt=""
                className="mt-6 max-w-full aspect-[2.38] w-[351px]"
              />
              <Button className="mt-20 text-white bg-lime-300 max-md:mt-10">
                GET STARTED
              </Button>
              <Button className="mt-8 bg-neutral-100">
                I ALREADY HAVE AN ACCOUNT
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// ================================================
import * as React from "react";

function Logo({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 max-w-full aspect-[2.38] w-[103px]"
    />
  );
}

function LanguageSelector({ src, alt, language }) {
  return (
    <div className="flex gap-5 justify-between self-start mt-5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 w-6 aspect-square"
      />
      <div>{language}</div>
    </div>
  );
}

function HeroImage({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="self-center mt-14 w-full aspect-[1.79] max-w-[1111px] max-md:mt-10 max-md:max-w-full"
    />
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col pt-3 pb-20 text-xl font-bold text-center text-lime-300 whitespace-nowrap bg-white">
      <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/709ec0bfd3deab7d0a8f67bffc79803f2684efc74474f17af70732001145b3b3?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Company logo"
        />
        <LanguageSelector
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc9bfe2892d870f818df0faed27d87f07bbdc99008026d9bd9503c36a7a5fbc?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Language selector icon"
          language="English"
        />
      </header>
      <main>
        <HeroImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd58a67cb280480dd9ce93a5669daa3f3f386ee77493d03bf306d33a788f3d3d?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Hero image showcasing the product"
        />
      </main>
    </div>
  );
}
