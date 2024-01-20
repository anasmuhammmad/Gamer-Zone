import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ScreenShot  from "../entities/Screenshot";


const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`)

 return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
})
}
export default useScreenshots;