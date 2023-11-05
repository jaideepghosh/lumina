import Badge, { BadgeTypes } from "./Badge";
import Colors from "./Colors";

const ScreenHeader = () => (
  <section className="py-10 dark:text-white p-4">
    <div className="grid md:grid-cols-6 gap-2">
      <div className="flex flex-col items-center p-2 gap-2">
        <img
          src="https://assets-global.website-files.com/601516294a93059fa39376e7/6423b6724714c98ddb7fbf85_Appsmith-Logomark.png"
          className="w-full col-span-1"
        />
        <a
          href=""
          className="w-full px-4 py-3 text-center text-slate-100 bg-slate-600 border border-transparent dark:border-slate-700 hover:border-slate-500 hover:bg-slate-500 dark:text-slate-400 dark:bg-slate-700 dark:hover:bg-slate-900"
        >
          Visit Website
        </a>
      </div>
      <div className="col-span-5 flex flex-col gap-4">
        <h1 className="text-5xl font-semibold text-gray-700 dark:text-gray-400">
          appsmith
        </h1>
        <div>
          <Badge message="Developer tools" />
          <Badge message="SaaS" type={BadgeTypes.SUCCESS} />
          <Badge message="risk" type={BadgeTypes.DANGER} />
          <Badge message="love" type={BadgeTypes.LOVE} />
        </div>
        <p className="text-justify">
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
          Open-source, low-code platform to build internal apps quickly
        </p>

        <div className="bg-gray-100 dark:bg-gray-700">
          <div className="p-3 lg:p-5 ">
            <div className="p-2 dark:bg-gray-800 bg-gray-50">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                <div className="w-full md:w-1/5">
                  <div className="flex ">
                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Added on
                      </p>
                      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                        10 October 2023
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/5">
                  <div className="flex ">
                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Added by
                      </p>
                      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                        @jaideepghosh
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/5">
                  <div className="flex ">
                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Category
                      </p>
                      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                        Developer tools
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/5">
                  <div className="flex ">
                    <span className="mr-3 text-gray-500 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        Colors
                      </p>
                      <div>
                        <Colors />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ScreenHeader;
