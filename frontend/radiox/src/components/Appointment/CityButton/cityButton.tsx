import "./cityButton.css"

interface CityButtonProps {
    value: string;
    onClick: () => void;
    isActive: boolean;
  }
  
const CityButton: React.FC<CityButtonProps> = ({ value, onClick, isActive }) => {

    const cityBtnClass = isActive ? 'city-btn city-btn-active' : 'city-btn city-btn-inactive'

    return (
        <button
        onClick={onClick}
        className={cityBtnClass}
        >
        {value}
        </button>
    );
};


  export default CityButton