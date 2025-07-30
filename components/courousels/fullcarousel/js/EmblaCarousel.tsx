'use client'


import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="h-[35vh] embla__slide rounded-3xl border border-[#F2F1F1] p-1" key={index}>
              <div className='h-[70%] w-full flex rounded-t-3xl justify-center items-center primary-button-background'>
                <span className='font-semibold text-2xl text-white'>Welcome to Our Presentation</span>
              </div>
              <div>
                <p className='text-lg w-full pt-3 text-center text-[#595657]'>Transform your business with cutting-edge technology and strategic insights that drive growth and success.</p>                
              </div>

            </div>
          ))}
        </div>
      </div>

        {/* <div className="embla__buttons"> */}
          <div className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white flex justify-center items-center w-[30px] h-[30px] rounded-full'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          </div>

          <div className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white flex justify-center items-center rounded-full w-[30px] h-[30px]'>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
    </div>
  )
}

export default EmblaCarousel
