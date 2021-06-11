import React, { FC, ReactNode } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';


export type SliderType = 'default' | 'circle' | 'dash'

export interface ISliderItemProps {
  /** set customized card */
  className?: string;
  /** set slider animation */
  sliderAnimat?: string;
  /** set slider image */
  sliderImgSrc?: string;
  /** set slider title */
  silderTitle?: string;
  /** set slider description */
  sliderDescription?: string;
  /** set onClick */
  slideOnClick?: ()=>void;
  /** set active */
  slideActive?: boolean;
}

/**
 *A Slider Module
 *
 * ```js
 * import {Slider} from 'pat-ui'
 * ```
 */
export const SliderItem: FC<ISliderItemProps> = (props) => {
  const {
    className,
    sliderImgSrc,
    silderTitle,
    sliderDescription,
    slideOnClick,
    slideActive,
    ...rest
  } = props;
  let styleClasses = classNames('slider-item', {
    slideActive: !!(slideActive)
});
  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <div className={styleClasses} onClick={slideOnClick} >
      <img className={styleClasses + '-image'} src={sliderImgSrc} />
      <div className={styleClasses + '-body'}>
        <h4>{silderTitle}</h4>
        <p>{sliderDescription}</p>
      </div>
    </div>
  );
}

  SliderItem.defaultProps = {
      slideActive:false
  }

export default SliderItem;
