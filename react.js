const YourReactComponent = () => {
    return (
        <div>
            <h1>LET'S SPEAK FRENCH</h1>

            <section class="language-level">
        <h2>A1</h2>
        <p>	Can understand and use colloquial, everyday expressions and very simple statements that are intended to meet concrete needs. May introduce themselves or someone else and ask a person questions about themselves – for example, where they live, their relationships, what belongs to them, etc. – and can answer the same type of questions. Can communicate in a simple way if the other person speaks slowly and clearly and is cooperative</p>
        </section>

    <section class="language-level">
        <h2>A2</h2>
        <p>	May include isolated sentences and frequently used phrases in relation to immediate areas of priority (e.g., simple personal and family information, shopping, close environment, work). Can communicate during simple and routine tasks requiring only a simple and direct exchange of information on familiar and usual subjects. Can describe his/her training, immediate environment and discuss topics that correspond to immediate needs.</p>
    </section>

    <section class="language-level">
        <h2>B1</h2>
        <p>	Can understand the essential points when clear, standard language is used and if they are familiar things at work, school, leisure, etc. Can cope with most situations encountered while traveling to an area where the target language is spoken. Can produce a simple and coherent speech on familiar topics and in areas of interest. Can recount an event, experience, or dream, describe a hope or goal, and briefly explain reasons or explanations for a project or idea.</p>
    </section>

    <section class="language-level">
        <h2>B2</h2>
        <p>	Can understand the essential content of concrete or abstract topics in a complex text, including a technical discussion in his/her specialty. Can communicate with a degree of spontaneity and fluency such that a conversation with a native speaker involves no tension for either of them. Can express themselves clearly and in detail on a wide range of topics, express an opinion on a current topic and explain the advantages and disadvantages of different options.</p>
    </section>
        </div>
    );
};

ReactDOM.render(<YourReactComponent />, document.getElementById('app'));
