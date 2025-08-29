import upload from '../../assets/images/icon-upload.svg';
import info from '../../assets/images/icon-info.svg';

const IndexPage = () => {
  return (
    <article className="flex flex-col items-center">
      <section className="mt-[2.5rem] flex w-[min(91.47%,_705px)] flex-col gap-[1.25rem] text-center">
        <h1 className="text-neutral-0 font-[Inconsolata] text-[1.875rem] leading-[110%] font-extrabold tracking-[-1px]">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="font-[Inconsolata] text-[1.25rem] leading-[120%] font-medium tracking-[-0.5px] text-neutral-300">
          Secure your spot at next year's <br /> biggest coding conference.
        </p>
      </section>
      <section className="mt-[2.5rem] flex w-[min(91.47%,_522px)] flex-col">
        <form className="flex flex-col gap-[1.5rem]" action="">
          <div>
            <label htmlFor="avatar" className="flex flex-col gap-[0.75rem]">
              <p className="text-neutral-0 font-[inconsolata] text-[1.25rem] leading-[120%] font-medium tracking-[-0.5px]">
                Upload Avatar
              </p>
              <div className="flex flex-col items-center gap-[1rem] rounded-[0.75rem] border-1 border-dashed border-neutral-500 bg-[rgba(255,255,255,8%)] px-[1rem] py-[0.75rem] opacity-80">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[0.75rem] border-1 border-neutral-700 bg-[rgba(255,255,255,10%)]">
                  <img src={upload} alt="Avatar Preview" />
                </div>
                <p className="font-[Inconsolata] text-[1.125rem] text-neutral-300">
                  Drag and drop or click to upload
                </p>
              </div>
              <div className="flex gap-[0.5rem]">
                <img src={info} alt="info" />
                <p className="font-[Inconsolata] text-[0.75rem] text-neutral-300">
                  Upload your photo (JPG or PNG, max size: 500KB).
                </p>
              </div>
            </label>
            <input className="hidden" id="avatar" type="file" />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="fullname"
              className="text-neutral-0 font-[Inconsolata] text-[1.25rem] leading-[120%] font-medium tracking-[-0.5px]"
            >
              Full Name
            </label>
            <input
              className="h-[3.375rem] rounded-[0.75rem] border-1 border-neutral-500 bg-[rgba(255,255,255,8%)] px-[1rem] font-[Inconsolata] text-[1.125rem] leading-[120%]"
              id="fullname"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-neutral-0 font-[Inconsolata] text-[1.25rem] leading-[120%] font-medium tracking-[-0.5px]">
              Email Address
            </label>
            <input
              className="h-[3.375rem] rounded-[0.75rem] border-1 border-neutral-500 bg-[rgba(255,255,255,8%)] px-[1rem] font-[Inconsolata] text-[1.125rem] leading-[120%]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-neutral-0 font-[Inconsolata] text-[1.25rem] leading-[120%] font-medium tracking-[-0.5px]">
              Github Username
            </label>
            <input
              className="h-[3.375rem] rounded-[0.75rem] border-1 border-neutral-500 bg-[rgba(255,255,255,8%)] px-[1rem] font-[Inconsolata] text-[1.125rem] leading-[120%]"
              type="text"
            />
          </div>
        </form>
      </section>
    </article>
  );
};

export default IndexPage;
