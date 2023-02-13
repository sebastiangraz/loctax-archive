import { Box, Flex, Avatar, Text } from "theme-ui";
import { sanityClient } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

export const Author = ({ asset, name, ...rest }) => {
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const getInitials = (name) =>
    name
      .replace(/[^A-Za-z0-9À-ÿ ]/gi, "") // taking care of accented characters as well
      .replace(/ +/gi, " ") // replace multiple spaces to one
      .split(/ /) // break the name into parts
      .reduce((acc, item) => acc + item[0], "") // assemble an abbreviation from the parts
      .concat(name.substr(1)) // what if the name consist only one part
      .concat(name) // what if the name is only one character
      .substr(0, 2) // get the first two characters an initials
      .toUpperCase();

  return (
    <>
      <Box
        {...rest}
        sx={{
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 0 1px currentColor",
          borderRadius: "pill",
        }}
      >
        <Flex sx={{ height: "100%", width: "100%", padding: "3px" }}>
          {asset ? (
            <Avatar
              sx={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              alt="author"
              src={urlFor(asset).width(100)}
            />
          ) : (
            <Text
              sx={{
                m: 0,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {name && getInitials(name)}
            </Text>
          )}
        </Flex>
      </Box>

      {/* <Text variant="label" sx={{ wordBreak: "break-word" }}>
        {name}
      </Text> */}
    </>
  );
};
