import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import useAuth from "../../hooks/useAuth"

export const DashboardHeading: React.FC = () => {
    const { auth } = useAuth()
    return (
        <Box paddingLeft="9" paddingRight="9" paddingTop="10">
            <Heading marginBottom={3}>
                Hello, Sukmana
            </Heading>
            {auth.role === 'admin' ? <></> : <>
                <Flex justifyContent="space-between">
                    <Button bg="primary.300" color={"white"}>
                        Upload CV
                    </Button>
                    <Button bg="primary.300" color={"white"}>
                        Apply for scholarships
                    </Button>
                </Flex>
            </>}
        </Box>
    )
}