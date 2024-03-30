/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// Libs
import Head from "next/head";
import { Metadata } from "next";

// Local
import DesktopNav from "@/components/DesktopNav";

export const metadata: Metadata = {
  title: "HBF - History",
  description: "History about Havana Brown Cats",
};

export default function HistoryPage() {
  return (
    <main className="bg-gray-400 min-h-screen flex flex-col items-center">
      <Head>
        <title>{"Havana Brown Fanciers - History"}</title>
        <meta name="description" content={"History about Havana Brown Cats"} />
      </Head>
      <DesktopNav />
      <div className="p-12 space-y-8 text-justify max-w-4xl flex flex-col items-center">
        <h1 className="font-limelight font-bold text-6xl text-center">
          History
        </h1>
        <div className="text-center italic">
          The following written information was taken from the Breed Article written by Norma Placchi entitled <p className="font-bold">"The Cat in a Not So Plain Brown Wrapper" </p> and appearing in the Cat Fanciers' Almanac (May 1991).</div>

        <p>
          It is well documented that self-brown cats were known and shown in Europe in the 1890’s. One of the recorded names given these brown cats was “Swiss Mountain Cat.” Unfortunately, they disappeared from the organized cat fancy and, as far as records show, from all cat lovers’ lives until the Post World War II period when they resurfaced. One possible reason for their demise was the edict given by the Siamese Cat Club of Britain near the end of 1920 — “The club much regrets it is unable to encourage the breeding of any but blue-eyed Siamese.” Whereupon all solid-brown cats with non-blue eyes were excluded from Siamese classes at shows and that was the end of brown cats as the early breeders knew them. In the early 1950’s, a group of English fanciers who previously had worked independently, began to band together to systematically isolate the genetic design of a self brown cat. The core of this pioneer group consisted of Mrs. Armitage Hargreaves of Laurentide Cattery, Mrs. Munroe-Smith of Elmtower Cattery, the Baroness Von Ullmann of Roofspringer Cattery, Mrs. Elsie Fisher of Praha Cattery, and Mrs. Judd of Crossways Cattery. These dedicated English breeders studied available genetic information and kept detailed records of their experiments. It is believed that the first chestnut brown kitten, a male, Praha Gypka, produced by this group of ladies resulted from mating a black shorthair and a chocolate point Siamese. Other breedings supposedly took place using Russian Blue and Siamese.
        </p>

        <p>
          However, it should be noted that the year before this designed breeding produced a Havana Brown, one was accidentally bred by Mrs. Munroe-Smith, who mated a black shorthair, Elmtower Susannah, and a seal point Siamese, Elmtower Tombee.
        </p>

        <p>
          A male self-chocolate was produced — Elmtower Bronze Idol, the first Havana Brown to be registered in England, and the fore-runner of our present day breed. Susannah’s sire was a black domestic named Pickles; her dam was a seal point Siamese, Tsiu Chow. Tombee’s dam was also Tsiu Chow and her sire was Pickles.
        </p>

        <p>
          When Annette Bittaker and I did our extensive research for the 1982 CFA YEARBOOK article on the Havana Brown, we found that the early developers of the breed used not only Siamese but also a small amount of Russian Blues early on to derive a self-brown cat; but careful study of pedigrees and of the written accounts of the founders’ original work shows that the cats producing the early parentage of the present breed contained almost no Russian Blue and a small amount of chocolate point Siamese. The most successful and most often used combination was that of a black shorthair and a seal point Siamese carrying the chocolate gene.
        </p>

        <p>
          Our study found that Laurentide Areeto Pearl, a black shorthair female resulting from a breeding between a chocolate point Siamese male, Briary Saccharin, and a black shorthair female, Laurentide Ephone Jet, had a Russian Blue in her background. Apparently, Ephone Jet was the product of a Russian Blue and seal point Siamese cross. Laurentide Areeto Pearl produced Havana Brown cats when bred back to her sire, a chocolate point Siamese. She was also bred to Havana Browns developed by other breeders which did not carry any Russian Blue and these crosses also produced brown kittens.
        </p>

        <p>
          It has been documented that several breeders in the United States also introduced Russian Blues into their lines; however, for whatever the reasons, these particular lines were not continued. To the best of our knowledge, most of the Havana Browns of today do not have any Russian Blues in their backgrounds. Mrs. Elsie Quinn, Quinn Cattery, El Monte, California, imported the very first Havana Brown from England in the mid 1950’s — a female named Roofspringer Mahogany Quinn. She was bred to Laurentide Brown Pilgrim of Norwood, also an import, and produced the very first Havana Brown to achieve Grand Championship status in CFA in 1959 — Quinn’s Brown Satin of Sidlo. All of the Havana Browns in this country today can trace their heritage back to this cat.
        </p>

        <p>
          By the time the breed had received recognition in English cat registries, the name had been changed to “Chestnut Brown.” In this country, not only the name Havana Brown has been retained but also the type of the cat. In England, breeding back to Siamese has been continued, therefore the original look of the cat has been lost; a “Chestnut Brown” of today would resemble our chestnut Oriental Shorthair in type. Here in the United States, we can proudly say that the breed has retained its original look — a moderate cat with a distinctive head, an elegant coat and a personality that will melt your heart.
        </p>

        <p>
          There are several theories on how the breed got its name — some historians insist it was named after the rabbit breed of the same color; however, the one most Havana Brown devotees choose to believe is that it got its name “because it was the color of rich Havana tobacco.”
        </p>

        <figure className="w-full flex flex-col items-center">
          <img src="/havanas-in-history-july-1960.gif" alt="Havanas in History, July 1960" className="max-w-xl" />
          <figcaption className="text-center text-xs">This picture, with caption was found in "Our Cats" magazine, July 1960.</figcaption>
        </figure>

        <figure className="w-full flex flex-col items-center">
          <img src="/sidlo-ad-1962.jpeg" alt="Sidlo Ad 1962" className="max-w-xl" />
          <figcaption className="text-center text-xs">This is the Sidlo Cattery CFA Year Book Ad in 1962.</figcaption>
        </figure>

        <p>
          The following article was written by Dallas Sidlo, Sidlo Cattery, and published in the 1964 CFA Yearbook.
          It is placed here with the permission of CFA for the enjoyment of those who are interested in learning more about the History of the Havana Brown Breed.
        </p>

        <figure className="w-full flex flex-col items-center">
          <img src="/dallas-sidlo-article.jpg" alt="Dallas Sidle Article Part 1" className="max-w-xl" />
        </figure>

        <figure className="w-full flex flex-col items-center">
          <img src="/dallas-sidlo-article2.jpg" alt="Dallas Sidle Article Part 2" className="max-w-xl" />
        </figure>

        <figure className="w-full flex flex-col items-center max-w-xl">
          <img src="/cat-world-sept-oct-1975.jpeg" alt="Article on Cat World Sept-Oct 1975" />
          <figcaption className="text-center text-xs ">This article was published in the September - October, 1975 "Cat World" magazine, a magazine for the breeder/exhibitor.</figcaption>
        </figure>

      </div>
    </main >
  )
}