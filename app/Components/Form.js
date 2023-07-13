"use client";
import { useState } from 'react';
import Store from './Store';

const Form = (props) => {

  const [name, setName] = useState('');
  const [minCust, setMinCust] = useState(0);
  const [maxCust, setMaxCust] = useState(0);
  const [avgCookie, setAvgCookie] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    props.setStores([...props.stores, new Store(name, minCust, maxCust, avgCookie)]);
    setShowForm(false);
    }

    return (
        <>
        {/* tried setting to true but was acting wonky so trying to use showForm */}
        <button onClick={() => setShowForm(!showForm)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Store</button>
        {showForm && (
        <form className="w-full max-w-sm" id="store-form">
            <fieldset>
                {/* <legend id="fieldsettitle">Add A Store</legend> */}
                <section>
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">City of Store (required)</label>
                    <input type="text" placeholder="Seattle" required className="text-slate-950" 
                    onChange={(e) => setName(e.target.value)}/>
                </section>
                <section>
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">Minimum Cookies Per Hour (required)</label>
                    <input type="number" placeholder="2" required min="0" className="text-slate-950" 
                    onChange={(event) => setMinCust(+event.target.value)}/>
                </section>
                <section>
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">Maximum Cookies Per Hour (required)</label>
                    <input type="number" placeholder="42" required min="0" className="text-slate-950" 
                    onChange={(e) => setMaxCust(+e.target.value)}/>
                </section>
                <section>
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">Avg Cookie Per Customer (required)</label>
                    <input pattern="^(\d*\.)?\d+$" placeholder="5.9" min="0.0" required  className="text-slate-950" 
                    onChange={(e) => setAvgCookie(+e.target.value)}/>
                </section>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type='submit' onClick={handleSubmit}>Add Store to Table!</button>
            </fieldset>
        </form>
        )}
        </>
    );
}

export default Form;
