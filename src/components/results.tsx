import {
  selectAnimalEmissions,
  selectTotalAnimalWeight,
} from '../features/beefSlice';
import {
  selectDieselYearlyUse,
  selectFuelEmissions,
  selectPetrolYearlyUse,
} from '../features/fuelSlice';
import Result from './result';

const resultDefinitions = [
  { label: 'Diesel yearly use (litres)', selector: selectDieselYearlyUse },
  { label: 'Petrol yearly use (litres)', selector: selectPetrolYearlyUse },
  { label: 'Total animal weight (kg)', selector: selectTotalAnimalWeight },
  { label: 'Total fuel emissions', selector: selectFuelEmissions },
  { label: 'Total animal emissions', selector: selectAnimalEmissions },
];

export const Results = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Results</h3>
      <div className="flex flex-col">
        {resultDefinitions.map((result, index) => (
          <Result key={index} label={result.label} selector={result.selector} />
        ))}
      </div>
    </div>
  );
};
