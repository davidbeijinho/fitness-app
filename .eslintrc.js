module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "function-paren-newline": ["error", "multiline"],
        "no-mixed-operators": ["error", {"allowSamePrecedence": false}],
    },
    "env": {
        "browser": true
      },
};