// Libs

// Local
import LinkWrapper from "@/components/LinkWrapper";

export default function DesktopNav() {
  return (
    <div className={`bg-white w-full`}>
      <div className="w-full px-5">
        <ul className="flex items-center px-10 py-5 text-xl font-normal font-happyMonkey w-full">
          <li className="flex-1">
            <LinkWrapper
              href="/"
            >
              <picture className="shrink-0">
                <img
                  src="/hbf-logo.svg"
                  alt="Havana Brown Fanciers Logo"
                  className="w-10"
                />
              </picture>
            </LinkWrapper>
          </li>
          <ul className="flex items-center gap-10 flex-grow-0">
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
          <div className="flex-1"></div>
        </ul>
      </div>
    </div>
  )
}