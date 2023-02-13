import { Text, Flex } from "theme-ui";

import { Width } from "../width";
import { Reveal } from "../reveal";
import Photo from "../photo";

const Logotypes = ({ data }) => {
  const { header, logos } = data;

  return (
    <section sx={{ position: "relative" }}>
      <div sx={{ variant: "layout.row", px: "0.5rem" }}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            rowGap: "1rem",
            columnGap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <Text sx={{ m: 0 }}>{header}</Text>
          <Width value={[12, 12, 7]} sx={{ gap: "1.5rem" }}>
            <Reveal
              sx={{
                width: "100%",
                display: "inline-grid",
                gap: ".5rem",
                gridAutoFlow: ["row", "column"],
                gridTemplateColumns: ["auto auto auto auto", "unset"],
                alignItems: "center",
                justifyItems: "center",
                justifyContent: ["space-between", "space-between"],
              }}
            >
              {logos.map((logo) => {
                const { logoImage } = logo;

                return (
                  <Photo
                    layout="contain"
                    key={logoImage?.id}
                    photo={logoImage}
                    sx={{
                      minHeight: "1.75rem",
                      maxWidth: "4.5rem",
                      width: "100%",
                      aspectRatio: `${logoImage?.aspectRatio}`,
                      "img.object-contain": {
                        objectPosition: "center",
                      },
                    }}
                    hasPlaceholder={false}
                  />
                );
              })}
            </Reveal>
          </Width>
        </Flex>
      </div>
    </section>
  );
};

export default Logotypes;
