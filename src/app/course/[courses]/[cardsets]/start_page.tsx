import Link from "next/link";

import Footer from "@/app/components/footer";

interface HeaderDataStructure {
    Mission: string,
    QuestionMode: string,
    CardSetName: string,
    CardSetDescription: string,
    CardSetUrl: string,
    QuestionPoolTotal: number,
    TopicCount: { [key: string]: number }
}

export default function StartPage({ 
    headerData
}: {
    headerData: HeaderDataStructure
}) {
    let topicShow: Array<React.ReactNode> = [];
    
    // Map topics to list of topic htmls
    Object.keys(headerData.TopicCount).map((topic) => {
        topicShow.push(<span className="mr-2">{topic}</span>);
        topicShow.push(<span className="mr-2">|</span>)});
    
        topicShow.pop();

    return (
        <div className='mt-[25vh] bg-white/90 dark:bg-black/80 backdrop-blur-md z-[0]'>
            
            {/* Start page content */}
            <div className="px-4 mb-8 z-0">

                {/* Title */}
                <h1 className='text-3xl mt-8 mb-3'>
                    {headerData.CardSetName}
                </h1>

                {/* Description */}
                <p>
                    {headerData.CardSetDescription}
                </p>

                {/* Properties */}
                <div className="flex flex-col md:flex-row mt-6 mb-8">

                    {/* 4 Icons */}
                    <div className="flex flex-wrap gap-8">
                        {/* Mission */}
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                            </svg>
                            <div className="ml-2">
                                <p className="-text-line ml-1 after:bg-slate-700 dark:after:bg-slate-200">
                                    Mission
                                </p>
                                <p className="ml-1 mt-1 text-sm">
                                    {headerData.Mission}
                                </p>
                            </div>
                        </div>

                        {/* Quiz mode */}
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
                            </svg>
                            <div className="ml-2">
                                <p className="-text-line ml-1 after:bg-slate-700 dark:after:bg-slate-200">
                                    Quiz Mode
                                </p>
                                <p className="ml-1 mt-1 text-sm">
                                    {headerData.QuestionMode}
                                </p>
                            </div>
                        </div>

                        {/* Question Pool */}
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                            </svg>
                            <div className="ml-2">
                                <p className="-text-line ml-1 after:bg-slate-700 dark:after:bg-slate-200">
                                    Question Pool
                                </p>
                                <p className="ml-1 mt-1 text-sm">
                                    {headerData.QuestionPoolTotal} Questions
                                </p>
                            </div>
                        </div>

                        {/* Topics */}
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            <div className="ml-2">
                                <p className="-text-line ml-1 after:bg-slate-700 dark:after:bg-slate-200">
                                    Topics
                                </p>
                                <p className="ml-1 mt-1 text-sm">
                                    {topicShow}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Settings */}
                <div className="flex flex-col mb-8">
                    <h2 className="mb-6">Settings</h2>
                    
                    <div className="flex flex-wrap gap-6">
                        {/* Shuffle */}
                        <div className="px-2 py-2 mr-2 flex flex-row justify-center items-center group rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>
                            
                            <p className="font-bold ml-1 mr-4 after:bg-slate-700 dark:after:bg-slate-200">
                                Shuffle Questions
                            </p>

                            <input type="toggle" />
                        </div>

                        {/* Question Number */}
                        <div className="px-2 py-2 mr-2 flex flex-row justify-center items-center group rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                            </svg>

                            
                            <p className="font-bold ml-1 mr-2 after:bg-slate-700 dark:after:bg-slate-200">
                                Questions Number
                            </p>

                            <p className="-text-line mr-2 after:bg-slate-700 dark:after:bg-slate-200">
                                20
                            </p>

                            <input type="range" min={0} max={headerData.QuestionPoolTotal} />

                            <p className="ml-2">
                                {headerData.QuestionPoolTotal}
                            </p>
                        </div>
                    </div>


                </div>

                {/* Action */}
                <div className="flex flex-row">

                    <div className="flex flex-col items-center content-center text-center">
                        <Link href={"./"} className="text-xl px-4 py-2 mr-2 group rounded-xl border border-gray-300 dark:border-neutral-700 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-600">
                            <span className="mr-2">←</span>
                            <span>Back</span>
                        </Link>
                    </div>
                    
                    <div className="flex flex-col items-center content-center text-center">
                        <button className="text-xl px-4 py-2 mr-2 group rounded-xl border border-gray-300 dark:border-neutral-700 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-600"
                            // onClick={}
                            >
                            <span>Start</span>
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <Footer />
            </div>
        </div>
    );
}