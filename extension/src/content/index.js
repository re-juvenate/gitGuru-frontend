let sidebar = document.querySelector('.Layout-sidebar');
let div = document.createElement('div');
function Explanation(){
    let text = "EXplaNation"
    div.innerHTML = ``
}
let text = "hello"
div.innerHTML = `
<style>
.total{
    background-color: #0d1117;
}
.gitguru-text {
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
    background-color: #161b22;
    letter-spacing: normal;
    font-family: BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.logo-small {
    margin-top: auto;
    background-color: #161b22;
    margin-bottom: auto;
    width: 22px;
    height: 22px;
    margin-left: 16px;
}

.header{
    background-color: #161b22;
    height: 38px;
    text-align: left;
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: flex;
}

.radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.4rem;
    background-color: #0d1117;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    width: 300px;
    margin: auto;
    margin-top: 10px;
    font-size: 14px;
}

.radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
}

.radio-inputs .radio input {
    display: none;
}

.radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
    background-color: #fff;
    font-weight: 600;
}

.textBox {
    display: block;
    color: #EEE;
    font-size: 14px;
    width: 100%;
    padding: 12px 20px;
    align-items: center;
    margin: 8px auto;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #161b22;
    resize: none;
}
</style>

<div class = "total">
<div class="header">
<img src="logo.png" alt="GitGuru Logo" class="logo-small" />
<div class="gitguru-text">
Git Guru
</div>
</div>
<div class='wow'>
<div class="radio-inputs">
<label class="radio">
<input type="radio" name="radio" checked />
<span class="name">Explanation</span>
</label>
<label class="radio">
<input type="radio" name="radio" />
<span class="name">Summary</span>
</label>
<label class="radio">
<input type="radio" name="radio" />
<span class="name">Solutions</span>
</label>
</div>
${text = "Meow"}
<p class="textBox">${text}</p>
</div>
</div>
`;
sidebar.insertBefore(div, sidebar.firstChild);