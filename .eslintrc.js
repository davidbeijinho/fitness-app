module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "function-paren-newline": ["error", "multiline"],
        "no-mixed-operators": ["error", {"allowSamePrecedence": false}],
        "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ]
    },
    "env": {
        "browser": true
      },
};