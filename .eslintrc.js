module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
		"prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
	"ignorePatterns": [
		".editorconfig",
		".eslintrc.js",
		"package*.json"
	],
    "rules": {
		"no-tabs": ["error", {"allowIndentationTabs": true}],
		"quotes": [
			"error",
			"single",
			{ "avoidEscape": true, "allowTemplateLiterals": false }
		],
		"react/prop-types": [0]
    }
};
