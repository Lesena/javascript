(() =>
{
    "use strict"

    const getQuizData = url =>
    {
        let key = "JSON_QUIZ_DATA"
        if (key in localStorage)
        {
            let data = JSON.parse(localStorage[key])

            return Promise.resolve(data)
        }

        return fetch(url)
            .then(response => response.json())
            .then(data =>
            {
                localStorage[key] = JSON.stringify(data)

                return data
            })
    }

    const renderData = data =>
    {
        let form = document.querySelector("form")

        form.innerHTML = data.map(d =>
        {
            let answers = d.answers
                .map(answer => `<li>${answer}<input type=checkbox>`)
                .join("")

            return `<section data-correct=${d.correct}>
                <h1>${d.question}</h1>
                <ul>${answers}</ul>
            </section>`
        })
        .join("")

        return form
    }

    const setupEvents = form =>
    {
        let button = document.createElement("button")
            button.textContent = "Submit"

        let sections = [ ...form.querySelectorAll("section") ]
        let inputs = form.querySelectorAll("input")

        form.appendChild(button)
        form.addEventListener("submit", event =>
        {
            event.preventDefault()

            let { length } = sections.filter(section =>
            {
                let correct = section.dataset.correct.split(",").map(Number)
                let inputs = [ ...section.querySelectorAll("input") ]

                return inputs.every((input, index) =>
                {
                    return correct.includes(index) == input.checked
                })
            })

            dialog.showModal()
            dialog.innerHTML =
            `
                <h1>Results</h1>
                <br>correct: ${length}
                <br>wrong: ${sections.length - length}
                <br>
                <button>Restart</button>
            `
        })

        let dialog = document.querySelector("dialog")

        dialog.addEventListener("click", ({ target }) =>
        {
            if (target.matches("button"))
                for (let input of inputs)
                    input.checked = false

            dialog.close()
        })
    }

    getQuizData("data.json")
        .then(renderData)
        .then(setupEvents)
})()
