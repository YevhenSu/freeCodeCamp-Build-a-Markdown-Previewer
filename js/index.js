"use strict";

var App = React.createClass({
    displayName: "App",

    updateValue: function updateValue(changedValue) {
        this.setState({
            value: changedValue
        });
    },

    getInitialState: function getInitialState() {
        return {
            value: 'A First Level Header\n=======\n\nA Second Level Header\n-----------\n \n### Header 3\n \n> This is a blockquote.\n>\n> This is the second paragraph in the blockquote.\n>\n> ### This is an H3 in a blockquote\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n**Unordered lists use asterisks, pluses, and hyphens (*, +, and -) as list markers:**\n\n  * Kings\n  * Queens\n  * Pawns\n\n**Ordered (numbered) lists use regular numbers:**\n\n  1. Kings\n  2. Queens\n  3. Pawns\n\n\n *[Yevhen Susidka](https://www.freecodecamp.com/yevhensu)*\n\nFork of an original work by *[Herman Fassett](http://codepen.io/hermanfassett/pen/EPywYy)*'
        };
    },

    markuped: function markuped(value) {
        var markuped = marked(value, { sanitize: true });
        return { __html: markuped };
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(
                    "h2",
                    null,
                    "You can type GitHub-flavored Markdown into a text area"
                ),
                React.createElement(MarkedInput, { value: this.state.value, updateValue: this.updateValue })
            ),
            React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement("span", { dangerouslySetInnerHTML: this.markuped(this.state.value) })
            )
        );
    }
});

var MarkedInput = React.createClass({
    displayName: "MarkedInput",

    update: function update() {
        var changedValue = this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(changedValue);
    },

    render: function render() {
        return React.createElement("textarea", { rows: "28", type: "text", ref: "inputValue", value: this.props.value, onChange: this.update, className: "form-control" });
    }
});

React.render(React.createElement(App, null), document.getElementById("app"));