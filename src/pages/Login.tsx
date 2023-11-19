import { useState } from "react"
import { motion } from "framer-motion"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    useColorMode,
    useColorModeValue,
    Box,
    Image,
    IconButton,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaSun, FaMoon } from "react-icons/fa"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

const Login = () => {
    const { auth, setAuth } : any = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("white", "gray.800")
    const buttonColor = useColorModeValue("gray.800", "white")

    const navigate = useNavigate()
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        if (email === 'user@user.com' && password === "password") {
            setAuth({ email: email, password: password, role: "user" });
            navigate("/dashboard")
        } else if (email === 'admin@admin.com' && password === "password") {
            setAuth({ email: email, password: password, role: "admin" });
            navigate("/dashboard")
        }
        
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Flex h="100vh" w="100vw">
                {/* IMAGE */}
                <Box
                    display={{ base: "none", md: "block" }}
                    w={{ base: "0%", md: "50%" }}
                    overflow="hidden"
                >
                    <Image
                        alt="login-prop"
                        src="https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080"
                        h="100%"
                    />
                </Box>

                {/* FORM */}
                <Flex
                    flexDirection="column"
                    w={{ base: "100%", md: "50%" }}
                    maxW="1000px"
                    rounded={6}
                    bg={formBackground}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box p={12} borderRadius={8} w="100%">
                        <Heading mb={6}>Log In</Heading>
                        <FormControl variant="floating" id="email" isRequired>
                            <Input
                                placeholder=" "
                                type="text"
                                mb={5}
                                required
                                borderWidth={1}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormLabel bg={formBackground}>Email</FormLabel>
                        </FormControl>
                        <FormControl variant="floating" id="password" isRequired>
                            <InputGroup>
                                <Input
                                    placeholder=" "
                                    type={showPassword ? "text" : "password"}
                                    mb={5}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FormLabel bg={formBackground}>Password</FormLabel>
                                <InputRightElement>
                                    <IconButton
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                        onClick={handlePasswordVisibility}
                                        variant="ghost"
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <form onSubmit={handleSubmit}>
                            <Button
                                type="submit"
                                bg={buttonColor}
                                color={formBackground}
                                _hover={{ bg: "gray.600", color: "gray.200" }}
                                mb={8}
                                w="100%"
                            >
                                Log In
                            </Button>
                        </form>
                        <Box position="absolute" top="2" right="2">
                            <IconButton
                                aria-label="Toggle Dark Mode"
                                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                                color={buttonColor}
                                onClick={toggleColorMode}
                            />
                        </Box>
                        <FormControl>
                            <FormLabel>
                                Don't have an account?{" "}
                                <Link to="/register">
                                    {" "}
                                    <u>Register</u>
                                </Link>
                            </FormLabel>
                        </FormControl>
                    </Box>
                </Flex>
            </Flex>
        </motion.div>
    )
}

export default Login
