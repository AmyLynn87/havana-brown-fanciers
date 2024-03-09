// Libs

// Local
import LinkWrapper from "@/components/LinkWrapper";

export default function DesktopNav() {
  return (
    <div className={`bg-white w-full`}>
      <div className="mx-auto w-full max-w-screen-lg overflow-hidden px-5">
        <ul className="flex items-center justify-center px-10 py-5 gap-10 text-xl font-normal font-happyMonkey">
          <li>
            <LinkWrapper
              href="/breed"
            >
              Breed
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/about"
            >
              About the Club
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/history"
            >
              History
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/breeders"
            >
              Breeders
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/show"
            >
              Show
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/photo"
            >
              Photo
            </LinkWrapper>
          </li>
          <li>
            <LinkWrapper
              href="/news"
            >
              News
            </LinkWrapper>
          </li>
        </ul>
      </div>
    </div>
  )
}