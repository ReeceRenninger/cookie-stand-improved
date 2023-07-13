"use client";
import { useState } from 'react';
import Store from './Store';

const Form = () => {

  const [name, setName] = useState('');
  const [minCust, setMinCust] = useState(0);
  const [maxCust, setMaxCust] = useState(0);
  const [avgCookie, setAvgCookie] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setStores([...props.stores, new Store(name, minCust, maxCust, avgCookie)]);
    setShowForm(false);
    }

    return (
        <>
        {/* tried setting to true but was acting wonky so trying to use showForm */}
        <button onClick={() => setShowForm(!showForm)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Store</button>
        {showForm && (
        <form class="w-full max-w-sm" id="store-form">
            <fieldset>
                {/* <legend id="fieldsettitle">Add A Store</legend> */}
                <section>
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="city-input">City of Store (required)</label>
                    <input type="text" id="city-input" name="store_city" placeholder="Seattle" required class="text-slate-950" 
                    onChange={(e) => setName(e.target.value)}/>
                </section>
                <section>
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="min-input">Minimum Cookies Per Hour (required)</label>
                    <input type="number" id="min-input" name="minCust" placeholder="2" required min="0" class="text-slate-950" 
                    onChange={(event) => setMinCust(+event.target.value)}/>
                </section>
                <section>
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="max-input">Maximum Cookies Per Hour (required)</label>
                    <input type="number" id="max-input" name="maxCust" placeholder="42" required min="0" class="text-slate-950" 
                    onChange={(e) => setMaxCust(+e.target.value)}/>
                </section>
                <section>
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="avg-input">Avg Cookie Per Customer (required)</label>
                    <input type="number" id="avg-input" name="store_avg" placeholder="5.9" required min="0" maxLength="10" class="text-slate-950" 
                    onChange={(e) => setAvgCookie(+e.target.value)}/>
                </section>
                <button className="text-slate-950" type='submit' onClick={() => handleSubmit()} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Store to Table!</button>
            </fieldset>
        </form>
        )}
        </>
    );
}

export default Form;
