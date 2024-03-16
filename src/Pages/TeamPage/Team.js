import React, { Fragment, useEffect } from "react"
import { json, useLoaderData } from "react-router"
import AllInstructors from "./Components/AllInstructors";
import Header from "../../UI/Header/Header";
import { getInstructors} from '../../store/actions/instructorsActions';
import { useDispatch, useSelector } from "react-redux";
import HomePic1 from "../../img/carousel-1.jpg"
const Team = (props) => {
    const data = useLoaderData()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInstructors());
      }, [dispatch]);
    const insructors = useSelector((state) => state.instructorReducer.instructors)
    return (
        <Fragment>
            <Header text="Instructors" pic={HomePic1} />
            <AllInstructors team={insructors} />
        </Fragment>
    )
}
export default Team
// export async function loadedAllInstructors() {
//     const response = await fetch("https://elearning-react-9cbb7-default-rtdb.firebaseio.com/instuctors.json")
//     if (!response.ok) {
//         throw json({ message: "could not fetch fetch insructors" });
//     }
//     else {
//         const data = await response.json();
//         const instructors = [];
//         for (const [key, value] of Object.entries(data)) {
//             instructors.push(value);
//         }
//         return instructors;
//     }
// }