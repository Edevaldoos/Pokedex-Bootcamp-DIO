
    * {
    margin: 0;
    padding: 0;
    font-size: 1em;
}

html, body {
    min-width: 100vh;
    background-color:darkgray;
    font-family: var(--fonte1);
}

header {
    background-color: #000000cc;
    color: aliceblue;
}

header > h1 {
    padding-top: 50px;
    font-variant: small-caps;
    font-family: var(--fonte2);
    font-size: 7vw;
    text-align: center;
}

header > p {
    padding-bottom: 50px;
    text-align: center;
    font-size: 1.5vw;
    font-family: var(--fonte3);
    font-variant: small-caps;
}

header a{
    color: aliceblue;
    text-decoration: none;
    font-weight: normal;
    font-family: var(--fonte3);
    font-variant: small-caps;
}

header a:hover, footer a:hover {
    text-decoration: underline;
}

section {
    padding-top: 10vh;
    padding-bottom: 10vh;
    line-height: 1.8em;
    /* padding-left: 100px; */
    font-family: var(--fonte3);
    font-size: 2.2vw;
    text-align: center;
}

section > p {
    padding-bottom: 2em;
}

section.normal {
    background-color: aliceblue;
    color: rgba(0, 0, 0, 0.8);
}

section.img {
    background-color: rgb(44, 44, 44);
    color: aliceblue;
    box-shadow:inset 6px 6px 13px 0px rgba(0, 0, 0, 0.39);
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
}

section.img > p {
    display: inline-block;
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.500);
    text-shadow: 0.5px 0.5px 0px black;
}

section#img01 {
    background-image: url(imagens/background003.jpg);
    background-position: center center;
}

section#img02 {
    background-image: url(imagens/background002.jpg);
    background-position: center center;
}

footer {
    background-color: black;
    color: aliceblue;
    text-align: center;
    padding: 20px;
}

footer a {
    color: aliceblue;
    text-decoration: none;
    font-weight: bolder;
}