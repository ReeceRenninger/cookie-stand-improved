"use client";
import { useState } from 'react';

const Form = () => {

  const [name, setName] = useState('');
  const [minCust, setMinCust] = useState(0);
  const [maxCust, setMaxCust] = useState(0);
  const [avgCookie, setAvgCookie] = useState(0);


    return (
        <form id="store-form">
            <fieldset>
                <legend id="fieldsettitle">Add A Store</legend>
                <section>
                    <label for="city-input">City of Store (required)</label>
                    <input type="text" id="city-input" name="store_city" placeholder="Seattle" required class="text-slate-950" />
                </section>
                <section>
                    <label for="min-input">Minimum Cookies Per Hour (required)</label>
                    <input type="number" id="min-input" name="store_min" placeholder="2" required min="0" class="text-slate-950" />
                </section>
                <section>
                    <label for="max-input">Maximum Cookies Per Hour (required)</label>
                    <input type="number" id="max-input" name="store_max" placeholder="42" required min="0" class="text-slate-950" />
                </section>
                <section>
                    <label for="avg-input">Avg Cookie Per Customer (required)</label>
                    <input type="number" id="avg-input" name="store_avg" placeholder="5.9" required min="0" class="text-slate-950" />
                </section>
                <button className="text-slate-950">Add Store to Table!</button>
            </fieldset>
        </form>
    );
}

export default Form;

