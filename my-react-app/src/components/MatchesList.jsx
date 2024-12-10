import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux"
import { fetchMatchesStart, fetchMatchesSuccess,fetchMatchesError } from "../store/fottballSlice"
import {fetchMatches} from "../api/fetchMatches"
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';


const MatchesList =()=>{
    const dispatch = useDispatch();
    const { isLoading, isError, footballMatches } = useSelector((state) => state.football);
    useEffect(() => {
        const getMatches = async () => {
          dispatch(fetchMatchesStart());
          try {
            const data = await fetchMatches();
            dispatch(fetchMatchesSuccess(data));
          } catch (error) {
            dispatch(fetchMatchesError());
          }
        };
    
        getMatches();
      }, [dispatch]);

      if (isLoading) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" />
          </Box>
        );
      }
    
      if (isError) {
        return (
          <Box textAlign="center" mt={10}>
            <Text color="red.500">Something went wrong while fetching matches. Please try again later.</Text>
          </Box>
        );
      }
    
      return (
        <VStack spacing={4} align="stretch" p={4}>
          {footballMatches.length > 0 ? (
            footballMatches.map((match) => (
              <Box
                key={match.id}
                p={4}
                bg="gray.100"
                borderRadius="md"
                shadow="md"
                border="1px"
                borderColor="gray.200"
              >
                <Text><strong>Match:</strong> {match.team1} vs {match.team2}</Text>
                <Text><strong>Venue:</strong> {match.venue}</Text>
                <Text><strong>Date:</strong> {match.date}</Text>
              </Box>
            ))
          ) : (
            <Text>No matches available</Text>
          )}
        </VStack>
      );
    };
    
    export default MatchesList;    

