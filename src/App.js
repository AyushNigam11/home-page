import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Heading,
  IconButton,
  Button,
  Image,
  Menu,
  ButtonProps,
  props,
  extendTheme,
  MenuButton,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  MenuItem,
  Input,
  List,
  ListItem,
  ListIcon,
  Divider,
  MenuDivider,
  VStack,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons";
import { FcLike, FcShare, FcComments, FcPlus } from "react-icons/fc";
import {
  BsThreeDotsVertical,
  BsChatSquareQuote,
  BsFillBellFill,
  BsUpload,
  BsTagFill,
} from "react-icons/bs";

import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const Links = ["Dashboard", "Projects", "Team"];
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontSize="2xl" as="b">
                Anime By Me
              </Text>
            </Box>
          </HStack>
          <HStack ml={30} width={500} pl={20}>
            <Input placeholder="Search" />
          </HStack>
          <HStack mr={20} pr={10}>
            <Stack direction="row" spacing={8} align="center" mr={45}>
              <Button colorScheme="yellow" variant="solid" mr={50}>
                Search
              </Button>
            </Stack>
          </HStack>
          <HStack>
            <Button colorScheme="red" variant="solid">
              Email
            </Button>
            <Button colorScheme="red" variant="solid">
              Call us
            </Button>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Log-Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Stack>
          <HStack>
            <Box
              maxW={"810px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"280px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
                width={900}
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                  layout={"fill"}
                />
                <Text fontWeight={600}>Achim Rolle</Text>
                <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              </Box>

              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                  alt={"Author"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
            <Box pl={10} pr={10}>
              <VStack spacing={8}>
                <IconButton
                  colorScheme="gray"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FcLike />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FcComments />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FcShare />}
                />

                <IconButton
                  colorScheme="gray"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FcPlus />}
                />
              </VStack>
            </Box>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              px={0}
              h="75vh"
            >
              <Image
                h={"120px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6} pt={15}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    Vishnu Kaushal
                  </Heading>
                  <Text color={"gray.500"} as="b">
                    Content Creator
                  </Text>
                </Stack>

                <Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>230k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Subscribers
                    </Text>
                  </Stack>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>45k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={"full"}
                  mt={4}
                  bg={useColorModeValue("#edbf1a", "yellow.900")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Subscribe
                </Button>
                <Divider mt={3} />
                <Text mt={2}>
                  Vishnu Kaushal I make funny videos, design clothes & act. ✨
                  <br />
                  aesthetics & designs: @vishnutoo 🌿 label @peachbyvishnu ⤵️
                  <br />
                  How i became an actor youtu.be/5wUg10XL4NY
                </Text>
              </Box>
            </Box>
          </HStack>
        </Stack>
      </Box>
      <Box pl={4} pb={4}>
        <HStack>
          <Text fontSize="2xl" as="b">
            Savage replies by Vishnu Kaushal
          </Text>

          <Text fontSize="xs" pl={132}>
            36 mins ago - 23K Views
          </Text>
          <Flex h="10vh" justifyContent="center" alignItems="center">
            <Button
              /* flex={1} */
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"yellow.500"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(250 160 70 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "yellow.500",
              }}
              _focus={{
                bg: "yellow.500",
              }}
            >
              Subscribe
            </Button>
          </Flex>
          <Flex justifyContent="center" mt={4}>
            <Popover placement="bottom" isLazy>
              <PopoverTrigger>
                <IconButton
                  aria-label="More server options"
                  icon={<BsFillBellFill />}
                  variant="solid"
                  w="fit-content"
                />
              </PopoverTrigger>
              <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
                <PopoverArrow />
                <PopoverBody>
                  <Stack>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<BsChatSquareQuote />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Support
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<BsUpload />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                    >
                      Videos
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<BsTagFill />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                    >
                      Stories
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<RiShutDownLine />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                    >
                      Disable Bell Icon
                    </Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </HStack>
      </Box>
      <Divider />
      <Box pt={5} align="centre" pl={4} pb={4} pr={4}>
        <Text fontSize="3xl" align={"center"}>
          Recommended For You🤩
        </Text>
      </Box>
      <Box pt={5}>
        <VStack spacing={6}>
          <Box>
            <HStack spacing={6}>
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
            </HStack>
          </Box>
          <Box>
            <HStack spacing={6}>
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
            </HStack>
          </Box>
          <Box>
            <HStack spacing={6}>
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                width={400}
                height={60}
              />
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Divider pt={5} />
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Buy Anime By Me Premium
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Hobby
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rs
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  79
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited video minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />2 Devices
                  Allowed
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  No Parallel Streaming
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="yellow" variant="outline">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("yellow.300", "yellow.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("yellow.900", "yellow.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Growth
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    Rs
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    149
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("yellow.50", "yellow.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited Video minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />0 Ad
                    Experience
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    15GB Cloud Download
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />4 Devices
                    Allowed
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="yellow">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Career
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Rs
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  349
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited video minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />0 Ad
                  Experience
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  25TB Cloud Storage
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="yellow" variant="outline">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
      <Box
        pt={6}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Install App</ListHeader>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
