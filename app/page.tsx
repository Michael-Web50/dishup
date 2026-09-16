export default function Home() {
  const dishes = [
    {
      name: "Truffle Pizza",
      description: "Crispy, cheesy, unforgettable",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Garden Noodles",
      description: "Bright, fresh, and full of flavour",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Weekend Brunch",
      description: "The table everyone wants",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#1f1a17]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-tight">
          Dish<span className="text-orange-500">Up</span>
        </div>

        <button className="rounded-full bg-[#1f1a17] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500">
          Sign in
        </button>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-12 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Discover your next meal
          </p>

          <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Food worth going
            <span className="text-orange-500"> out of your way </span>
            for.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
            DishUp helps food lovers discover great restaurants, hidden gems,
            and dishes people cannot stop talking about.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600">
              Explore dishes
            </button>

            <button className="rounded-full border border-stone-300 px-7 py-3.5 font-bold transition hover:border-orange-500 hover:text-orange-500">
              How it works
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fffaf5] bg-yellow-300">
                😋
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fffaf5] bg-pink-300">
                🍜
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fffaf5] bg-green-300">
                🍕
              </div>
            </div>
            <p>Made for people who love good food.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-200 blur-3xl opacity-60" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#1f1a17] p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between text-white">
              <p className="font-bold">Trending now</p>
              <span className="text-sm text-orange-400">See all →</span>
            </div>

            <div className="rounded-3xl bg-[#fffaf5] p-5">
              <div
                className="h-56 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="mt-5 flex items-start justify-between">
                <div>
                  <p className="text-xl font-black">Spicy Ramen Bowl</p>
                  <p className="mt-1 text-sm text-stone-500">
                    Koko Ramen · Popular pick
                  </p>
                </div>

                <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600">
                  4.9 ★
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-stone-600">
                “Rich broth, perfect noodles, and just the right amount of
                heat.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-orange-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Fresh finds
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Trending dishes
              </h2>
            </div>

            <button className="font-bold text-orange-500 transition hover:text-orange-600">
              View all dishes →
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <article
                key={dish.name}
                className="overflow-hidden rounded-3xl border border-stone-100 bg-[#fffaf5] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{dish.name}</h3>
                      <p className="mt-1 text-sm text-stone-500">
                        {dish.description}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-sm font-bold text-orange-500">
                      {dish.rating} ★
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1a17] px-6 py-20 text-white">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
        Simple by design
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
        Find your next favourite dish in three steps.
      </h2>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl bg-white/10 p-7">
        <p className="text-4xl">🔎</p>
        <p className="mt-6 text-xl font-black">1. Explore</p>
        <p className="mt-2 leading-7 text-stone-300">
          Browse dishes people genuinely love, from familiar favourites to
          something completely new.
        </p>
      </div>

      <div className="rounded-3xl bg-white/10 p-7">
        <p className="text-4xl">📍</p>
        <p className="mt-6 text-xl font-black">2. Find it</p>
        <p className="mt-2 leading-7 text-stone-300">
          See where a dish is served and save the places you want to try.
        </p>
      </div>

      <div className="rounded-3xl bg-white/10 p-7">
        <p className="text-4xl">😋</p>
        <p className="mt-6 text-xl font-black">3. Enjoy it</p>
        <p className="mt-2 leading-7 text-stone-300">
          Go hungry, discover something memorable, and share it with your
          food-loving friends.
        </p>
      </div>
    </div>

    <div className="mt-14 rounded-3xl bg-orange-500 p-8 sm:flex sm:items-center sm:justify-between">
      <div>
        <h3 className="text-2xl font-black">Ready to find something delicious?</h3>
        <p className="mt-2 text-orange-50">
          Your next favourite meal is waiting.
        </p>
      </div>

      <button className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-[#1f1a17] transition hover:bg-orange-50 sm:mt-0">
        Start exploring
      </button>
    </div>
  </div>
</section>
    </main>
  );
}