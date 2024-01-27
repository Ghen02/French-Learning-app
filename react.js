const YourReactComponent = () => {
    return (
        <div>
            <h1>French Learning Language App</h1>
            <section className="language-level">
                <h1>DELF A2</h1>
                <h2>What is A2 Level French? - Everything You Need to Know</h2>
                <p>The A2 level French is an elementary stage in the Common European Framework of Reference for Languages (CEFR), which is widely recognized and used to assess language proficiency.</p>
                <p>Achieving an A2 French marks a significant milestone in language learning. Clearing the A2 level French exam implies that learners have made significant progress in their language journey and can handle simple everyday situations.</p>
                <p>Achieving French level A2 has several benefits. It enables learners to engage in basic conversations with native speakers, navigate common situations during travel, as well as gain a deeper understanding of French culture.</p>
                <a href="https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a2" target="_blank" className="learn-more-link">Learn More about A2 Level French</a>
            </section>

            <section className="language-level">
                <h1>DELF B1</h1>
                <h2>What is B1 Level French? - Complete Information</h2>
                <p><b>B1 level French</b> is the third level in the Common European Framework of References (CEFR). Level B1, also known as <b>‘Threshold’</b> or <b>‘Breakthrough’</b> stage. When you pass the <b>B1 French exam</b>, you move into an intermediate level of French, which makes you an <b>“independent speaker”</b>.</p>
                <p>It is the stage through which a French speaker moves away from the most simplistic language to cope with complex situations encountered when traveling in <b><u>French-speaking countries.</u></b> </p>
                <a href="https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b1" target="_blank" className="learn-more-link">Learn More about B1 Level French</a>
            </section>
        </div>
    );
};

ReactDOM.render(<YourReactComponent />, document.getElementById('app'));
