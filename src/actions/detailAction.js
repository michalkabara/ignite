import axios from "axios"
import { gameDetailsURL, gameSsURL } from "../api"

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  })

  const detailData = await axios.get(gameDetailsURL(id))
  const screenData = await axios.get(gameSsURL(id))

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  })
}
