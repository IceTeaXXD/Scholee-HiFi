import { Box } from '@chakra-ui/react'
import { DashboardCard } from '../components/Dashboard/DashboardCard'
import { DashboardHeading } from '../components/Dashboard/DashboardHeading'
import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <DashboardHeading />
      <Box p="6" display="flex" justifyContent="center" alignItems="center">
        <DashboardCard />
      </Box>
    </Layout>
  )
}
