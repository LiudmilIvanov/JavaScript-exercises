const elements = {
    
    input: () => document.querySelector('input#towns'),
    button: () => document.querySelector('button#btnLoadTowns'),
    root: () => document.querySelector('div#root'),

};

elements.button().addEventListener('click', getInputInformaiton);

function getInputInformaiton(e) {
    e.preventDefault();
    const { value } = elements.input();
    const towns = value.split(', ').map((t) => { return { name: t } })
    appendTowns(towns);
};

function appendTowns(towns) {
    getTemplate()
        .then((templateSource) => {
            const template = Handlebars.compile(templateSource);
            const htmlResult = template({towns});
            elements.root().innerHTML = htmlResult;

        })
        .catch((e) => console.error(e));

};

function getTemplate() {
    return fetch('./template.hbs').then((response) => response.text());
}