import { readFileSync } from "node:fs";
import { metadataImage } from "@/lib/metadata";
import { ImageResponse } from "next/og";
import { getBreadcrumbItems } from "fumadocs-core/breadcrumb";
import { source } from "@/app/source";

const monaSansMedium = readFileSync("./app/docs-og/[...slug]/MonaSans-Medium.ttf");
const monaSansNormalWide = readFileSync("./app/docs-og/[...slug]/MonaSans-wdth-110-wght-400.ttf");

export const GET = metadataImage.createAPI((page) => {
  const items = getBreadcrumbItems(page.url, source.pageTree).slice(0, -1);

  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "48px 72px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          fontFamily: "'Mona Sans'",
          fontSize: 36,
          fontWeight: 500,
        }}
      >
        {items.map(({ name }, i) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: img gen
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <span>{name}</span>
            {i < items.length - 1 && (
              <>
                {/* @license ISC https://lucide.dev/license */}
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: img gen */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </>
            )}
          </div>
        ))}
      </div>
      <span
        style={{
          marginTop: 58,
          marginBottom: 16,
          width: "100%",
          flexGrow: 1,
          // Next.js dev server hangs on some (empty?) titles when wordBreak: "break-word"
          overflow: "hidden",
          fontFamily: "'Mona Sans'",
          fontSize: 96,
          fontWeight: 400,
        }}
      >
        {page.data.title}
      </span>

      {/* biome-ignore lint/a11y/noSvgWithoutTitle: img gen */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={48} viewBox="0 0 2307 459">
        <path
          fill="#FF87A6"
          d="M568.349 198.139c-.748 2.777-70.164 130.236-71.926 133.28-1.389 2.402-7.583 12.174-9.238 13.456-1.709 1.281-7.102 4.165-9.878 4.378-2.777.16-82.926-.641-82.926-.641s-2.99 5.5-2.617 6.034c.374.534 1.282 1.495 1.282 1.495s68.882.161 72.033.908c3.15.748 8.757.374 11.907 4.859 3.151 4.432 4.646 3.311 5.927 14.151 1.335 10.786 1.015 22.266.374 29.368-.694 8.01-2.349 13.67-3.738 17.621-2.883 8.063-6.835 14.044-11.48 17.354-4.699 3.364-22.908 8.223-31.077 10.413-8.223 2.242-28.675 7.475-46.189 7.475s-26.378-.747-41.276-2.242c-14.898-1.496-22.48-1.976-28.3-3.738-6.355-1.923-17.728-5.126-23.922-3.631-6.141 1.495-8.811 3.631-15.539 5.5-6.674 1.869-19.703 2.456-25.684 2.242-4.218-.16-19.223.161-31.931-2.937-11.961-2.883-21.679-9.237-23.869-10.465-8.917-5.233-15.325-10.146-22.587-17.034-4.378-4.165-5.393-3.898-8.97-7.102-1.335-1.228-3.365 4.859-7.743 11.107-5.393 7.742-10.786 11.747-15.111 15.271-10.573 8.651-23.228 12.816-32.199 13.029-8.917.16-22.6397-1.709-30.0627-5.286-5.873-2.777-18.9019-12.655-25.4169-18.849-9.985-9.452-26.6981-31.024-30.8631-38.66-13.723-25.47-21.412-43.679-23.281-56.334-5.5-36.363-4.325-56.013-2.67-71.819 2.243-21.572 10.8391-48.965 14.3101-58.79 4.699-13.136 16.073-29.582 19.277-34.869 3.2039-5.339 8.169-11.8 10.305-14.737 1.068-1.495 6.8889-7.903 8.7569-10.146.588-.694 3.6311-3.898 3.6311-3.898s5.5539-5.339 6.141-5.82c1.4949-1.388 5.7669-5.019 8.1159-6.408 6.462-3.791 9.8261.534 10.4131 2.564.32 1.334.8009 2.135.2139 6.621-.855 6.461-1.442 8.917-1.709 12.762-.107 1.335-.3739 3.844-.4809 5.927-.107 2.082 0 9.932 0 11.373.054 2.083.694 8.063 1.015 10.199.32 2.136.801 6.782 1.228 9.291.481 2.83 1.1209 7.476 1.4949 9.185.214.907 1.2281 5.713 1.3351 6.247.32 1.121.8539 2.884 2.0289 6.568.427 1.335 1.3351 3.791 1.869 4.806 1.015 2.082 3.204 6.247 3.898 6.247 1.121 0 2.0821-5.5 2.296-7.636.1071-.907.1601-2.082 0-3.577-.374-3.364-1.175-4.806-1.602-6.942-.267-1.388-.9609-2.723-1.0139-5.019 0-1.282.267-2.279.8009-2.99.533-.695 2.563-.588 3.364-.267 1.014.427 1.815.587 3.7367 1.975 10.039 7.262 12.655 12.015 12.655 12.015 5.02 7.208 8.17 12.655 11.641 21.091 1.228 2.991 3.951 10.199 7.956 24.617.107.48 2.296 9.13 3.311 12.975.427 1.602 1.442 8.597 1.655 9.932.214 1.335.694 5.927.801 6.621.267 1.816 1.709 16.18 1.709 16.18s8.49-56.495 18.529-87.198c10.038-30.703 38.499-82.605 42.397-90.989 3.951-8.383 17.247-29.7946 22.053-37.4846 6.781-10.786 15.378-22.32 19.81-30.596 6.515-12.121 10.092-13.99 10.626-21.252.588-7.209 1.656-18.956 5.02-23.441 3.364-4.432 9.344-10.039 15.912-11.481 5.874-1.281 12.709-1.709 18.689 1.068 5.981 2.777 7.796 4.913 10.412 8.116 2.617 3.204 2.991 7.156 5.981 10.146 2.99 2.99 17.888 8.917 28.3 13.776l10.413 4.806s19.276 8.704 25.791 13.616c7.903 5.981 21.092 18.049 28.14 25.471 7.102 7.422 27.927 31.2366 36.096 49.4986 8.224 18.208 10.306 21.626 13.777 33.48 4.539 15.378 5.82 23.388 3.738 30.917 0 .213-.16.48-.267.854-.588 1.923-2.937 9.238-10.092 13.456-1.175.695-3.952 2.296-7.85 2.67-2.509.214-4.378-.107-6.407-.534-5.287-1.068-9.131-3.043-10.253-3.844-3.898-2.884-7.689-6.889-10.038-8.757-.748-.374-13.029-8.918-18.422-11.161-5.393-2.242-12.816-6.728-18.422-8.383-5.554-1.655-14.311-5.233-16.714-5.233-2.402 0-7.101-2.189-11.16-2.029-4.111.214-6.888.374-8.757 3.151-1.869 2.83-3.738 3.898-2.83 8.009.961 4.112 1.495 10.039 3.952 15.646 3.631 8.329 5.126 12.601 7.956 17.674 9.131 16.286 13.99 18.155 23.174 32.732 9.451 15.005 13.883 28.247 16.286 35.563 1.976 6.087 4.966 14.898 5.767 24.563l.961 11.533s-.961.908 1.282 2.029l2.243 1.122 33.319 4.111 37.058 2.617 3.578-1.922L544 191.999s.16-.748 1.495-.908c1.281-.214.374-.214 1.281-.214.908 0 21.413.374 22.534 1.335 1.121.908-.374 3.151-1.121 5.927h.16ZM773.425 299.15V159.182h28.224V299.15h-28.224Zm123.75 1.728c-16.128 0-30.016-2.944-41.664-8.832-11.648-6.016-20.608-14.4-26.88-25.152-6.272-10.752-9.408-23.36-9.408-37.824 0-14.336 3.136-26.88 9.408-37.632 6.272-10.752 15.232-19.072 26.88-24.96 11.648-6.016 25.536-9.024 41.664-9.024 13.568 0 25.472 2.048 35.712 6.144 10.368 4.096 18.688 9.856 24.96 17.28 6.272 7.424 10.112 16.064 11.52 25.92h-28.416c-1.92-8.064-6.912-14.528-14.976-19.392-7.936-4.864-17.536-7.296-28.8-7.296-15.104 0-27.136 4.288-36.096 12.864-8.832 8.448-13.248 20.48-13.248 36.096 0 15.744 4.416 27.904 13.248 36.48 8.96 8.448 20.992 12.672 36.096 12.672 11.52 0 21.248-2.432 29.184-7.296 8.064-4.992 12.992-11.584 14.784-19.776h28.224c-1.28 10.112-5.184 18.88-11.712 26.304-6.528 7.424-14.976 13.184-25.344 17.28-10.368 4.096-22.08 6.144-35.136 6.144Zm148.215 0c-15.23 0-27.71-1.92-37.44-5.76-9.731-3.968-16.963-9.408-21.699-16.32-4.736-6.912-7.232-14.912-7.488-24h29.567c.26 8.448 3.59 14.976 9.99 19.584 6.52 4.48 15.87 6.72 28.03 6.72 11.26 0 19.71-1.792 25.34-5.376 5.63-3.584 8.45-8.576 8.45-14.976 0-5.376-1.41-9.408-4.22-12.096-2.82-2.688-7.11-4.608-12.87-5.76-5.63-1.28-12.73-2.432-21.31-3.456-12.54-1.536-23.23-3.648-32.06-6.336-8.84-2.816-15.621-6.848-20.357-12.096-4.608-5.376-6.912-12.672-6.912-21.888 0-13.312 5.504-23.552 16.512-30.72 11.137-7.296 26.117-10.944 44.927-10.944 18.18 0 32.51 3.712 43.01 11.136 10.62 7.296 16.38 17.536 17.28 30.72h-28.61c-.64-7.68-3.9-13.312-9.79-16.896-5.76-3.584-13.44-5.376-23.04-5.376-9.98 0-17.73 1.728-23.23 5.184-5.38 3.456-8.07 8.064-8.07 13.824 0 4.736 1.28 8.32 3.84 10.752 2.56 2.432 6.6 4.288 12.1 5.568 5.63 1.152 12.93 2.24 21.89 3.264 12.8 1.536 23.68 3.712 32.64 6.528 8.96 2.688 15.74 6.848 20.35 12.48 4.74 5.632 7.1 13.632 7.1 24 0 13.184-5.5 23.552-16.51 31.104-10.88 7.424-26.69 11.136-47.42 11.136Zm140.25 0c-15.23 0-27.71-1.92-37.44-5.76-9.73-3.968-16.96-9.408-21.7-16.32-4.73-6.912-7.23-14.912-7.49-24h29.57c.26 8.448 3.59 14.976 9.99 19.584 6.52 4.48 15.87 6.72 28.03 6.72 11.26 0 19.71-1.792 25.34-5.376 5.63-3.584 8.45-8.576 8.45-14.976 0-5.376-1.41-9.408-4.22-12.096-2.82-2.688-7.11-4.608-12.87-5.76-5.63-1.28-12.73-2.432-21.31-3.456-12.54-1.536-23.23-3.648-32.06-6.336-8.84-2.816-15.62-6.848-20.36-12.096-4.6-5.376-6.91-12.672-6.91-21.888 0-13.312 5.51-23.552 16.51-30.72 11.14-7.296 26.12-10.944 44.93-10.944 18.18 0 32.51 3.712 43.01 11.136 10.62 7.296 16.38 17.536 17.28 30.72h-28.61c-.64-7.68-3.9-13.312-9.79-16.896-5.76-3.584-13.44-5.376-23.04-5.376-9.98 0-17.73 1.728-23.23 5.184-5.38 3.456-8.07 8.064-8.07 13.824 0 4.736 1.28 8.32 3.84 10.752 2.56 2.432 6.6 4.288 12.1 5.568 5.63 1.152 12.93 2.24 21.89 3.264 12.8 1.536 23.68 3.712 32.64 6.528 8.96 2.688 15.74 6.848 20.35 12.48 4.74 5.632 7.1 13.632 7.1 24 0 13.184-5.5 23.552-16.51 31.104-10.88 7.424-26.69 11.136-47.42 11.136Zm152.54 0c-16.13 0-30.02-2.944-41.67-8.832-11.65-6.016-20.61-14.4-26.88-25.152s-9.41-23.36-9.41-37.824c0-14.336 3.14-26.88 9.41-37.632 6.27-10.752 15.23-19.072 26.88-24.96 11.65-6.016 25.54-9.024 41.67-9.024 13.56 0 25.47 2.048 35.71 6.144 10.37 4.096 18.69 9.856 24.96 17.28 6.27 7.424 10.11 16.064 11.52 25.92h-28.42c-1.92-8.064-6.91-14.528-14.97-19.392-7.94-4.864-17.54-7.296-28.8-7.296-15.11 0-27.14 4.288-36.1 12.864-8.83 8.448-13.25 20.48-13.25 36.096 0 15.744 4.42 27.904 13.25 36.48 8.96 8.448 20.99 12.672 36.1 12.672 11.52 0 21.24-2.432 29.18-7.296 8.06-4.992 12.99-11.584 14.78-19.776h28.23c-1.28 10.112-5.19 18.88-11.71 26.304-6.53 7.424-14.98 13.184-25.35 17.28-10.37 4.096-22.08 6.144-35.13 6.144Zm131.25-1.728V159.182h70.65c18.43 0 32 4.032 40.71 12.096 8.7 8.064 13.05 19.008 13.05 32.832 0 15.232-4.86 26.56-14.59 33.984-9.73 7.424-22.78 11.136-39.17 11.136l-42.43-.192v50.112h-28.22Zm67.77-117.696h-39.55v47.232l39.55.192c9.6 0 16.71-2.112 21.31-6.336 4.61-4.352 6.92-10.176 6.92-17.472 0-8.064-2.56-14.016-7.68-17.856-5-3.84-11.84-5.76-20.55-5.76Zm71.31 117.696V197.006h24.58l1.15 17.088h1.15c2.05-5.76 5.57-10.304 10.56-13.632 5.12-3.328 11.14-4.992 18.05-4.992 3.59 0 6.53.256 8.83.768v24.576c-3.07-.64-6.2-.96-9.4-.96-8.32 0-14.98 2.176-19.97 6.528-4.87 4.352-7.43 11.264-7.68 20.736v52.032h-27.27Zm129.19 1.92c-12.03 0-22.59-2.112-31.68-6.336-9.08-4.224-16.19-10.304-21.31-18.24-4.99-7.936-7.49-17.408-7.49-28.416s2.5-20.416 7.49-28.224c5.12-7.936 12.16-14.016 21.12-18.24 9.09-4.352 19.71-6.528 31.87-6.528s22.79 2.112 31.88 6.336c9.08 4.224 16.12 10.304 21.12 18.24 4.99 7.936 7.48 17.408 7.48 28.416s-2.49 20.48-7.48 28.416c-5 7.808-12.04 13.888-21.12 18.24-8.96 4.224-19.59 6.336-31.88 6.336Zm0-21.12c10.37 0 18.5-2.88 24.39-8.64 5.89-5.76 8.83-13.504 8.83-23.232s-2.94-17.472-8.83-23.232c-5.76-5.76-13.89-8.64-24.39-8.64-10.36 0-18.49 2.88-24.38 8.64-5.76 5.76-8.64 13.504-8.64 23.232s2.88 17.472 8.64 23.232c5.89 5.76 14.02 8.64 24.38 8.64Zm76.88-97.344v-23.424h27.27v23.424h-27.27Zm-21.12 148.608V310.67h7.87c4.61 0 7.94-1.088 9.99-3.264 2.17-2.048 3.26-5.824 3.26-11.328v-99.072h27.27v102.528c0 11.264-2.82 19.328-8.45 24.192-5.63 4.992-13.51 7.488-23.62 7.488h-16.32Zm124.61-30.336c-12.28 0-22.97-2.112-32.06-6.336-8.96-4.224-15.94-10.24-20.93-18.048-4.86-7.808-7.29-17.152-7.29-28.032 0-11.008 2.43-20.48 7.29-28.416 4.99-8.064 11.97-14.208 20.93-18.432 8.96-4.352 19.52-6.528 31.68-6.528 12.54 0 23.3 2.368 32.26 7.104 8.96 4.608 15.61 11.264 19.96 19.968 4.48 8.704 6.34 19.2 5.57 31.488h-90.24c.13 8.96 3.2 15.936 9.22 20.928 6.01 4.992 14.14 7.488 24.38 7.488 7.55 0 14.08-1.344 19.59-4.032 5.63-2.816 9.21-6.528 10.75-11.136h25.92c-1.03 6.912-4.16 12.928-9.41 18.048-5.12 4.992-11.84 8.896-20.16 11.712-8.19 2.816-17.34 4.224-27.46 4.224Zm-.57-86.784c-9.22-.128-16.71 1.984-22.47 6.336-5.63 4.224-9.02 10.048-10.17 17.472h63.36c-.51-7.424-3.46-13.248-8.83-17.472-5.38-4.352-12.68-6.464-21.89-6.336Zm128.42 86.784c-12.16 0-22.66-2.176-31.49-6.528-8.83-4.352-15.62-10.496-20.35-18.432-4.74-7.936-7.11-17.28-7.11-28.032 0-10.88 2.5-20.224 7.49-28.032 5.12-7.936 12.16-14.016 21.12-18.24 9.09-4.352 19.65-6.528 31.68-6.528 10.75 0 20.23 1.664 28.42 4.992 8.19 3.2 14.65 7.68 19.39 13.44s7.49 12.48 8.26 20.16h-27.08c-1.53-5.632-4.92-9.92-10.17-12.864-5.25-3.072-11.59-4.608-19.01-4.608-10.24 0-18.3 2.944-24.19 8.832-5.76 5.76-8.64 13.376-8.64 22.848 0 10.24 2.88 18.112 8.64 23.616 5.89 5.504 13.89 8.256 24 8.256 7.29 0 13.69-1.6 19.2-4.8 5.5-3.328 9.02-7.808 10.56-13.44h27.26c-.77 8.064-3.84 15.04-9.21 20.928-5.38 5.888-12.36 10.432-20.93 13.632-8.45 3.2-17.73 4.8-27.84 4.8Zm112.7-1.728c-8.06 0-14.46-1.92-19.2-5.76-4.73-3.968-7.1-9.984-7.1-18.048v-57.6h-19.97v-20.736h19.97v-27.264l26.88-5.184v32.448h25.92v20.736h-25.92v49.152c0 3.456.83 5.824 2.5 7.104 1.79 1.152 4.35 1.728 7.68 1.728h15.74v23.424h-26.5Zm89.47 1.92c-16.9 0-29.96-3.072-39.17-9.216-9.22-6.144-14.08-14.464-14.59-24.96h26.68c.39 5.504 2.95 9.792 7.68 12.864 4.74 2.944 11.46 4.416 20.16 4.416 7.81 0 13.96-1.024 18.44-3.072 4.48-2.176 6.72-5.568 6.72-10.176 0-3.328-.84-5.888-2.5-7.68-1.66-1.792-4.54-3.136-8.64-4.032-3.97-.896-9.41-1.664-16.32-2.304-11.65-1.152-21.06-2.752-28.22-4.8-7.04-2.176-12.23-5.248-15.56-9.216-3.32-3.968-4.99-9.28-4.99-15.936 0-9.728 4.48-17.472 13.44-23.232 8.96-5.76 21.31-8.64 37.06-8.64 14.72 0 26.37 2.816 34.94 8.448 8.71 5.632 13.57 13.632 14.59 24h-25.72c-.64-5.376-3.14-9.344-7.49-11.904-4.35-2.56-9.86-3.84-16.51-3.84-6.92 0-12.61 1.088-17.09 3.264-4.35 2.048-6.53 5.312-6.53 9.792 0 4.48 2.11 7.552 6.34 9.216 4.35 1.536 11.45 2.752 21.31 3.648 11.77 1.152 21.25 2.752 28.41 4.8 7.17 2.048 12.36 5.184 15.56 9.408 3.2 4.096 4.8 9.856 4.8 17.28 0 9.6-4.36 17.344-13.06 23.232-8.58 5.76-21.82 8.64-39.74 8.64Z"
        />
      </svg>

      {/* {page.data.description} */}

      {/* Dashed Lines */}
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: img gen */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 64,
        }}
        width="1"
        height="630"
        viewBox="0 0 1 630"
        fill="none"
      >
        <path d="M1 0L1 630" stroke="#999999" stroke-dasharray="10 10" />
      </svg>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: img gen */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          right: 64,
        }}
        width="1"
        height="630"
        viewBox="0 0 1 630"
        fill="none"
      >
        <path d="M1 0L1 630" stroke="#999999" stroke-dasharray="10 10" />
      </svg>

      {/* Bottom Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          backgroundColor: "#FF87A6",
        }}
      />
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Mona Sans",
          data: monaSansMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Mona Sans 110",
          data: monaSansNormalWide,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
