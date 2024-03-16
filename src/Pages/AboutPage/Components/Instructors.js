import React , {useEffect , useRef} from "react"
import Instructor from "./Instructor";
import Title from "../../../UI/Title/Title";
import { useAnimation , useInView } from "framer-motion";
const Instructors = (props) => {
    const content = props.inst.map((instructor , index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <Instructor
                firstName={instructor.firstName}
                lastName={instructor.lastName}
                diplome={instructor.diplome}
                image={instructor.image}
                delay={index * 0.4 + 0.8}
            />
        </div>
    ))
    const titleRef = useRef()
    const titleIsInView = useInView(titleRef , {once: true})
    const titleControls = useAnimation()
    useEffect(() => {
        if (titleIsInView) {
            titleControls.start("visibleTitle")
        }
    } , [titleIsInView])
    const slogonRef = useRef()
    const slogonIsInView = useInView(slogonRef , {once: true})
    const slogonControls = useAnimation()
    useEffect(() => {
        if (slogonIsInView) {
            slogonControls.start("visibleSlogon")
        }
    } , [slogonIsInView])
    return (
        <div className="container">
            <Title h5="Insructors" h1="Expert Instructors" delay5={0.4} delay1={0.8} />
            <div className="row">
                {content}
            </div>
        </div>
    )  
}
export default Instructors