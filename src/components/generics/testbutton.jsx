import React, { useEffect } from 'react'

const testbutton = () => {

    const [buttonNext, setButtonNext] = useState(1)
    const [buttonPrev, setButtonPrev] = useState(1)


    const nextSlide = (num) => {
        switch (num) {
            case '1':
                return setButtonNext('2'), setButtonPrev('2')
            case '2':
                return setButtonNext('3'), setButtonPrev('3')
            case '3':
                return setButtonNext('1'), setButtonPrev('1')
        }
    }
    const prevSlide = (num) => {
        switch (num) {
            case '1':
                return setButtonPrev('1'), setButtonNext('1')
            case '2':
                return setButtonPrev('2'), setButtonNext('2')
            case '3':
                return setButtonPrev('3'), setButtonNext('3')
        }
    }

    useEffect(() =>{
        prevSlide(1)
        nextSlide(1)
    }, [])



    return (
        <>
            <button className="next" onClick={nextSlide(num++)}></button>
            <button className="prev" onClick={prevSlide(num--)}></button>
        </>
    )
}

export default testbutton






