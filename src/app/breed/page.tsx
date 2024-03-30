/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// Libs
import Head from "next/head";
import { Metadata } from "next";

// Local
import DesktopNav from "@/components/DesktopNav";

export const metadata: Metadata = {
  title: "HBF - Breed",
  description: "About the breed",
};

export default function BreedPage() {
  return (
    <main className="bg-gray-400 min-h-screen flex flex-col items-center">
      <Head>
        <title>{"Havana Brown Fanciers - Breed"}</title>
        <meta name="description" content={"About the breed"} />
      </Head>
      <DesktopNav />
      <div className="p-12 space-y-8 text-justify max-w-4xl flex flex-col items-center">
        <h1 className="font-limelight font-bold text-6xl text-center">
          About the Breed
        </h1>

        <p>
          The phrase “Chocolate Delights” is often used by Havana Brown enthusiasts to describe this charming chocolate brown cat with the mesmerizing green eyes. They are alert, intelligent, affectionate and occasionally exhibit a mischievious personality. A breed for the true cat connoisseur, many say that once you have been “owned” by a Havana Brown, no other breed will do.
        </p>

        <div>
          <img src="/hb-profile1.jpg" alt="Havana Brown Breed - 1" className="float-left mr-4" />
          <p>
            Sharing your home with a Havana Brown is both a privilege and a pleasure. Human companionship and interaction is a necessity for this breed. They get along well with other cats, dogs and children. Individual personalities vary, of course. Some may be somewhat reserved; however, most are outgoing, playful and talkative in a charming, coquettish way. Not only will these delightful brown characters insist on being a part of every activity in the household, they also insist on having the very last word on everything.
          </p>
          <p className="mt-4">
            The breed is considered moderately active when compared to some of the other shorthair breeds. They love nothing more than a sprint around the house or a game of tag if there are other cats to join in. Second to playing, their next favorite pastime is napping. Their choice of a sleeping partner may very well be their favorite human companion.
          </p>
        </div>

        <p>
          Being naturally inquisitive, the Havana Brown reaches out with a paw to touch and feel when investigating curiosities in its environment. They are truly sensitive by nature and frequently gently touch their human companions as if they are extending a paw of friendship.
        </p>

        <div>
          <img src="/hb-profile3.jpg" alt="Havana Brown Breed - 3" className="float-right ml-4" />
          <p>
            While a minimum of grooming and maintenance is required for this shorthaired breed, it is important that a regular grooming and bathing routine be established at an early age. Most Havana Browns love attention and will happily submit to a full body rub down with a soft rubber brush. Front and back claws should be clipped and the insides of the ears gently cleaned. Finish with a quick buffing using your hands, a soft chamois cloth or silk scarf. They experience a minimal amount of hair loss or shedding, so bathing on a regular basis is not necessary if the cat is not being shown.
          </p>
        </div>

        <p>
          The ideal Havana Brown is best described as a cat of medium size and structure, firm and muscular, exhibiting a sense of power yet also elegance and gracefulness. The two most distinctive features of the breed are its color and head shape. Its distinctive muzzle shape, coat color, large forward-tilted ears and striking green eyes set it apart from other breeds.
        </p>

        <p>
          The color of the Havana is a rich, warm, even brown - tending toward red-brown rather than black-brown. The coat is short to medium in length, smooth, lustrous and close lying. The feel of the coat has been likened to that of a luxurious mink coat.
        </p>
        <p>
          Picking up a Havana for the first time can be a surprising experience, as this lithe-looking cat actually weighs more than it appears. Males are proportionally larger than females. Overall balance and proportion are stressed more than size.
        </p>

        <div>
          <img src="/hb-profile2.jpg" alt="Havana Brown Breed - 2" className="float-left mr-4" />
          <p>
            The head is slightly longer than it is wide, narrowing to a rounded muzzle with a definite break on either side of very prominent whisker pads. When viewed in profile, there is a distinct stop at the eyes. The one-of-a-kind muzzle is often compared to a light bulb or a corncob stuck on the end of the face.
          </p>
          <p className="mt-4">
            The striking oval green eyes of the Havana are unforgettable. Any even shade of green is acceptable; the greener, the better.
          </p>
          <p className="mt-4">
            Ears are large, round-tipped, wide-set and pricked slightly forward, giving the cat an alert appearance. There is little hair inside or outside of the ears, with an obvious sparseness of hair in front of the ears. Nose leather is brown with a rosy tone; paw pads are rosy-toned. Whiskers must be brown to complement the coat color. Sparse hair on the chin at the lower lip is a unique feature of this breed.
          </p>
        </div>

        <p>
          This lovely brown cat originated in England as the result of planned breedings between Siamese and domestic black cats by a number of devoted English cat fanciers whose general goal was to produce a self-brown cat. The breed was first imported to North America in the 1950s. These early imports became part of the foundation stock for the Havana Brown of today. In England, the Havana follows the type of the Siamese, while in North America, breeders have maintained the look of the early imports. In an effort to increase the shrinking gene pool, breeders received approval in 1998/1999 to permit outcrossing to unregistered black or blue domestic shorthairs, certain colors of Oriental Shorthairs, or chocolate point or seal point Siamese. For more information, please contact the Breed Council Secretary for this breed.
        </p>
      </div>
    </main>
  )
}