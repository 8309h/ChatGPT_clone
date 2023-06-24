import { Link } from "react-router-dom";

export default function Example() {


  return (
    <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <Link to="/" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center w-70%">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              It should be a good experience for you
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
           {` Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It involves the development of intelligent algorithms and models that enable computers to perform tasks that would typically require human intelligence, such as visual perception, speech recognition, decision-making, problem-solving, and natural language processing.

            AI has the potential to revolutionize various industries and aspects of our daily lives. It can be found in applications ranging from virtual assistants like Siri and Alexa to self-driving cars, personalized recommendations on streaming platforms, fraud detection systems in banking, medical diagnosis and treatment planning, and even in advanced robotics.
            
            Machine Learning (ML) is a subset of AI that focuses on enabling machines to learn and improve from data without explicit programming. ML algorithms analyze large datasets to identify patterns and make predictions or decisions based on that data. Deep Learning, a subfield of ML, uses artificial neural networks to simulate the human brain's structure and function, enabling the processing of complex data such as images, speech, and text.
            
            AI has the potential to enhance efficiency, productivity, and innovation across industries by automating repetitive tasks, enabling faster and more accurate data analysis, and providing valuable insights for decision-making. However, it also raises ethical considerations and challenges related to privacy, security, bias, and job displacement.
            
            As AI continues to evolve, researchers and developers strive to create systems that are not only intelligent but also ethical, transparent, and accountable. The responsible development and deployment of AI technologies are crucial to ensure that they benefit society as a whole and align with human values and principles.
            
            Overall, AI holds immense promise for transforming various sectors and improving our lives, but it requires careful consideration, ethical frameworks, and ongoing collaboration between humans and machines to harness its full potential for the betterment of society.`}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link to="/chat" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
