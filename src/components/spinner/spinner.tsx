import { RotatingLines } from 'react-loader-spinner';

interface ISpinnerProps {
  size?: string;
}

export function Spinner({ size = 'small' }: ISpinnerProps): React.JSX.Element {
  return (
    <div className={`spinner-container spinner-container--${size}`} data-testid="spinner">
      <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible/>
    </div>
  );
}
