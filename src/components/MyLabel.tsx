import './MyLabel.css';

interface Props {
  /**
   *  Text to display
   */
  label: string;

  /**
   *  Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize all letters 
   */
  AllCaps?: boolean;

  /**
   *  Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   *  Font color
   */
  fontColor?: string;
}


export const MyLabel = ({
    label,
    size = 'normal',
    AllCaps = false,
    color,
    fontColor,
}: Props) => {
  return (
    <span 
        className={`${ size } ${ color } label`} 
        style={{ color: fontColor }}
    >
        { AllCaps ? label.toUpperCase() : label }
    </span>
  )
}
