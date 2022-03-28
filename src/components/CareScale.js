import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';


const quantityLabel ={
    1 : 'a little bit',
    2 : 'moderate quantity',
    3 : 'a lot'
};


function CareScale({scaleValue, careType})
{
    const range = [1,2,3];
    const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon'/>) 
        : (<img src={Water} alt='water-icon'/>);

    return (
        <div onClick={() => alert(`This plant requires ${quantityLabel[scaleValue]} ${careType === 'light' ? 'of light ' : 'of water'}`)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? (
                <span key={rangeElem.toString()} > {scaleType}</span>
            ) : null
            )}
        </div>
    );
}

export default CareScale;