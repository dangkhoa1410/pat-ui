import React, { CSSProperties, FC, ReactNode } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';
import SliderItem from './SliderItem'


export type SliderType = 'default' | 'circle' | 'dash'
export type SliderAnimation = 'fade'

export interface ISliderProps {
  /** set customized card */
  className?: string;
  /** set slider type */
  sliderAnimation?: SliderAnimation;
  /** set slider type */
  sliderType?: SliderType;
  styles?: CSSProperties;
  /** set slider children */
  children: ReactNode;
}

/**
 *A Slider Module
 *
 * ```js
 * import {Slider} from 'pat-ui'
 * ```
 */
export const Slider: FC<ISliderProps> = (props) => {
  const {
    className,
    sliderAnimation,
    sliderType,
    styles,
    children,
    ...rest
  } = props;
  let styleClasses = classNames('slider', {
    [`${sliderAnimation}`]: true,
    [`slider-${sliderType}`]: true,
});
  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <div className={styleClasses} style = {styles} {...rest}>
      {/* Pass children */}
      {children}

      {/* Render next/pre side button */}
      <a className="prev" >&#10094;</a>
      <a className="next" >&#10095;</a>

      {/* Render slider navigation bar */}
      <div className={"slider-nav"}>
        <span className={'slider-nav-'+sliderType}></span>
      </div>
    </div>
  )}

  Slider.defaultProps = {
    sliderType : 'default',
    sliderAnimation: 'fade'
  }
export default Slider;
