/* eslint-disable react/prop-types */


export default function Filter({ onFilterChange }) {
    const handleFilterChange = (e) => {
        let selectedHorns = null;
        console.log(e.target.value);
        if(e.target.value > 0){ selectedHorns = parseInt(e.target.value);}
        
        onFilterChange(selectedHorns);
    };

    return (
        <div>
            <label>
                Filter by Horns:
                <select onChange={handleFilterChange}>
                    <option value={null}>All</option>
                    <option value={1}>1 Horn</option>
                    <option value={2}>2 Horns</option>
                    {/* Add more options for different numbers of horns */}
                </select>
            </label>
        </div>
    );

}

