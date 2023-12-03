import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <section>
          <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div class="">
              <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold md:text-5xl">Contact </h2>
                <p class="mx-auto mb-12 mt-4 max-w-xl text-[#647084]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>

              <form
                class="mb-4 text-left sm:px-4 md:px-20"
                name="wf-form-name"
                method="get"
              >
                <div class="mb-4 grid grid-cols-2 gap-6">
                  <div>
                    <label for="name-2" class="mb-1 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div>
                    <label for="name-3" class="mb-1 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                      placeholder=""
                      required=""
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label for="field" class="mb-1 font-medium">
                    Company Website
                  </label>
                  <input
                    type="text"
                    class="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder=""
                    required=""
                  />
                </div>
                <div class="mb-4">
                  <label for="field" class="mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    class="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                    placeholder=""
                    required=""
                  />
                </div>
                <div class="mb-8">
                  <label for="field" class="mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    placeholder=""
                    class="h-auto min-h-[186px] w-full overflow-auto bg-[#f2f2f7] px-3 py-2 text-sm text-[#333333]"
                  >
                    {" "}
                  </textarea>
                </div>
                <label class="mb-1 flex pb-4 font-medium">
                  <input type="checkbox" name="checkbox-3" />
                  <span
                    class="ml-4 inline-block cursor-pointer text-sm"
                    for="checkbox-3"
                  >
                    I agree with the{" "}
                    <a href="/" class="font-bold text-[#0b0b1f]">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
                <a
                  href="/"
                  class="mr-5 flex w-full items-center justify-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
                >
                  <p class="mr-6 font-bold">Send</p>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 flex-none"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </a>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
