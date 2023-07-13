
const Form = () => {
    return (
        <form id="store-form">
            <fieldset>
                <legend id="fieldsettitle">Add A Store</legend>
                <section>
                    <label for="city-input">City of Store (required)</label>
                    <input type="text" id="city-input" name="store_city" placeholder="Seattle" required class="block text-gray-700 text-sm font-bold mb-2" />
                </section>
                <section>
                    <label for="min-input">Minimum Cookies Per Hour (required)</label>
                    <input type="number" id="min-input" name="store_min" placeholder="2" required min="0" class="block text-gray-700 text-sm font-bold mb-2" />
                </section>
                <section>
                    <label for="max-input">Maximum Cookies Per Hour (required)</label>
                    <input type="number" id="max-input" name="store_max" placeholder="42" required min="0" class="block text-gray-700 text-sm font-bold mb-2" />
                </section>
                <section>
                    <label for="avg-input">Avg Cookie Per Customer (required)</label>
                    <input type="number" id="avg-input" name="store_avg" placeholder="5.9" required min="0" class="block text-gray-700 text-sm font-bold mb-2" />
                </section>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Store to Table!</button>
            </fieldset>
        </form>
    );
}

export default Form;
