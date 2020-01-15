import css from 'styled-jsx/css'

export default css`
    form {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 20px;
        max-width: 500px;
        margin-left: calc(50% - 250px);
        margin-top: 200px;
    }

    form small {
        display: block;
        font-size: 10px;
    }

    form input {
        width: calc(100% - 1.5rem);
        border-radius: .25rem;
        border: 1px solid #ced4de;
        font-size: 16px;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        padding: .375rem .75rem;
        outline: none;
        margin-bottom: .3rem;
    }

    form input:focus {
        box-shadow: 0 0 3px 3px #b3e0ff;
        border-color: #66c2ff;
    }

    form label {
        display: block;
        margin-bottom: .5rem;
    }

    form button {
        outline: none;
        padding: .5rem 1rem;
        margin-right: 1rem;
        font-size: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        background-color: #008ae6;
        border-color: #008ae6;
        color: #fff;
        transition: box-shadow .15s ease-in-out;
    }

    form button:hover {
        background-color: #006bb3;
        border-color: #006bb3;
        cursor: pointer;
    }

    form button:focus {
        box-shadow: 0 0 3px 3px #b3e0ff;
    }

    form div {
        margin-bottom: 1rem;
    }

    form .intro {
        padding: 10px;
        font-size: 28px;
        font-weight: bold;
        border-bottom: 2px solid #777;
    }

    form .error {
        font-size: 16px;
        color: red;
        margin-bottom: .25rem;
    }
`