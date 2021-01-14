import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalDispatchContext } from "../GlobalContext";

function useSetCurrentSection(url) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const dispatch = useGlobalDispatchContext();

  useEffect(() => {
    if (inView) {
      dispatch({
        type: "SET_CURRENT_SECTION",
        payload: url,
      });
    }
  }, [inView, dispatch, url]);

  return ref;
}

export default useSetCurrentSection;
