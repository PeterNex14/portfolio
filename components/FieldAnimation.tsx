"use client";
import { TypeAnimation } from "react-type-animation"

const SkillsFieldComponents = () => {
    return (
        <TypeAnimation
            sequence={[
                "Android Developer",
                2000,
                "Frontend Developer",
                2000,
            ]}
            wrapper="span"
            speed={20}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default SkillsFieldComponents