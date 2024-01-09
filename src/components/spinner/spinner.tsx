import { RotatingLines } from 'react-loader-spinner';

export function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible />
    </div>
  );
}
