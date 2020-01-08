import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <Flex
        as="nav"
        bg="lightBlue.m800"
        align="center"
        justify="space-between"
        px="64px"
      >
        <LogoLink to="/">
          <Heading
            as="h1"
            color="grey.m200"
            fontSize="20px"
            textTransform="uppercase"
          >
            Startup
            <Text as="span" color="grey.m50" ml="2px">
              Reporter
            </Text>
          </Heading>
        </LogoLink>
        <Box>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Menu>
            <MenuButton as={Link} mr="-16px">
              Advertise
              <Icon
                name="chevron-down"
                size="24px"
                ml="5px"
                position="relative"
                bottom="1px"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Events</MenuItem>
              <MenuItem>Classifieds</MenuItem>
              <MenuItem>Banner Ads</MenuItem>
              <MenuItem>Press Releases</MenuItem>
            </MenuList>
          </Menu>
          {/* <Link to="/advertise">Advertise</Link> */}
          <Link to="/contact">Contact</Link>
        </Box>
      </Flex>
    </header>
  </Layout>
)

const Link = props => (
  <ChakraLink
    as={GatsbyLink}
    color="grey.m100"
    display="inline-block"
    fontSize="15px"
    fontWeight="600"
    p="18px"
    textTransform="uppercase"
    _hover={{ bg: "lightBlue.m700", textDecoration: "none" }}
    {...props}
  >
    {props.children}
  </ChakraLink>
)

const LogoLink = props => (
  <Link
    as={GatsbyLink}
    display="inline-block"
    _hover={{ textDecoration: "none" }}
    {...props}
  >
    {props.children}
  </Link>
)

export default IndexPage
